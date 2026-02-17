import React from 'react'
import redc from './assets/redc.png'
import p1 from './assets/p1.png'
import mid from './assets/mid.png'
function Section4() {
  return (
    <div className='flex flex-row px-20'>
      <div className='flex flex-col gap-6.5'>
        <h1 className='text-[40px] font-[500]'>Foodly is available <br /> for Android and IOS</h1>
        <div className='flex flex-row gap-18'>
          <button className='flex items-center gap-3.5 px-[25px] py-[8px] bg-[#b5b1aed8] rounded-xl text-[white]'><i class="ri-google-play-fill"></i><p className='text-[10px]'>Get in On <br /> Google Play</p></button>
          <button className='flex items-center gap-3.5 px-[25px] py-[8px] bg-[#b5b1aec2] rounded-xl text-[white]'><i class="ri-apple-fill"></i><p className='text-[10px] '>Download On <br />App Store</p></button>

        </div>
                  <img className='h-[120px] rotate-20 mr-[100px]' src={redc} alt="" />
      </div>



      <div className=' flex flex-col h-[600px] full'>
<div className='h-[470px] w-[300px] rounded-4xl bg-[#d5d2d29e] ml-[100px] px-[15px] py-[15px]'>

<div className='flex flex-row items-center justify-between'>
<p className='text-[#FA4D17] text-[25px]'><i class="ri-menu-4-fill"></i></p>
<p className='text-[#FA4D17] text-[25px]'><i class="ri-more-2-fill"></i></p>
</div>
<div className='flex flex-col items-center'>
  <h1 className='text-[25px] text-center text-white font-[800]'>TOP LIST</h1>

  <div className='h-[270px] w-[250px] bg-[#F48D67] rounded-4xl mt-[20px] relative px-[20px]'>
<img className='h-[170px] py-2 absolute left-20 ' src= {mid} alt="" />
                 <div className='flex flex-row gap-2 mt-[100px] '>
                    <p className='text-[15px] text-[#FAB70C]'><i class="ri-star-fill"></i></p>
                    <p className='text-[15px] text-[#FAB70C]'>8.5</p>
                 </div>
                 <h1 className='text-white font-[600] mt-[10px] text-[13px]'>Caesar salad croquettes</h1>
                 <p className='text-[10px] mt-[10px] text-white opacity-[0.70]'>The dish is beautifully plated <br /> on a white round plate</p>

                       <div className='flex flex-row items-center justify-between mt-[40px]'>
                    <h1 className='text-[20px] font-[600] text-white'>10$</h1>
                    <button className='bg-[#ffffff27] px-2 py-1 rounded-full text-[white]'><i class="ri-add-line"></i></button>
                 </div>
 </div>

                 <div className='h-[40px] w-[250px] bg-[#b7b1b13e] mt-[30px] px-[20px] rounded-4xl flex items-center gap-7'>
                <i className="ri-home-4-fill text-white color"></i>
                <i className="ri-exchange-funds-fill text-white color"></i>
                <i className="ri-shopping-bag-4-fill text-white color"></i>
                <i className="ri-search-line text-white color"></i>
                <img className='h-[30px] w-[30px] rounded-full object-cover' src="https://i.pinimg.com/736x/eb/24/10/eb2410be7fb3b667d2b8dc79d36e5487.jpg" alt="" />
                 </div>

</div>

</div>

      </div>
    </div>
  )
}

export default Section4
