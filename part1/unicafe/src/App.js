import { useState } from 'react'

import { Button } from './components/Button'
import { Statistic } from './components/Statistic'
import Statistics from './components/Statistics'

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [senderState, setSenderState] = useState(false)


  const goodClicked = () => {
    setGood(good+1)
  }

  const neutralClicked = () => {
    setNeutral(neutral+1)
  }

  const badClicked = () => {
    setBad(bad+1)
  }

  const sendClicked = () => {
    if (!good && !bad && !neutral) {
        return
    }
    setSenderState(true)
}

  return (
    <div>
      <h1>give feddback</h1>
      <div>
        <Button action={goodClicked} text={'good'} />
        <Button action={neutralClicked} text={'neutral'} />
        <Button action={badClicked} text={'bad'} />
      </div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text={'good'} value={good}/>
          <Statistic text={'neutral'} value={neutral}/>
          <Statistic text={'bad'} value={bad}/>
        </tbody>
        {
          senderState 
            ? < Statistics good={good} bad={bad} neutral={neutral} />
            : <></>
        }
      </table>
      {
        !senderState
          ? <>
              <Button action={sendClicked} text={'send data'} />
              <p>no feedback given</p>
            </>
          : <></>
      }
    </div>
  )
}

export default App;
