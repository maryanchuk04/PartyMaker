import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './slider.css'
const AutoplaySlider = withAutoplay(AwesomeSlider);
// https://i.ibb.co/LCFKGgL/singapore-fireworks.jpg maybe this photo
const SliderComponent = () => {
  return <AutoplaySlider className ="slider"
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    bullets = {false}
  >
    <div className = ' first-slider' style = {{
        background: "url('https://partymaker.ancorathemes.com/wp-content/uploads/2018/01/home2_slide1.jpg')", 
        backgroundRepeat: "no-repeat", 
        backgroundSize : "cover"}}
    >
        <div className="container text-content">
            <h1>Lets have a party</h1>
            <h2>It`s time to celebrate</h2>
        </div>
    </div>
    <div className = "second-slider" style = {{
        background: "url('https://partymaker.ancorathemes.com/wp-content/uploads/2018/01/home2_slide3.jpg')", 
        backgroundRepeat: "no-repeat", 
        backgroundSize : "cover"}}
    >
        <div className="container text-content">
            <h1>Lets have a party</h1>
            <h2>Enjoy your celebrate</h2>
        </div>
    </div>
</AutoplaySlider>
}

export default SliderComponent