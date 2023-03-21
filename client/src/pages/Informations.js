import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import { useEffect, useState } from 'react';

export const Informations = () => {

  const [furnitureInfos, setFurnitureInfos] = useState([]);

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
      } catch (err) {
        console.log(err);
      }
    };
    requestFurnituresData();
  }, []);
  console.log('furnitureInfos: ', furnitureInfos);
  return (
    <div>
      <div className=' max-w-auto  mt-10 flex items-center p-2 bg-gray-200 relative justify-center z-30'>
          <p className='font-worksans font-normal text-[#565656] flex items-center'>Fidelity Offer With The Comfy Studio Card : +10% On Every Sell* </p>
        </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 my-10 mx-24'>
        <div>
          <div className='col-span-4'>
            <img src="./products/sofa-brown-1.jpg" alt="/" />
          </div>
          <div className='grid grid-cols-4 gap-4 md:grid-cols-4 my-6 '>
            <img className='hover:scale-150 duration-500 border border-white' src="./products/sofa-brown-1.jpg" alt="/" width={120}/>
            <img className='hover:scale-150 duration-500 border border-white' src="./products/sofa-brown-2.jpg" alt="/" width={120}/>
            <img className='hover:scale-150 duration-500 border border-white' src="./products/sofa-brown-3.jpg" alt="/" width={120}/>
            <img className='hover:scale-150 duration-500 border border-white' src="./products/sofa-brown-4.jpg" alt="/" width={120}/>
          </div>
        </div>
        <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2'>
          {/* <img src="./products/clients/avatar.svg" alt="/" width={40}/> */}
          <p className='font-bold font-worksans text-sm text-[#cca634f0]'>EXCLUSIVITY</p>
          {/* <p className='font-bold font-worksans text-sm'>FRIDA</p> */}
          </div>
          <h2 className='font-bold text-[#151515] font-worksans text-6xl py-3'>{furnitureInfos.furniture_name}</h2>
          <p className='font-worksans text-[#151515] font-light text-justify py-4'>{furnitureInfos.furniture_description}
          </p>

          <p className='font-bold font-worksans text-3xl py-2'>{furnitureInfos.furniture_price}</p>

          <div className='grid grid-cols-1 font-bold py-4'>
            {/* <div className='col-span-3 bg-gray-200 flex items-center justify-between rounded-sm py-3 px-5 md:col-span-1'>
              <button className='font-worksans text-lg text-black'>-</button>
              <span className='text-lg text-black'>0</span>
              <button className='font-worksans text-lg text-black'>+</button>
            </div> */}
            <button className='flex items-center gap-x-3 bg-[#151515] text-white text-sm 
            justify-center py-3 rounded-sm hover:bg-[#262626]'>
              <img src="./products/cart.svg" alt="/" width={25}/>
              <span>ADD TO CART</span>
            </button>
          </div>

        </div>
      </div>
      </div>    
    )
};
