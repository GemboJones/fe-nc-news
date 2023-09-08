import React from 'react'
import { useParams } from "react-router-dom";
import { patchArticleVote } from "../utils/api";

const UpdateArticleVotes = ({setVotes}) => {
  const { article_id } = useParams();

  const increaseVote = () => {
    setVotes((votes) => {
      return votes + 1
    })
    patchArticleVote(article_id, {"inc_votes": 1})
  }

  const decreaseVote = () => {
    setVotes((votes) => {
      if (votes === 0) {
        return votes
      } else {
        return votes - 1
      }
    })
    patchArticleVote(article_id, {"inc_votes": -1})
  }

  return (
    <div>
      <button onClick={increaseVote}>Upvote 🔼</button>
      <button onClick={decreaseVote}>Downvote 🔽</button>
    </div>
  )
}

export default UpdateArticleVotes