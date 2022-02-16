import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './article-content'

const ArticlePage = () => {
  const h1 = 'text-3xl text-sevYellow capitalize'
  const p = 'p-3 bg-sevPink rounded-md mt-20 w-4/6'

  const { name } = useParams()
  const article = articleContent.find((article) => article.name === name)

  return (
    <div>
      <h1 className={h1}>{article.title}</h1>
    </div>
  )
}

export default ArticlePage
