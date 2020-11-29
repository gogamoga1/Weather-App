import React from 'react'

const WeatherTemp = ({weather, tempMode}) => {

    function changeTempMode(temp) {
        return tempMode === 'Celsius' ? temp.toFixed(1) : ((temp * 9) / 5 + 32).toFixed(1)
      }
    return (
        <div className='weather-temp-and-feels'>
        <p className='weather-curr-temp'>
          {changeTempMode(weather.main.temp)}°{tempMode === 'Celsius' ? 'C' : 'F'}
        </p>
        <p>
          Feels like: {changeTempMode(weather.main.feels_like)}°
          {tempMode === 'Celsius' ? 'C' : 'F'}
        </p>
      </div>
    )
}

export default WeatherTemp
