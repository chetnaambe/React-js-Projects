import React from 'react'
import Card from './Components/Card'
import first from './assets/first.png'
function App() {

const animeBackgrounds = [
  {
    id: 1,
    title: "Attack on Titan",
    image:"https://i.pinimg.com/736x/0f/2a/ca/0f2aca15b869777a310ef415a7056697.jpg" ,
    description: `Humanity fights for survival behind massive walls.
Eren Yeager vows to destroy every Titan.
Dark secrets reshape the truth of the world.
A brutal story of freedom and sacrifice.`
  },
  {
    id: 2,
    title: "Demon Slayer",
    image: first,
    description: `Tanjiro becomes a demon slayer to save his sister.
Breathtaking sword fights meet emotional storytelling.
Demons roam the night in haunting beauty.
`
  },
  {
    id: 3,
    title: "Naruto Shippuden",
    image: "https://i.pinimg.com/736x/35/48/35/3548357337902e2d9d7a79b1a6a166bc.jpg",
    description: `A ninja who dreams of becoming Hokage.
Friendship, rivalry, and powerful battles collide.
The Akatsuki threaten the shinobi world.
A tale of growth, pain, and perseverance.`
  },
  {
    id: 4,
    title: "One Piece",
    image: "https://i.pinimg.com/736x/a2/94/ff/a294ff1800d9190f8f159716fd19098f.jpg",
    description: `Monkey D. Luffy sails for the ultimate treasure.
A crew bonded by dreams and loyalty.
Epic adventures across vast oceans.
Freedom defines the pirate king’s journey.`
  },
  {
    id: 5,
    title: "Your Name",
    image: "https://i.pinimg.com/736x/f1/54/56/f1545694d12f380565182f68b53d946a.jpg",
    description: `Two strangers mysteriously swap bodies.
Fate weaves their lives across time.
Love blossoms beyond distance and memory.
A breathtaking romance of destiny.`
  }
];

// export default animeBackgrounds;


  return (
    <div className='h-[100vh] w-full bg-[#292529] flex items-center justify-center'>
      <div className='h-[600px] w-[800px] bg-[#020924] px-2 py-2'>
<div className='flex gap-7.5 items-center justify-center h-[600px] overflow-x-auto no-scrollbar '>
  
{animeBackgrounds.map(function(elem){
  return(
<Card img ={elem.image} para = {elem.description} head = {elem.title} />
  )
})}


</div>
      </div>
     
    </div>
  )
}

export default App





