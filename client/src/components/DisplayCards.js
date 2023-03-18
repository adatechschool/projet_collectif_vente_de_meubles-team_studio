import React, { useState, useEffect } from "react";
import { Fetching } from "./Fetching";

export default function DisplayCards() {
  const addCart = () => {
    console.log('add cart')
  };

  const FurnituresList = () => {
    const [furnitures, setFurnitures] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
      
    useEffect(() => {
      !isMounted &&
        Fetching().getFurnitures().then((json) => {
          setFurnitures(json);
          setIsMounted(true);
        });
    }, [isMounted]);
    
    return (
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 m-4 items-center justify-center ">
          {furnitures && furnitures.map((furniture, index) => {
            return (
              <div className="flex items-center justify-center relative" >
                <div className="bg-gray-400 flex flex-row-reverse items-start justify-center w-80 h-88 place-content-between overflow-hidden">
                  <div className="w-80 h-80 flex items-center justify-center hover:scale-110 transition duration-300 ease-in-out">
                  <img src={`http://localhost:9000/images/${furniture.image_name[0]}.jpg`} alt={`${furniture.furniture_type} image`} />
                  </div>

                  <div className="w-80 h-17 absolute -bottom-2 px-3 order-first bg-gray-200">
                    <a className="" key={index}>
                      {furniture.furniture_type}
                      <br />{furniture.furniture_price} €
                    </a>
                  </div>
                  
                  <div className="absolute -bottom-1 right-8">
                    <button type="button" onClick={addCart}>
                      <img src="./img/cart.svg" alt="Ajouter au panier" className="h-8 w-8" />
                    </button>
                  </div>
                </div>
              </div>                
            )                          
          })}
        </div>
      </div>
    );
  };

  return <FurnituresList />;
}
