import React from 'react'

const CurrentWeather = () => {
  // console.log(currentDetails);
  return (
    <div className='current-weather'>
        <div className="top-data">
          <div className="date-div">
            <h2 className='week-day'>Wednesday</h2>
            <p className='date'>April 24, 2024</p>
            </div>
            <p className='location'>Karachi, Pakistan</p>
        </div>
        <div className="bottom-data">
            <h1 className='temperature'>29°C</h1>
            <img className='weather-type-icon' src="https://cdn.icon-icons.com/icons2/2791/PNG/512/partly_cloudy_day_sun_clouds_weather_icon_177560.png" alt="" width={"70px"}/>
            <p className='weather-type'>Partly cloudy</p>
        </div>
    </div>
  )
}

export default CurrentWeather