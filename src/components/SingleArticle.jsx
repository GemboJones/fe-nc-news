import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  
  useEffect(() => {
    setIsLoading(true)
    getArticleById(article_id).then((article) => {
      setSingleArticle(article);
      setIsLoading(false)
    });
  }, []);

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      {/* <p>
        <strong>Topic:</strong> {singleArticle.topic}
      </p> */}
      <h2>{singleArticle.title} </h2>
      <p>
        <strong>Date:</strong> {singleArticle.created_at} 
      </p>
      <p>
        <strong>Votes:</strong> {singleArticle.votes}
      </p>
      <img src={singleArticle.article_img_url} alt="" />
      <p>
        <strong>Author:</strong> {singleArticle.author} 
      </p>
      <p>
        {singleArticle.body}
      </p>
    </div>
  );
};

export default SingleArticle;
