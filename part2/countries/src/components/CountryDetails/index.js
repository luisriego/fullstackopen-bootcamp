import React from 'react'

export const CountryDetails = ({country}) => {
    return (
        <div id="showCountry">
            <h1>{country.name}</h1>
            capital {country.capital}<br />
            population {country.population}
            <h2>languages</h2>
            <ul>
                {
                    country.languages.map((language) => {
                    return <li key={language.iso639_1}>{language.name}</li>
                })
                }
            </ul>
            <img alt={country.name} src={country.flag}/>
        </div>
    )
}
