import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { postNewComment } from "../utils/api";

const CommentAdder = ({ setComments }) => {
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const addNewComment = {
     username: "grumpy19",
      body: newComment,
    }
    postNewComment(article_id, addNewComment).then((commentAdded)=>{
      setComments((currentComments) => {
        return [commentAdded, ...currentComments];
      });
    })
    setNewComment("")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newComment">Add comment</label>
        <input
          type="text"
          name=""
          id="newComment"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default CommentAdder;
