import Card from './Card';

let Section2 =()=>{
    return(
<div id="Section2">
    <div id="box">
    <div id="top">
        <button>About Horizon</button>
        </div>
        <div id="bot">
        <p id="one">At Horizon, We don't just play tennis - we live it. Since 2021</p>
         <p id="sec">our club has been a home players of all levels, from eager</p>
          <p id="third">beginners to seasoned pros.</p>
    </div>
    </div>

    <Card />

<h4>A few more facts about us in numbers</h4>

<div id="follow">
    <div className="f2">
        <h1>12 000+</h1>
        <p>Hours of play annually</p>
    </div>
      <div className="f2">
        <h1>89%</h1>
        <p>Players Retention Rate</p>
    </div>
      <div className="f2">
        <h1>1,200+</h1>
        <p>Active Members</p>
    </div>
      <div className="f2">
        <h1>125+</h1>
        <p>Annual Tournaments</p>
    </div>
</div>

</div>
    )
}
export default Section2;