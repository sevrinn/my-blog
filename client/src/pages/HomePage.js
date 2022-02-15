import React from 'react'

const HomePage = () => {
  const h1 = 'text-3xl text-sevYellow'
  const p = 'p-3 bg-sevPink rounded-md mt-20 '
  return (
    <>
      <h1 className={h1}>Greetings! Welcome to my dev blog</h1>
      <p className={p}>
        This blog is my dedicated area to write about the things I'm currently
        working on in my tech journey. Here I will try to log everything I
        worked on week to week in my quest to become a web developer. The first
        step was building this blog.
      </p>
    </>
  )
}

export default HomePage
