import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";


export const Contact = () => {
  return (
    <div class="w-full min-h-screen flex justify-center items-center">
    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:items-stretch md:space-x-12 bg-[#f2F2F2] w-full max-w-4xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg text-white overflow-hidden">
      <div class="md:py-4 flex-grow flex flex-col space-y-8 md:justify-between">
        <div class="">
          <h1 class="font-bold text-4xl tracking-wide text-black">Contact Us</h1>
          
        </div>
        <div class="flex flex-col space-y-6 text-[#6b6b6b]">
          <div class="inline-flex space-x-2 items-center ">
          
            <span class="select-all">(+33) 0 123 456 789</span>
          </div>
          <div class="inline-flex space-x-2 items-center">
           
            <span class="select-all">comfystudio@gmail.com</span>
          </div>
          <div class="inline-flex space-x-2 items-center">
            
            <span class="select-all">116 Rue Du Fbg St Martin, Paris</span>
          </div>
        </div>
        <div className="flex space-x-4 text-lg">
           <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-[#6b6b6b]  ">
             <FaFacebookSquare size={25} />
           </a>

           <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-[#6b6b6b]  ">
              <FaTwitterSquare size={25} />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-[#6b6b6b] ">
              <FaInstagram size={25} />
            </a>
            </div>
      </div>
      <div class="relative z-10">
         <div >
          <form action="" class="flex flex-col space-y-4 ">
            <div>
              <label  className='text-[#6b6b6b]'>Name</label>
              <input type="text" placeholder="Your name" class="ring-1 ring-black text-black mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2  " />
            </div>
            <div>
              <label for="" className='text-[#6b6b6b]'>Email Address</label>
              <input type="text" placeholder="Email Address" class="ring-1 ring-black text-black mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 " />
            </div>
            <div>
              <label for="" className='text-[#6b6b6b]'>Message</label>
              <textarea placeholder="Type your message here" class="ring-1 ring-black text-black mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 " rows="4"></textarea>
            </div>
            <button class="px-6 py-2  text-white rounded-full bg-[#070707] hover:bg-slate-500 focus:outline-none">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}  