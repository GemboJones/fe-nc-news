import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ArticleList from './components/ArticleList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <Header />
    {/* <TopicNavigation /> */}
    <ArticleList />
    {/* <SingleArticle /> */}
    </div>
  )
}

export default App
