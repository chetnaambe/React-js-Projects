import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Section1  from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

function App() {
 return(
<div className='flex items-center justify-center mt-5 '>
  <div className='w-[60%] h-full multicolor-gradient rounded-3xl'>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
     <Section5 />
      <Section6 />
    
  </div>
</div>
 ) 
}
export default App
