import React from 'react'
import { Country } from '../Country'

export const Countries = ({countries}) => {
    const numCountries = countries.length

    if (numCountries === 0) {
        return <p>No match found, specify another filter</p>
    }

    if (numCountries > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    return (
        <>
            {   numCountries === 1
                ? <div><Country country={countries[0]} match={true} /></div>
                : countries.map((country) => {
                    return <div key={country.alpha3Code}><Country country={country} match={false} /></div>
                })
            }
        </>
    )
}
