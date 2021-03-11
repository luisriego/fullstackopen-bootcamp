import { useState } from 'react'

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(2)
  const [neutral, setNeutral] = useState(6)
  const [bad, setBad] = useState(1)

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
    </div>
  )
}

export default App;
