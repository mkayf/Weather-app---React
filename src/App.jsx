import React, { useEffect, useState } from 'react'
import './App.css'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Preloader from './Preloader';
const App = () => {
  // http://api.weatherapi.com/v1/forecast.json?key=e5583ddc48ce44858a8145320242404&q=Karachi&days=8&aqi=no&alerts=no

  const [city, setCity] = useState('Karachi');
  let [currentWeather, setCurrentWeather] = useState(null);
  let [forecastWeather, setForecastWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const invalidLocation = () => toast.error("No data found!",{
    position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark"
  });

    useEffect(() => {
      setLoading(true);

      fetch(`http://api.weatherapi.com/v1/forecast.json?key=e5583ddc48ce44858a8145320242404&q=${city}&days=8&aqi=no&alerts=no`)
    .then((response) => response.json())
    .then((response) => {
          let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      let dateObj = new Date(response.location.localtime);
      const options = {
        year : 'numeric',
        month: 'long',
        day : 'numeric'
      }
      let weatherObj = {
        weekday : weekDays[dateObj.getDay()],
        date : new Intl.DateTimeFormat('en-US', options).format(dateObj),
        city : `${response.location.name}, ${response.location.country}`,
        temperature : (response.current.temp_c).toFixed(0),
        type : response.current.condition.text,
        icon : response.current.condition.icon,
        feels_like : Math.floor(response.current.feelslike_c),
        wind : response.current.wind_kph,
        humidity : response.current.humidity,
        forecast_days : [
          {
            day_1 : weekDays[new Date(response.forecast.forecastday[0].date).getDay()],
            avg_temp : response.forecast.forecastday[0].day.avgtemp_c,
            icon : response.forecast.forecastday[0].day.condition.icon
          },
          {
            day_2 : weekDays[new Date(response.forecast.forecastday[1].date).getDay()],
            avg_temp : response.forecast.forecastday[1].day.avgtemp_c,
            icon : response.forecast.forecastday[1].day.condition.icon
          },
          {
            day_3 : weekDays[new Date(response.forecast.forecastday[2].date).getDay()],
            avg_temp : response.forecast.forecastday[2].day.avgtemp_c,
            icon : response.forecast.forecastday[2].day.condition.icon
          }
        ]
        
      }
  
      setCurrentWeather(weatherObj);
      setForecastWeather(weatherObj);
      setLoading(false);    
           
    }).catch((error)=>{
      invalidLocation();
      setLoading(false);
    })  
    
    }, [city])
    


  
  return (
    <div className="main-div">
      <ToastContainer/>
      {
        (loading) ? <> <CurrentWeather currentDetails={null} Preloader={Preloader} /> <ForecastWeather forecastDetails={null} setCity={null}/> </> : <> <CurrentWeather currentDetails={currentWeather}/> 
        <ForecastWeather forecastDetails={forecastWeather} city={city} setCity={setCity}/>
        </>
      }

      
    </div>
  )
}

export default App