import React, { useEffect, useState} from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import rain_icon from '../assets/rain.png'
import cloud_icon from '../assets/cloud.png'
import sun_icon from '../assets/sun.png'
import snowy_icon from '../assets/snowy.png'

 export default function  CityWeather  ({city})  {
console.log(import.meta.env.VITE_APP_ID)

const [forecastData, setForecastData]= useState([])
const [data,setData] = useState({})
let [error,setError]= useState('')
  const search =async()=>{
    try {
      setError('')
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=metric&appid=${"2c3661b1f790e6f6458e6233583d3ea3"}`;
      const response=await fetch(url);
      const res= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2c3661b1f790e6f6458e6233583d3ea3`)
      const forcast = await res.json();
      const data =await response.json();
      console.log(forcast,'forecast')

         if(forcast.cod=="404"){
        setError(forcast.message)
      }
      else{
           setForecastData(forcast.list)
      }


      if(data.cod=="404"){
        setError(data.message)
      }
      else{
           setData(data)
      }
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    search();
  },[city])
  
  return (
<>
    <div className='weather'>

{error ? <div>{error}</div>:
<>
    <img src={data?.clouds?.all>50 ?cloud_icon :sun_icon} alt='' className='weather-icon'/>
    <p className='temperature'>{Object.keys(data).length!=0 &&data.main.temp}</p>
    <p className='locations'>{city}</p>
    <div className='weather-data'> 
      <div className="col">
        <img src={cloud_icon} alt=''/>
        <div>
          <p>{Object.keys(data).length!=0 && data.clouds.all} %</p>
          <span>{Object.keys(data).length!=0 && data.weather[0].description}</span>
        </div>
      </div> 
      <div className="col">
        <img src={snowy_icon} alt=''/>
        <img src={rain_icon} alt=''/>
        <div>
          <p>20%</p>
          <span>snowy-prediction</span>
        </div>
      </div>
    
  </div></>}
   {Object.keys(data).length!=0 &&
    <div>
      <h2>Recommendations</h2>

     <ul>
      <li>{data.clouds.all>70 ?"Wear jackets":"Wear a tshirt"}</li>
      <li>{data.clouds.all>70 ?"Take an umbrella":"No need for gear"}</li>
       <li>{data.clouds.all>70 ?"Take waterproof bags":"Go with any bagpack"}</li>
    </ul>
    </div>}

   </div>
       {forecastData && <div>
      <h2>Forecast</h2>
      <div className='grid grid-cols-4'>
      {forecastData.map((item,index)=>(<div className='bg-blue-500 text-white font-semibold p-4 m-4' key={index}>
        <p>{item.dt_txt}</p>
        <p>{item.main.temp-273} Celcius</p>
        <p>{item.weather[0].description}</p>

      </div>))}
      </div>
      </div>}
   </>
  )
}

// export default Weather
