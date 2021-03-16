import React from 'react'
import { CountryDetails } from '../CountryDetails'

export const Country = ({country, match, setNations}) => {
    const showHandle = () => {
        setNations([country])
    }

    if (match) {
       return (
           <CountryDetails country={country} />
       )
       
    }
    return (
        <div>
            <p>{country.name} <button type="button" onClick={showHandle}>show</button></p>
        </div>
    )
}
