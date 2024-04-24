import React from 'react'

const ForecastWeather = () => {

  const handleSubmit = () => {
    alert("submit handled")
  }

  return (
    <div className='forecast-weather'>
      <div className="fore-top">
        <p>feels like</p><span className='feel-temp'>32C</span>
        <p>Wind</p><span className='wind-speed'>60KM/h</span>
        <p>Humidity</p><span className='humidity'>34%</span>
      </div>
      <div className="fore-middle">
        <div className="forecast-1 fore-current">
          <img className='forecast-icon' src="https://cdn.icon-icons.com/icons2/2791/PNG/512/partly_cloudy_day_sun_clouds_weather_icon_177560.png" alt="" width={"30px"}/>
          <p className='forcast-day'>Wednesday</p>
          <p className='forecast-temp'>26C / 31C</p>
        </div>
        <div className="forecast-2">
        <img className='forecast-icon' src="https://cdn.icon-icons.com/icons2/2791/PNG/512/partly_cloudy_day_sun_clouds_weather_icon_177560.png" alt="" width={"30px"}/>
          <p className='forcast-day'>Wednesday</p>
          <p className='forecast-temp'>26C / 31C</p>
        </div>
        <div className="forecast-3">
        <img className='forecast-icon' src="https://cdn.icon-icons.com/icons2/2791/PNG/512/partly_cloudy_day_sun_clouds_weather_icon_177560.png" alt="" width={"30px"}/>
          <p className='forcast-day'>Wednesday</p>
          <p className='forecast-temp'>26C / 31C</p>
        </div>
      </div>
      <div className="fore-bottom">
        <form onSubmit={handleSubmit}>
          <input type="text" /> 
        </form>
        <img src="src\assets\images\search-icon.png" alt="" width={"15px"}/>
      </div>
    </div>
  )
}

export default ForecastWeather