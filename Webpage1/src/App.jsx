// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import Nav from './components/Nav'
import './index.css'

let App=()=>{
  return(
  
    <div id="Contain">
      <Nav />
    <div id="content">
      <div id ="main">
      <p>NOW LIVE</p>
     
      <h1 id="head">INTRODUCING</h1>
      <h1 id="head1">NEW CHARACTER</h1>
     
      <p id="op">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati laudantium quibusdam doloribus magnam, fuga illum facilis reiciendis ratione recusandae accusantium. consectetur, adipisicing elit. Obcaecati laudantium quibusdam </p>
      <button id="one">Description</button>
      <button id="two">Next for details</button>


    </div>
  
    </div>
    </div>
  )
}
export default App;