import React from 'react'
import articleContent from './article-content'
import { Link } from 'react-router-dom'

const ArticlesListPage = () => {
  const h1 = 'text-3xl text-sevYellow'
  const p = 'p-3 bg-sevPink rounded-md mt-20 w-4/6'
  const articleListItem = 'text-2xl text-sevPink underline hover:font-extrabold'
  return (
    <div>
      <h1 className={h1}>ArticlesListPage</h1>
      <div className='mt-5'>
        {articleContent.map((article, key) => (
          <Link
            className={articleListItem}
            key={key}
            to={`/article/${article.name}`}
          >
            <h3>{article.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ArticlesListPage
