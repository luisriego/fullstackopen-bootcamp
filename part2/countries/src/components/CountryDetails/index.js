import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Weather } from '../Weather'

export const CountryDetails = ({country}) => {
    const [weather, setweather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
          .then(({data}) => {
            setweather(data.current)
        })
    }, [country, api_key])

    return (
        <div>
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
            <h2>Weather in {country.capital}</h2>
            {
                weather.length !== 0
                ? <Weather weather={weather} />
                : 'loading...'
            }
        </div>
    )
}
