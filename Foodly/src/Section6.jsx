import React from 'react'

function Section6() {
  return (
    <div className='h-[310px] w-[100%] bg-[#B5B1AE] mt-[40px] flex flex-col  gap-15 px-[30px]'>
    <div className='flex flex-row gap-15'> 
<div className='mt-[20px] '>
    <h3 className='font-[500] text-[15px] text-white'>Stay Connected</h3>
    <div className='flex flex-row gap-2 mt-[30px]'>
        <i className="ri-facebook-fill px-2 py-1 bg-[#FF4F19] rounded-full text-white"></i>
        <i className="ri-linkedin-fill px-2 py-1 bg-[#FF4F19] rounded-full text-white"></i>
        <i className="ri-twitter-fill px-2 py-1 bg-[#FF4F19] rounded-full text-white"></i> 
       <i className="ri-instagram-line px-2 py-1 bg-[#FF4F19] rounded-full text-white"></i>
    </div>
</div>

<div className='mt-[20px]'>
    <h3 className='font-[500] text-[15px] text-white'>Get Of 20% Discount For You On <br /> First Order</h3>
    <div className='flex flex-row gap-2.5 mt-[5px]'>
        <button className='px-[40px] py-[10px] bg-white text-black text-[8px] rounded-xl'>Email Address</button>
        <button className='px-[20px] py-[12px] bg-[#F9501B] rounded-xl text-white text-[10px]'>Send Now</button>
    </div>
</div>

<div className='mt-[20px]'>
    <h3 className='font-[500] text-[15px] text-white'>Services</h3>
    <div className='flex flex-col mt-[5px]'>
        <p className='text-[10px] text-white opacity-[0.70]'>Membership</p>
        <p className='text-[10px] text-white opacity-[0.70]'>Products</p>
        <p className='text-[10px] text-white opacity-[0.70]'>Stories</p> 
    </div>
</div>


<div className='mt-[20px]'>
    <h3 className='font-[500] text-[15px] text-white'>About Us</h3>
    <div className='flex flex-col mt-[5px]'>
        <p className='text-[10px] text-white opacity-[0.70]'>About Us</p>
        <p className='text-[10px] text-white opacity-[0.70]'>Our Mission</p>
        <p className='text-[10px] text-white opacity-[0.70]'>Subscription</p> 
    </div>
</div>

<div className='mt-[20px]'>
    <h3 className='font-[500] text-[15px] text-white'>Address</h3>
    <div className='flex flex-col mt-[5px]'>
        <p className='text-[10px] text-white opacity-[0.70]'>Morocco</p>
        <p className='text-[10px] text-white opacity-[0.70]'>Marrakesh 29</p>
        <p className='text-[10px] text-white opacity-[0.70]'>Plasa World</p> 
    </div>
</div>
</div> 
<div className='mt-[1px]'>
     <hr className='border-0 h-[1px] bg-white mt-6 w-full' />
</div>

<div className='flex items-center justify-center'>
    <p className='text-white text-[9px] opacity-[0.75]'>Copyright <i class="ri-copyright-line"></i> 2026 all right reserved</p>
</div>
    </div>
  )
}

export default Section6
