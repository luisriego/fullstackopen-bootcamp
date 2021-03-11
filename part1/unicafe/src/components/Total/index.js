import {useEffect, useState} from 'react';

export default function Total({parts}) {
    const [total, setTotal] = useState(0)
    useEffect(() => {
      let totalizador = 0
      parts.map((item) =>
        totalizador = item + totalizador 
      )
      setTotal(totalizador)
    }, [parts])
    

    return (
        <>{total}</>
      )
}