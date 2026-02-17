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
    </div>
  )
}

export default App
