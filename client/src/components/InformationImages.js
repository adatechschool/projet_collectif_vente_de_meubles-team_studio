import React from 'react';

const InformationImages = ({id, photo}) => {

    return(
        <div>
          <div className='col-span-4'>
            {/* <img src={photo[0]} alt="/" /> */}
          </div>
          <div className='grid grid-cols-4 gap-4 md:grid-cols-4 my-6 '>
            <img className='hover:scale-150 duration-500 border border-white' src={`http://localhost:9000/images/${photo}.jpg`} alt="/" width={120}/>
            {/* <img className='hover:scale-150 duration-500 border border-white' src={`http://localhost:9000/images/${photo[1]}.jpg`} alt="/" width={120}/>
            <img className='hover:scale-150 duration-500 border border-white' src={`http://localhost:9000/images/${photo[2]}.jpg`} alt="/" width={120}/>
            <img className='hover:scale-150 duration-500 border border-white' src={`http://localhost:9000/images/${photo[3]}.jpg`} alt="/" width={120}/> */}
          </div>
        </div>
    )
}

export default InformationImages