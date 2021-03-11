import { useState } from 'react';

import Average from '../Average';
import Positive from '../Positive';
import Total from '../Total';

export default function Statistics({good, bad, neutral}) {  
    const [senderState, setSenderState] = useState(false)

    const sendClicked = () => {
        setSenderState(true)
    }

    return (
        <>
        {
            senderState === false
                ?   <button onClick={sendClicked}>send data</button>
                :   <>
                        <p>all <Total parts={[good, neutral, bad]} /></p>
                        <p>average <Average good={good} bad={bad} neutral={neutral} /></p>
                        <p>positive <Positive good={good} bad={bad} neutral={neutral} /></p>
                    </>
        }
        </>
      )
}

