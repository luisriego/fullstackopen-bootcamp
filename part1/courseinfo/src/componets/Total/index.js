import React, {useEffect, useState} from 'react';

export default function Total({parts}) {
    const [total, setTotal] = useState(0)
    useEffect(() => {
      let totalizador = 0
      parts.map((item) =>
        totalizador = item.exercises + totalizador 
      )
      setTotal(totalizador)
    }, [parts])
    

    return (
        <p>
            <strong>Total of exercices {total}</strong>
        </p>
      )
}
