import Nav from "./Nav"
import heroImg from './assets/hero.png'
import tom from './assets/tom.png'
import tomato from './assets/tomato.png'
let Section1 =()=>{

    return(
        <div className="p-2" >
 <Nav />
 <div className="flex flex-row mt-[60px] px-4.5"  >
    <div className="w-[50%] h-[500px] p-2.5 mt-[80px]" id="fade-right">
        <h1 className="text-[45px] font-[600] ml-2.5 mt-1 tracking-[0.8px]">Your Food Is <br />Waiting For You</h1>
        <p className="text-[9px] ml-2.5 mt-6 font-[100] leading-[14px]">We Bring Professional Chefs To Your Home To Prepare Delicious, <br />Customized Meals At A Fraction Of The Cost, Get Your Food Easly Way <br />And Don't Worry About The Time</p>
        <div className="flex gap-4 mt-[40px] ml-2.5">
            <button className="px-[25px] py-[10px] bg-[#F0804D] text-white text-[12px] font-[600] rounded-3xl">Food Menu</button>
             <button className="px-[25px] py-[10px] bg-[#ADAF94] text-white text-[12px] font-[600] rounded-3xl">Book a Table</button>
            </div>

    </div>
    <div className="bg-image mt-7" id="fade-left">
        <img className="one" src={heroImg} alt="" />
        <img className="two" src={tom} alt="" />
        <img className="three" src={tomato} alt="" />
    </div>
 </div>
        </div>
       

    )
}
export default Section1

