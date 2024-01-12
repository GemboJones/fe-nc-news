import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getCommentsById } from "../utils/api";
import CommentAdder from "./CommentAdder";

const CommentList = () => {

  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true)
    getCommentsById(article_id).then((allComments) => {
      setComments(allComments)
      setIsLoading(false)
    })
  }, [article_id])

  // const updateComments = (comment)=>{
  //   setComments((currentComments)=>{
  //     return [comment, ...currentComments]
  //   })
  // }

  if (isLoading) return <p>Loading...</p>

  return (
    <section className="comment-section">
      <CommentAdder setComments={setComments}/>
      <ul className='comment-list'>
        {comments.map(({
          comment_id, author, body, created_at, votes
          }) => {
            return <CommentCard 
            key={comment_id} 
            author={author} 
            body={body} 
            created={created_at} 
            votes={votes} />
          })}
      </ul>
    </section>
  );
};

export default CommentList;
