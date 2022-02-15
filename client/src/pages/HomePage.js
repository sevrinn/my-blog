import React from 'react'

const HomePage = () => {
  const h1 = 'text-5xl'
  const p = 'p-3'
  return (
    <>
      <h1 className={h1}>Greetings! Welcome to my dev blog</h1>
      <p className={p}>
        This blog is my dedicated area to write about the things I'm currently
        working on in my tech journey.{' '}
      </p>
    </>
  )
}

export default HomePage
