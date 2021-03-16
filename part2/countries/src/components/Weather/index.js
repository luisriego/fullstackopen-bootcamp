import React from 'react'

export const Weather = ({weather}) => {
    return (
        <>
            temperature: {weather.temperature} Celsius <br />
            {
                weather.weather_icons.map((icon, i) => {
                    return <img key={i} alt="icons" src={icon} />
                })
            } <br />
            wind: {weather.wind_speed} km/h direction: {weather.wind_dir} 
        </>
    )
}
