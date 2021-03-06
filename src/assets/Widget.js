import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import WeatherDesciption from './WeatherDesciption'
import WeatherProps from './WeatherProps'
import WeatherTemp from './WeatherTemp'
const Widget = ({ weather }) => {
  const [tempMode, setTempMode] = useState('Celsius')

  return (
    <div className='weather-card'>
      <WeatherDesciption weather={weather} />
      <div className='weather-temp-wrap'>
        <p className='weather-curr-condition'>Current Conditions</p>
        <WeatherTemp weather={weather} tempMode={tempMode} />
        <WeatherProps weather={weather} />
      </div>

      <Button.Group>
        <Button color='blue' onClick={() => setTempMode('Celsius')}>
          Celcius
        </Button>
        <Button.Or />
        <Button color='violet' onClick={() => setTempMode('Fahrenheit')}>
          Fahrenheit
        </Button>
      </Button.Group>
    </div>
  )
}

export default Widget
