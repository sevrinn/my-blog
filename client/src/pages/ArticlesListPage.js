import React from 'react'
import articleContent from './article-content'

const ArticlesListPage = () => {
  const h1 = 'text-3xl text-sevYellow'
  const p = 'p-3 bg-sevPink rounded-md mt-20 w-4/6'
  return (
    <div>
      <h1 className={h1}>ArticlesListPage</h1>
      {articleContent.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  )
}

export default ArticlesListPage
