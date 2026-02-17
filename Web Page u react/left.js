import React from "https://esm.sh/react@18";
// let Left =()=>{
//     return React.createElement(`div` , {id:`lefts`} , 

// React.createElement(`div` ,{id:`left1`}, React.createElement(`div`,{id:`first`},
//             React.createElement(`p` ,null,`Product Designer`),
//              React.createElement(`h4`, null),
//              React.createElement(`p`,null, `2024`))),



// React.createElement(`div`, {id:`left2`},
//        React.createElement(`div`, {id:`box1`},
//  React.createElement(`div` , {id:`one`}, React.createElement(`h1` , null , `+200`), React.createElement(`p`, null ,`Project Completed`)), 
//  React.createElement(`div`, {id:`two`}, React.createElement(`h1`, null , `+50`),React.createElement(`p`, null , `Stratup raised`))),



// React.createElement(`div`, {id:`box2`}, React.createElement(`h1` , null ,`Hello`),React.createElement(`p`, null, `- It's D.Nova a design wizerd`)),

// React.createElement(`div`, {id:`box3`}, React.createElement(`p`, null, `Scrool down`, React.createElement(`i`, {className :"ri-arrow-right-up-line" })))

// )
// )
// }

// export default Left


let Left =()=>{
    return React.createElement(`div`, {id:`whole`},

         React.createElement(`div`, {id:`left`},

        React.createElement(`div`,{id:`left1`}, 
            React.createElement(`div`, {id:`first`}, React.createElement(`p`, null , `Project Designer`), React.createElement(`h4`, null), React.createElement(`h6`, null , `2024`))),


        React.createElement(`div` ,{id:`left2`}, 


        React.createElement(`div`, {id:`box1`},
      React.createElement(`div`, {id:`one`}, React.createElement(`h1` , null, `+200`), React.createElement(`p`, null, `Project Completed`)),
            React.createElement(`div`, {id:`two`}, React.createElement(`h1`, null , `+50`), React.createElement(`p`, null, `Startup raised`)) ),


            React.createElement(`div`, {id:`box2`},
            React.createElement(`div`, {id:`one`}, React.createElement(`h1`, null, `Hello`), React.createElement(`p`, null, `-It's D.Nova a design wizerd`))),


            React.createElement(`div`, {id: `box3`}, React.createElement(`p`, null, `Scroll down`, React.createElement(`i`, {className:"ri-arrow-down-line"})))

           )
    ), 

    React.createElement(`div`, {id:`right`},
        React.createElement("img", {src: "./two.png"})
    )

)
}


export default Left