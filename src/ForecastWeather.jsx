import React, { useState } from 'react';
const ForecastWeather = ({forecastDetails, setCity = ''}) => {
    const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => { 
    setCity(inputValue);
    event.preventDefault();
  }

  return (
    <div className='forecast-weather'>
        <h2 className='logo'>weather<span>fusion</span></h2>
        <div className="fore-top">
          <p>Feels like</p><span className='feel-temp'>{forecastDetails ? forecastDetails.feels_like + '°C' : ''}</span>
          <p>Wind</p><span className='wind-speed'>{forecastDetails ? forecastDetails.wind + 'KM/h' : ''}</span>
          <p>Humidity</p><span className='humidity'>{forecastDetails ? forecastDetails.humidity + '%' : ''}</span>
        </div>
        <div className="fore-middle">
          <div className="forecast-1 fore-current">
            <img className='forecast-icon' src={forecastDetails ? forecastDetails.forecast_days[0].icon : ''} alt="" width={"50px"}/>
            <p className='forcast-day'>{forecastDetails ? forecastDetails.forecast_days[0].day_1 : ''}</p>
            <p className='forecast-temp'>{forecastDetails ? forecastDetails.forecast_days[0].avg_temp + '°C' : ''}</p>
          </div>
          <div className="forecast-2">
          <img className='forecast-icon' src={forecastDetails ? forecastDetails.forecast_days[1].icon : ''} alt="" width={"50px"}/>
            <p className='forcast-day'>{forecastDetails ? forecastDetails.forecast_days[1].day_2 : ''}</p>
            <p className='forecast-temp'>{forecastDetails ? forecastDetails.forecast_days[1].avg_temp + '°C' : ''}</p>
          </div>
          <div className="forecast-3">
          <img className='forecast-icon' src={forecastDetails ? forecastDetails.forecast_days[2].icon : ''} alt="" width={"50px"}/>
            <p className='forcast-day'>{forecastDetails ? forecastDetails.forecast_days[2].day_3 : ''}</p>
            <p className='forecast-temp'>{forecastDetails ? forecastDetails.forecast_days[2].avg_temp + '°C' : ''}</p>
          </div>
        </div>
        <div className="fore-bottom">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search City' name='search' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />
            </form>
          <img src="src\assets\images\search-icon.png" alt="" width={"15px"} onClick={handleSubmit}/>

        </div>
    </div>
  )
}

export default ForecastWeather