import './styles/App.css'
import React, { useEffect, useState } from 'react'
import {  Message,  Divider } from 'semantic-ui-react'
import TypeCity from './assets/TypeCity'
import Widget from './assets/Widget'
import API from './utils/API'

const API_KEY = '8f633b912e86642876e823f1badbe004'

function App() {
  const [city, setCity] = useState(null)
  const [weather, setWeather] = useState(null)
  const [loader, setLoader] = useState(false)
  const [err, setError] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoader(true)
        setError(null)
        const response = await API.get(`weather?q=${city}&appid=${API_KEY}&units=metric`)
        setWeather(response.data)
      } catch (err) {
        setError(err.response)
      } finally {
        setLoader(false)
      }
    }
    city && fetchWeather()
  }, [city])
  return (
    <div className='App'>
     <div className="container">
       <div className="input">
        <h1>Weather App  </h1>
        <Divider />
        <TypeCity setCity={setCity} loader={loader} />
        </div>
        {err && 
        <Message error header={`Error code: ${err.status}`} content={err.data.message} />}
        {weather && 
        <Widget weather={weather} />}
    </div>
    </div>
  )
}

export default App
