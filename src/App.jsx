import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import SingleArticle from './components/SingleArticle'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      {/* <TopicNavigation /> */}
      <Routes>
        <Route path='/articles/:article_id' element={ <SingleArticle /> } />
        <Route path='/articles' element={ <ArticleList /> } />
        <Route path='/' element={ <ArticleList /> } />
      </Routes>
    </div>
  )
}

export default App
