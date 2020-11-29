import React from 'react'

const WeatherDesciption = ({ weather }) => {
  return (
    <div className='weather-name_icon'>
      <p className='weather-city-name'>
        {weather.name}, {weather.sys.country}
      </p>

      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt=''
        className='src'
      />
      <p className='weather-description-icon'> {weather.weather[0].description} </p>
    </div>
  )
}

export default WeatherDesciption
