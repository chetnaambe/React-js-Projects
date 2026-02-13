import Chicken from './assets/videc.png'
import crispy from './assets/crispy.png'
import lemon from './assets/lemon.png'
let Cards  =()=>{
    return(
        <div className="cards flex flex-row gap-7 mt-[60px] ">
                    <button><i className="ri-arrow-left-s-line bg-[#FF5015] px-2 py-2 rounded-full text-[white] text-[20px] mr-[20px]"></i></button>

            <div className=" card bg-[#dbdbd6a2] h-[260px] w-[200px] flex flex-col mt-7 rounded-4xl relative">
<img className='h-[130px] w-[130px] rounded-full object-cover absolute -top-12 left-1/2 -translate-x-1/2' src={Chicken} alt="" />
            <div className='flex flex-col mt-[100px] px-3 gap-1.5'>
                 <div className='flex flex-row gap-2'>
                    <p className='text-[15px] text-[#FAB70C]'><i class="ri-star-fill"></i></p>
                    <p className='text-[15px] text-[#FAB70C]'>8.5</p>
                 </div>
                 <h1 className='text-[14px] font-[600]'>Sliced chicken breast</h1>
                 <p className='text-[9px] font-[100] opacity-[0.70]'>Boneless chicken breast sliced into <br />medallions. </p>
                 <div className='flex flex-row items-center justify-between mt-[35px]'>
                    <h1 className='text-[20px] font-[600]'>10$</h1>
                    <button className='bg-[#FF5015] px-2 py-1 rounded-full text-[white]'><i class="ri-add-line"></i></button>
                 </div>
            </div>
                         </div>
                    
                    <div className="card bg-[#dbdbd6a2] h-[260px] w-[200px] flex flex-col mt-7 rounded-4xl relative">
                    <img className='h-[180px] w-[140px] rounded-full object-cover absolute -top-19 left-1/2 -translate-x-1/2 ' src={crispy} alt="" />
                        
                         <div className='flex flex-col mt-[100px] px-3 gap-1.5'>
                 <div className='flex flex-row gap-2'>
                    <p className='text-[15px] text-[#FAB70C]'><i class="ri-star-fill"></i></p>
                    <p className='text-[15px] text-[#FAB70C]'>8.5</p>
                 </div>
                 <h1 className='text-[14px] font-[600]'>Small crispy puri</h1>
                 <p className='text-[9px] font-[100] opacity-[0.70]'>Pickled onion rings Microgreens garnish <br />Multiple bite-sized </p>
                 <div className='flex flex-row items-center justify-between mt-[35px]'>
                    <h1 className='text-[20px] font-[600]'>18$</h1>
                    <button className='bg-[#FF5015] px-2 py-1 rounded-full text-[white]'><i class="ri-add-line"></i></button>
                 </div>
            </div>
                        
                        
                        
                        
                        </div>

                    <div className="card bg-[#dbdbd6a2] h-[260px] w-[200px] flex flex-col mt-7 rounded-4xl relative">
                        <img className='h-[180px] w-[140px] rounded-full object-cover absolute -top-23 left-1/2 -translate-x-1/2 ' src={lemon} alt="" />
                               
                                <div className='flex flex-col mt-[100px] px-3 gap-1.5'>
                 <div className='flex flex-row gap-2'>
                    <p className='text-[15px] text-[#FAB70C]'><i class="ri-star-fill"></i></p>
                    <p className='text-[15px] text-[#FAB70C]'>8.5</p>
                 </div>
                 <h1 className='text-[14px] font-[600]'>Lemon Tart</h1>
                 <p className='text-[9px] font-[100] opacity-[0.70]'>Round pastry tart shell Smooth citrus<br />Fresh lemon slices on top</p>
                 <div className='flex flex-row items-center justify-between mt-[35px]'>
                    <h1 className='text-[20px] font-[600]'>14$</h1>
                    <button className='bg-[#FF5015] px-2 py-1 rounded-full text-[white]'><i class="ri-add-line"></i></button>
                 </div>
            </div>
                               </div>
                               <button><i className="ri-arrow-right-s-line bg-[#FF5015] px-2 py-2 rounded-full text-[white] text-[20px] ml-[20px]"></i></button>

                             
           
        </div>
    )
}
export default Cards