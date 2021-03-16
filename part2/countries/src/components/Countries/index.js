import React, { useEffect, useState } from 'react'
import { Country } from '../Country'

export const Countries = ({countries}) => {
    const [nations, setNations] = useState(countries)
    
    useEffect(() => {
        setNations(countries)
    }, [countries])

    if (nations.length === 0) {
        return <p>No match found, specify another filter</p>
    }

    if (nations.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    return (
        <>
            {   nations.length === 1
                ? <div><Country country={nations[0]} match={true} /></div>
                : nations.map((country) => {
                    return <div key={country.alpha3Code}><Country country={country} match={false} setNations={setNations} /></div>
                })
            }
        </>
    )
}
