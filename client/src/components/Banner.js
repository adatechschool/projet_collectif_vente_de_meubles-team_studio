import React from 'react'

const Banner = () => {
  return (
    <div className='max-w-[1640px] mx-auto -mt-24'>
            <div className='max-h-[800px] relative'>
                {/* overlay */}
                <div className='absolute w-full h-full text-[#F2F2F2] max-h-[800px] 
                 bg-[#222222]/20 flex flex-col items-center justify-center'>
                    <h1 className='px-4 mb-6 text-1xl sm:text-1xl md:text-2xl lg:text-6xl font-apercu text-center justify-center -mt-44 font-bold  text-[#151515] '>VINTAGE FINDS FOR MODERN LIVING</h1>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-20 w-20 animate-bounce text-white mt-96 -mb-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5" /></svg>
                </div>
                <img className='w-full max-h-[800px] object-cover' src="./bannerImages/couchbanner.jpg" alt="couch" />
            </div>
        </div>
  )
}

export default Banner