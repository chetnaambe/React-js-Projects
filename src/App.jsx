<<<<<<< HEAD
import React, { useState } from 'react'


const App = () => {

    const arr = [
        "https://images.unsplash.com/photo-1770110000509-6c8298224699?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1768517296837-2457934c92fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1769399287827-4b7d79d99e0d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1770839012299-fb0130e5ec67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1767721104232-357575b597f6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

const [num, setNum] = useState(0);

  return (
    <div className='bg-black h-screen w-screen text-white flex items-center justify-center flex-col gap-8'>
      <div className='h-100 w-100 bg-white rounded-3xl overflow-hidden'>
       <img src={arr[num]} alt="Random" className='h-full w-full object-cover rounded-3xl' />
      </div>
      <button className='bg-amber-600 px-12 py-3.5 rounded-2xl font-bold' onClick={()=>{
const n  =Math.floor(Math.random()*arr.length)
            // setNum((num +1) % arr.length);
        setNum(n);
      }}>Click</button>
=======
import React from 'react'
import { useState } from 'react'

const App = () => {

const [num, setNum] = useState(0);

  return (
    <div className=' bg-[black] h-screen w-screen px-18 py-18'>
     <div className='box h-40 w-40 bg-[red] text-center text-4xl text-[white]'>
{num}
     </div>
     <button className='px-2 py-1.5 bg-[white] ml-10 mt-10 rounded' onClick={
      ()=>{
        const num  = Math.floor(Math.random()*100)
        setNum(num);
      }
     }>Click Here</button>
>>>>>>> 0fdc271469a663d2b8c1714704040a13de304168
    </div>
  )
}

export default App
