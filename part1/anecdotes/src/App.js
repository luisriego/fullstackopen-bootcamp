import React, { useEffect, useState } from 'react'

import { randomIntFromInterval } from "./helper"
import { Anecdotes } from './components/Anecdotes'
import { FisrtPalceAnecdote } from './components/FirstPlaceAnecdote'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [anecdotesStored, setAnecdotesStored] = useState([])
  useEffect(() => {
    const randomSelected = randomIntFromInterval(0, 5)
    setSelected(randomSelected)
  }, [])

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const nextAnecdote = () => {
    const randomSelected = randomIntFromInterval(0, 5)
    setSelected(randomSelected)
  }

  const voteClicked = () => {
    setAnecdotesStored(prevVotes => ([...prevVotes, selected]))
  }

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <Anecdotes list={anecdotesStored} needle={selected} />
        <button onClick={voteClicked}>vote</button>
        <button onClick={nextAnecdote}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <FisrtPalceAnecdote list={anecdotesStored} anecdotes={anecdotes} />
      </div>
    </>
  )
}

export default App
