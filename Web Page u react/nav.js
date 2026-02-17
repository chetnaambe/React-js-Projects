import React from "https://esm.sh/react@18";
let Nav =()=>{
return React.createElement(`nav`, null, React.createElement(`div`, {id:`one`} ,React.createElement("img" ,{ src: "./one.png" }), React.createElement(`a` , { href: "#" },`About Me`), React.createElement(`a`, { href: "#" }, `Portfolio`) , React.createElement(`a` , { href: "#" }, `Services`), React.createElement(`a`, { href: "#" }, `Blog`) ),
React.createElement(`div`, {id:`two`}, React.createElement(`a`, { href: "#" }, `Book A Call` , React.createElement(`i` , {className :"ri-arrow-right-up-line" }))) )


}
export default Nav;