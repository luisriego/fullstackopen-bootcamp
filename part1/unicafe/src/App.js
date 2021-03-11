import { useState } from 'react'
import Average from './components/Average'
import Positive from './components/Positive'
import Statistics from './components/Statistics'
import Total from './components/Total'

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const goodClicked = () => {
    setGood(good+1)
  }

  const neutralClicked = () => {
    setNeutral(neutral+1)
  }

  const badClicked = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feddback</h1>
      <div>
        <button onClick={goodClicked}>good</button>
        <button onClick={neutralClicked}>neutral</button>
        <button onClick={badClicked}>bad</button>
      </div>
      < Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App;
