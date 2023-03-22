import React from 'react'
import Banner from '../components/Banner'
import DisplayCards from '../components/DisplayCards'
import { useState, useEffect } from "react";
import FilterCards from '../components/FilterCards';


export const Home = () => {

  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    const url = `http://localhost:9000/furnitures`
    console.log(url)

    const fetchdata = async () => {
      try {
        const response = await fetch(url)
        console.log(response)

        const json_response = await response.json()
        setFurnitures(json_response)
        console.log(json_response)
      } catch {
        console.log('error fetching furnitures')
      }
    }
    fetchdata()
  }, [])


  return (
    <div>
      <Banner />
      <FilterCards />
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {furnitures && furnitures.map((furniture, index) => (

          <DisplayCards key={`${furniture.name}-${index}`}
            photo={furniture.image_name[0]}
            name={furniture.furniture_name}
            type={furniture.furniture_type}
            price={furniture.furniture_price}
            id={furniture.furniture_Id}
          />
        ))}
      </div>
    </div>
  )
}

