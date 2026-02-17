let Nav = ()=>{
return(
    <div className=" flex justify-between px-1.5">
        <div>
            <span className="text-xl font-medium">F<span className="text-[#EE774F]">OO</span>DLY</span>
        </div>
        <div className="flex gap-x-5 text-xs items-center">
            <h5 className="nav-items">HOME</h5>
            <h5 className="nav-items">MENU</h5>
            <h5 className="nav-items">ABOUT</h5>
            <h5 className="icon"><i class="ri-shopping-bag-4-line"></i></h5>
            <img className="h-5 w-5 rounded-2xl" src="https://i.pinimg.com/736x/be/99/61/be99617f6dc5c51474c86252786da0d0.jpg" alt="" />
            <h5><i class="ri-arrow-down-s-line"></i></h5>
        </div>
    </div>
)
}
export default Nav