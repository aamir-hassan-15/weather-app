import React from 'react'
import { useParams } from 'react-router-dom'
import CityWeather from '../components/CityWeather'

function City() {
 const {city} = useParams()
 console.log(city)
  return (
    <div className='bg-blue-500'>
   <CityWeather city={city}/> 
    </div>
  )
}

export default City
