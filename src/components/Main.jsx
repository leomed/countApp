import React, { useState } from "react"

function Main(){

const [state,setState] = useState(0)
const [colorIncrease, setColorIncrease] = useState(false)
const [colorDecrease, setColorDecrease] = useState(false)

function increase(){
    setState(state + 1)
}
function decrease(){
    setState(state - 1)
}


function colorIncreaseFunction () {
    setColorIncrease(!colorIncrease)
    
}
function colorDecreaseFunction(){
    setColorDecrease(!colorDecrease)
}



    return <div>
        <main>
        

        <div className="buttonContainer">
        <div className="para">
        <p className="title"> Count</p>
        <p className="number"> {state} </p>

        </div>

        <button
        style={{color: colorIncrease ? "black" : "white"}}
        onClick= {() =>{
            colorIncreaseFunction();
            increase();
           
     
        }}>+
        
        </button>
        <button 
        style={{color: colorDecrease ? "black" : "white"}}
        onClick={() => {
            colorDecreaseFunction();
            decrease();
        }}>
        -
        </button>

        </div>
        

        </main>

    </div>
}

export default Main;