import leaf from './assets/leaf.png'
import bowl from './assets/bowl.png'


function Section3() {
  return (
    <div className="flex flex-row px-[30px]  ">
<div className="w-[60%] h-[500px] relative  Animation1">
  <h1 className='text-[40px] bg-[#AF533C] rounded-full font-[500] w-[80px] h-[80px] absolute top-103 left-7 text-center text-[white] py-2.5'>15$</h1>
    <img className='w-[350px] h-[100%]' src={bowl} alt="" />
    
<img className='h-[60px] w-[60px] absolute top-30 rotate-280 left-[20px]' src={leaf} alt="" />

</div>




<div className='w-[40%] h-[430px] mt-[170px] Animation'>
<h1 className='text-[40px] font-[500] '>New Our Dish</h1>
<p className='mt-[10px] opacity-[0.80]'>This dish looks like a vibrant smoothie bowl <br /> The base appears thick and creamy in texture <br /> It has a bright yellow–orange color</p>
<button className='px-6 py-2 bg-[#A0A49A] text-[white] mt-4.5 rounded-4xl'>check <i class="ri-arrow-right-line"></i></button>
</div>

    </div>
   
  
  )
}

export default Section3
