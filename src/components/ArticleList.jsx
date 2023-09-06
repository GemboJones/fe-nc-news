import React, { useEffect, useState } from 'react'
import { getAllArticles } from '../../utils/api'
import ArticleCard from './ArticleCard'
import { Link } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true)
    getAllArticles().then((allArticles) => {
      setArticles(allArticles)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <ul className='article-list'>
      {articles.map(({
        article_id, article_img_url, author, comment_count, created_at, title, topic, votes
        }) => {
          return (
            <Link to={`/articles/${article_id}`}>
              <ArticleCard 
              key={article_id} 
              image={article_img_url} 
              author={author} 
              comments={comment_count} 
              created={created_at} 
              title={title} 
              topic={topic} 
              votes={votes} />
          </Link>
          )
        })}
    </ul>
  )
}

export default ArticleList