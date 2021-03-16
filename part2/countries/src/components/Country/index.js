import React from 'react'

export const Country = ({country, match}) => {
    if (match) {
       return <>
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
        </>
    }
    return (
        <div>
            <p>{country.name}</p>
        </div>
    )
}
