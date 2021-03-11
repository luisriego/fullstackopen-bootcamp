import Average from '../Average';
import Positive from '../Positive';
import Total from '../Total';

export default function Statistics({good, bad, neutral}) {  

    return (
        <>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all <Total parts={[good, neutral, bad]} /></p>
            <p>average <Average good={good} bad={bad} neutral={neutral} /></p>
            <p>positive <Positive good={good} bad={bad} neutral={neutral} /></p>
        </>
      )
}

