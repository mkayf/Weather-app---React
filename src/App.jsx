import React from 'react'
import './App.css'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'
const App = () => {
  const weatherAPI = 'https://api.weatherapi.com/v1/forecast.json?key=01ec1ab413fc4cfc8f6184541242204&q=Karachi&days=5&aqi=yes&alerts=no';
  
  return (
    <div className="main-div">
      <CurrentWeather/>
      <ForecastWeather/>
    </div>
  )
}

export default App