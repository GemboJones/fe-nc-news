import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { patchArticleVote } from "../utils/api";

const UpdateArticleVotes = ({setVotes, votes}) => {

  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { article_id } = useParams();

  const increaseVote = () => {

    setVotes((votes) => {
      return votes + 1
    })
    
    patchArticleVote(article_id, {"inc_votes": 1})
        // setIsButtonDisabled(!isButtonDisabled);
  }

  const decreaseVote = () => {
    setVotes((votes) => {
      if (votes === 0) {
        return votes
      } else {
        return votes - 1
      }
    })
    // setIsButtonDisabled(true);
    patchArticleVote(article_id, {"inc_votes": -1})
    
  }

  return (
    <div className="update-votes">
      <button 
      // disabled={isButtonDisabled}
      onClick={increaseVote}
      >
      🔼
      </button>
      <p>
        Votes: <strong>{votes}</strong>
      </p>
      <button onClick={decreaseVote}>
      🔽
      </button>
    </div>
  );
}

export default UpdateArticleVotes