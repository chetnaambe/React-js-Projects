import React from 'react'

function Card(props) {
  return (
    
   <div className='h-[400px] w-[100px]  card bg-cover bg-center rounded-[50px] overflow-hidden'
   style={{backgroundImage: `url(${props.img})`}}>
<div className='flex flex-col justify-end h-full w-full px-[10px] hidden text relative'>
  <h1 className='text-white font-[600] text-[20px] absolute bottom-[70px] left-[9px]'>{props.head}</h1>
  <p className='text-[10px] text-white absolute bottom-[20px] left-[9px] opacity-[0.60]'>{props.para}</p>
</div>
   </div>
  
  )
}

export default Card



