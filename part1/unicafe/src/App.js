import { useState } from 'react'
import Average from './components/Average'
import Positive from './components/Positive'
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
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all <Total parts={[good, neutral, bad]} /></p>
      <p>average <Average good={good} bad={bad} neutral={neutral} /></p>
      <p>positive <Positive good={good} bad={bad} neutral={neutral} /></p>
    </div>
  )
}

export default App;
