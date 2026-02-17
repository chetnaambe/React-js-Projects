

// let main = ()=>{
//     return React.createElement(`div`, {id:`contain`},)
// }


//  import React from 'react'
import React from "https://esm.sh/react@18";
import Nav from './nav.js'
import Left from "./left.js";


 let App = ()=>{
    return  React.createElement(`div` , {id:`container`}, React.createElement(Nav) ,React.createElement(Left)
);

 }

 export default App;