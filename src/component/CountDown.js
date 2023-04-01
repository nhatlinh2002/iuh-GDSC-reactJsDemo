import React from "react"
import {useState, useRef} from "react"

function CountDown() {
    const [count, setCount] = useState(60);
    const controlTime = useRef();
    
    const handleStart = () => {
        controlTime.current = setInterval(() => {
            setCount((pre) => pre - 1)
        },1000);
    }

    const handleStop = () => {
        clearInterval(controlTime.current)
    };

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop} >Stop</button>
        </div>
    )
}

export default CountDown;