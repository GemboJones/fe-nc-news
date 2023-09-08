import React from "react";

const CommentCard = ({ author, body, created, votes }) => {
  return (
    <li className='comment-card'>
      <p>
        <strong>{author} </strong> 
      </p>
      {/* <p>
        <strong>Date:</strong> {created} 
      </p> */}
      <p>
        {body}
      </p>
      {/* <p>
        <strong>Likes:</strong> {votes}
      </p> */}
    </li>
  )
};

export default CommentCard;
