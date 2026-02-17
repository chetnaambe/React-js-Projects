import React from 'react'
import Slice from './assets/Slice.png'
const Section5 = () => {
  return (
    <div className='flex flex-col gap-3.5 items-center justify-center'>
        <h1 className='text-[45px] font-[500]'>Our Services</h1>
        <div className='flex flex-row gap-8 mt-[30px]'>
        <p className='text-center h-[70px] w-[140px] py-[5px] bg-[#d1cbcb65] rounded-2xl text-[15px] font-[500]'><i class="ri-smartphone-line"></i> <br />Online Booking</p>
        <p className='text-center h-[70px] w-[140px] py-[5px] bg-[#d1cbcb65] rounded-2xl text-[15px] font-[500]'><i class="ri-hotel-fill"></i> <br />Catering services</p>
        <p className='text-center h-[70px] w-[140px] py-[5px] bg-[#d1cbcb65] rounded-2xl text-[15px] font-[500]'><i class="ri-contacts-line"></i> <br />Membership</p>
        <p className='text-center h-[70px] w-[140px] py-[5px] bg-[#d1cbcb65] rounded-2xl text-[15px] font-[500]'><i class="ri-truck-line"></i> <br />Delivery Service</p>
        <img className='h-[95px]' src={Slice} alt="" />
        </div>
    </div>
  )
}

export default Section5
