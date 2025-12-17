import React, { useEffect, useState} from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import rain_icon from '../assets/rain.png'
import cloud_icon from '../assets/cloud.png'
import snowy_icon from '../assets/snowy.png'

 export default function  Weather  ()  {
console.log(import.meta.env.VITE_APP_ID)
const [city,setCity]= useState('Srinagar')
const [data,setData] = useState({})
  const search =async()=>{
    try {
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"2c3661b1f790e6f6458e6233583d3ea3"}`;
      const response=await fetch(url);
      const data =await response.json();
      setData(data)
      console.log(data);
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    search();
  },[])

  return (
    <div className='weather'>
      <div className='search-bar'>
    <input type='text' placeholder='search' onChange={(e)=>setCity(e.target.value)} />
    <img src={search_icon} alt="" onClick={search}/>
</div>
    <img src='{sun_icon}' alt='' className='weather-icon'/>
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
        <div>
          <p>20%</p>
          <span>snowy-prediction</span>
        </div>
      </div>
    </div>
   </div>
  )
}

// export default Weather
