import React from 'react'

export function Cart() {
    let price;
    return (
      <div className='h-screen w-full my-10 p-12 text-[#151515] font-worksans text-6xl py-3'>
        <div>
            <h1 className='font-bold'>My cart</h1>
        </div>
        <div className="grid grid-cols-3 gap-0 text-lg my-10 py-2">
            <div>Product</div>
            <div className="grid grid-cols-3 gap-0">
                <button className='bg-[#151515] text-white'>-</button>
                <input name='qty' className='border-solid border-2 border-[#151515]'/>
                <button className='bg-[#151515] text-white'>+</button>
            </div>
            <div className='flex items-center justify-center'>{price}€</div>
        </div>
        <div className="grid grid-cols-3 gap-0 text-lg py-2">
            <div>Product</div>
            <div className="grid grid-cols-3 gap-0">
                <button className='bg-[#151515] text-white'>-</button>
                <input name='qty' className='border-solid border-2 border-[#151515]'/>
                <button className='bg-[#151515] text-white'>+</button>
            </div>
            <div className='flex items-center justify-center'>{price}€</div>
        </div>
        <div className="grid grid-cols-3 gap-0 text-lg my-10 py-2">
            <div>Product</div>
            <div className="grid grid-cols-3 gap-0">
                <button className='bg-[#151515] text-white'>-</button>
                <input name='qty' className='border-solid border-2 border-[#151515]'/>
                <button className='bg-[#151515] text-white'>+</button>
            </div>
            <div className='flex items-center justify-center'>{price}€</div>
        </div>
        <div className='grid grid-cols-3 my-4 p-1 bg-[#151515] text-white text-lg'>
            <div className='col-span-2 text-lg font-bold '>TOTAL</div>
            <div className='flex items-center justify-center'>{price}€</div>
        </div>
      </div>
    )
}