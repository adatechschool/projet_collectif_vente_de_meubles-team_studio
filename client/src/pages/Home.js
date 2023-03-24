import React from 'react'
import Banner from '../components/Banner'
import axios from 'axios';
import DisplayCards from '../components/DisplayCards'
import { useState, useEffect } from "react";


export const Home = () => {

  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    const url = `http://localhost:9000/furnitures`
    console.log(url)

    const fetchData = async () => {
      try {
        const res = await axios.get(url, {
          headers: {},
          params: {}
        });
        const response = await res.data
        setFurnitures(response)
        // console.log(order.image_name)

      } catch (err) {
        console.log(err);
      }
    };
    fetchData()
  }, [])

  // console.log(furnitures[0])

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {furnitures && furnitures.map((furniture, index) => (

          <DisplayCards key={`${furniture.furniture_name}-${index}`}
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

