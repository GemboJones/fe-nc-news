import React from "react";

const ArticleCard = ({
  image,
  author,
  comments,
  created,
  title,
  topic,
  votes,
}) => {
  return (
    <li className="article-card">
      <img className="article-card__image" src={image} alt="" />
      <h2>{title} </h2>
      {/* <p>
        <strong>Date:</strong> {created} 
      </p> */}
      <p>
        <strong>Topic:</strong> {topic}
      </p>
      <p>
        <strong>Votes:</strong> {votes}
      </p>
      <p>
        <strong>Comments:</strong> {comments}
      </p>
    </li>
  );
};

export default ArticleCard;
