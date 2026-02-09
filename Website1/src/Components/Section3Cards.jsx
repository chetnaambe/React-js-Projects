let SectionCard= ()=>{
    return(
<div id="FullCards">
    <div id="FirstCard" className="Swidth">
        <button>Services</button>
        <p>Explore our full range of coaching, <br /> training, and tennis experience .Form <br /> first serve to match point - we've <br /> got the right program for you</p>
    <button id="Color">Explore More <i class="ri-arrow-right-up-line"></i></button>
    </div>
        <div id="SecondCard" className="Swidth">
            <button>Training Programs</button>
            <div id="line1">
                <p>Programs designed for <br /> all ages and abilities</p>
                <i className="ri-arrow-right-up-line"></i>
            </div>
        </div>
            <div id="ThirdCard" className="Swidth">
                <div id="img">
                    <button>Court Access</button>
                    <p>Hourly Court Rental</p>
                </div>
                <div id="SecPara">
                    <p>step into a space built for <br /> players - to grow, compete, <br /> and thrive</p>
                   <div id="icon">
                    <i className="ri-arrow-left-line"></i>
                    <i className="ri-arrow-right-line"></i>
                   </div>
                </div>
            </div>
</div>
    )
}
export default SectionCard;