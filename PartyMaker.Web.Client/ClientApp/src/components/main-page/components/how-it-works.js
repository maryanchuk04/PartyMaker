import React from 'react'

const HowItWorks = () => {
  return (
    <div className = "m-auto p-5 text-center d-flex flex-column" 
        style ={{
            height: "fit-content",
            backgroundSize : "cover",
            background : "url('https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/prices_bg.jpg?id=429')"
        }}

    >
        <div class="container row align-items-center m-auto">
            <div className="text-dark text-center mt-1">
                <h1 style ={{fontFamily : "cursive"}}>How it works</h1>
                <h1 className = "display-2" style ={{fontFamily : "'Rubik', sans-serif", fontWeight : "600"}}>It`s simple. You have an event to plan and we have the solutions</h1>
            </div>
            <div class="col w-100 my-2">
                <h3>1</h3>
                <h4>Choose a party theme and create an order</h4>
            </div>
            <div class="col w-100 my-2" >
                <h3>2</h3>
                <h4>Choose a supplier and agree on cooperation</h4>
                
            </div>
            <div class="col w-100 my-2">
                <h3>3</h3>
                <h4>Get your unforgettable<br/> party!</h4>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks