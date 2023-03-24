import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import cart from '../assets/cart.svg';

export const Informations = () => {

  const [furnitureInfos, setFurnitureInfos] = useState({
    "furniture_Id": 0,
    "image_name": [],
    "furniture_name": "",
    "furniture_type": "",
    "furniture_price": 0,
    "furniture_stock": 0,
    "furniture_description": "",
    "furniture_dimension": ""
  });

  const { id } = useParams();
  useEffect(() => {
    const requestFurnituresData = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/furniture/${id}`, {
          headers: {},
          params: {}
        });
        let furnitureById = await res.data;
        setFurnitureInfos(furnitureById);
        console.log(furnitureById);
        setCurrentImage(`http://localhost:9000/images/${furnitureById.image_name[0]}.jpg`)
      } catch (err) {
        console.log(err);
      }
    };
      requestFurnituresData()
  }, [id]);
  console.log(furnitureInfos);

  const isInStock = (stock) => {
    if (stock > 0){
      return <div className='text-[#72f954] text-base'>In Stock ✅</div>
    } else {
      return <div className='text-[#d84040] text-base'>Out of stock 🚨</div>
    }
  }

  const [currentImage, setCurrentImage] = useState()

  return (
    <div>
      <div className=' max-w-auto  mt-10 flex items-center p-2 bg-gray-200 relative justify-center z-30'>
          <p className='font-worksans font-normal text-[#565656] flex items-center'>Fidelity Offer With The Comfy Studio Card : +10% On Every Sell* </p>
        </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 my-10 mx-24'>
      <div>
          <div className='col-span-4'>
            <img src={currentImage} alt="/" />
          </div>
          <div className='grid grid-cols-4 gap-4 md:grid-cols-4 my-6 '>
            <img className='hover:scale-150 duration-500 border border-white' src={`http://localhost:9000/images/${furnitureInfos.image_name[0]}.jpg`} alt="/" width={120} onClick={() => setCurrentImage(`http://localhost:9000/images/${furnitureInfos.image_name[0]}.jpg`)}/>
            <img className='hover:scale-150 duration-500 border border-white' src={`http://localhost:9000/images/${furnitureInfos.image_name[1]}.jpg`} alt="/" width={120} onClick={() => setCurrentImage(`http://localhost:9000/images/${furnitureInfos.image_name[1]}.jpg`)}/>
            <img className='hover:scale-150 duration-500 border border-white' src={`http://localhost:9000/images/${furnitureInfos.image_name[2]}.jpg`} alt="/" width={120} onClick={() => setCurrentImage(`http://localhost:9000/images/${furnitureInfos.image_name[2]}.jpg`)}/>
            <img className='hover:scale-150 duration-500 border border-white' src={`http://localhost:9000/images/${furnitureInfos.image_name[3]}.jpg`} alt="/" width={120} onClick={() => setCurrentImage(`http://localhost:9000/images/${furnitureInfos.image_name[3]}.jpg`)}/>
          </div>
        </div>  
        <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2'>
          {/* <img src="./products/clients/avatar.svg" alt="/" width={40}/> */}
          <p className='font-bold font-worksans text-sm text-[#cca634f0]'>EXCLUSIVITY</p>
          {/* <p className='font-bold font-worksans text-sm'>FRIDA</p> */}
          </div>
          <h2 className='font-bold text-[#151515] font-worksans text-6xl py-3'>{furnitureInfos.furniture_name}</h2>
          <p className='text-[#7a7a7a] text-xs'>{furnitureInfos.furniture_dimension}</p>
          <p className='font-worksans text-[#151515] font-light text-justify py-4'>{furnitureInfos.furniture_description}
          </p>

          <p className='font-bold font-worksans text-3xl py-1'>{furnitureInfos.furniture_price}€</p>
          {isInStock(furnitureInfos.furniture_stock)}

          <div className='grid grid-cols-1 font-bold py-4'>
            {/* <div className='col-span-3 bg-gray-200 flex items-center justify-between rounded-sm py-3 px-5 md:col-span-1'>
              <button className='font-worksans text-lg text-black'>-</button>
              <span className='text-lg text-black'>0</span>
              <button className='font-worksans text-lg text-black'>+</button>
            </div> */}
            <button className='flex items-center gap-x-3 bg-[#151515] text-white text-sm 
            justify-center py-3 rounded-sm hover:bg-[#262626]'>
              <img src={cart} alt="/" width={25}/>
              <span>ADD TO CART</span>
            </button>
          </div>

        </div>
      </div>
      </div>    
    )
};
