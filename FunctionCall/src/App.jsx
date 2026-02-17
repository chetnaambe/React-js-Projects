import React from 'react'
import './index.css'
const App = () => {
  function button(){
    console.log("Updated");
  }
  return (
    <div className='m-8'>
      <button  onClick={button}
      className='active:scale-95 bg-[#356538] px-5 py-5 rounded text-white'>Click to Download</button>
    </div>
  )
}

export default App

