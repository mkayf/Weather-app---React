import React from 'react'

const CurrentWeather = ({currentDetails}) => {
  
  return (
    <div className='current-weather'>
        <div className="top-data">
          <div className="date-div">
            <h2 className='week-day'>{currentDetails ? currentDetails.weekday : ''}</h2>
            <p className='date'>{currentDetails ? currentDetails.date : ''}</p>
            </div>
            <p className='location'>{currentDetails ? currentDetails.city : ''}</p>
        </div>
        <div className="bottom-data">
            <h1 className='temperature'>{currentDetails ? currentDetails.temperature + '°C' : ''}</h1>
            {/* <img className='weather-type-icon' src={currentDetails ? currentDetails.icon : ''} alt="" width={"70px"}/> */}
            <p className='weather-type'>{currentDetails ? currentDetails.type : ''}</p>
        </div>
    </div>
  )
}

export default CurrentWeather