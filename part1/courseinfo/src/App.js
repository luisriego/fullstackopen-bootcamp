import React from 'react'

const Header = ({title}) => {
  return <h1>{title}</h1>
}

const Content = ({part, exercices}) => {
  return (
    <p>
      {part} {exercices}
    </p>
  )
}

const Total = ({text, s1, s2, s3}) => {
  return (
    <p>
      {text} {s1 + s2 + s3}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content part={part1} exercices={exercises1} />
      <Content part={part2} exercices={exercises2} />
      <Content part={part3} exercices={exercises3} />

      <Total text='Number of exercises' s1={exercises1} s2={exercises2} s3={exercises3} />
    </div>
  )
}

export default App
