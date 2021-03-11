import { useState } from 'react';

import Average from '../Average';
import Positive from '../Positive';
import Total from '../Total';

export default function Statistics({good, bad, neutral}) {  
    // const [senderState, setSenderState] = useState(false)

    // const sendClicked = () => {
    //     if (!good && !bad && !neutral) {
    //         return
    //     }
    //     setSenderState(true)
    // }

    return (
        <>
            <tbody>
                <tr>
                    <td>all</td> 
                    <td><Total parts={[good, neutral, bad]} /></td>
                </tr>
                <tr>
                    <td>average</td> 
                    <td><Average good={good} bad={bad} neutral={neutral} /></td>
                </tr>
                <tr>
                    <td>positive</td> 
                    <td><Positive good={good} bad={bad} neutral={neutral} /></td>
                </tr>
            </tbody>
        </>
      )
}

