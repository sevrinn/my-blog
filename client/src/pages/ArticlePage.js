import React from 'react'
import { useParams } from 'react-router-dom'

const ArticlePage = () => {
  const h1 = 'text-3xl text-sevYellow'
  const p = 'p-3 bg-sevPink rounded-md mt-20 w-4/6'

  const { name } = useParams()
  return (
    <div>
      <h1 className={h1}>This is the {name} article</h1>
    </div>
  )
}

export default ArticlePage
