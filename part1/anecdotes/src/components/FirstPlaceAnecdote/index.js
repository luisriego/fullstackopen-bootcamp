import React from 'react'
import { Anecdotes } from '../Anecdotes';

export const FisrtPalceAnecdote = (props) => {
    const {list, anecdotes} = props

    function findMostFrequest(arr) {
        let compare = "";
        let mostFreq = "";
        
        arr.reduce((acc, val) => {
          if(val in acc){               // if key already exists
             acc[val]++;                // then increment it by 1
          }else{
             acc[val] = 1;      // or else create a key with value 1
          }
          if(acc[val] > compare){   // if value of that key is greater
                                    // than the compare value.
             compare = acc[val];    // than make it a new compare value.
             mostFreq = val;        // also make that key most frequent.
          }
          return acc;
        }, {})
        return mostFreq
    }

    return (
        <>
            <p>{anecdotes[findMostFrequest(list)]}</p>
            <Anecdotes list={list} needle={findMostFrequest(list)} />
        </>
    )
}
