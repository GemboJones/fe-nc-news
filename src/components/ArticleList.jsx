import React, { useEffect, useState } from 'react'
import { getAllArticles } from '../../utils/api'
import ArticleCard from './ArticleCard'

const ArticleList = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getAllArticles()
    .then((allArticles) => {
      setArticles(allArticles)
    })
  }, [])

  return (
    <ul className='article-list'>
      {articles.map(({
        article_id, article_img_url, author, comment_count, created_at, title, topic, votes
      }) => {
        return <ArticleCard 
        key={article_id} 
        image={article_img_url} 
        author={author} 
        comments={comment_count} 
        created={created_at} 
        title={title} 
        topic={topic} 
        votes={votes} />
      })}
    </ul>
  )
}

export default ArticleList