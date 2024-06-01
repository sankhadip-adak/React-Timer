import React, { useRef, useState } from "react";

function Timer() {
    const [timer, setTimer] = useState(0);
    const timerRef = useRef(null)

    
    const startTimer = () => {
        if (timerRef.current !== null) return;
          timerRef.current = setInterval(() => {
            setTimer((prevsec) => prevsec + 1);
          }, 1000);
    
    }
    const stopTimer = () => { 
        clearInterval(timerRef.current)
        timerRef.current = null
    };
    const resetTimer = () => {
        stopTimer()
        setTimer(0)
    };
  return (
    <div style={{ border: "2px solid white", padding: "100px" }}>
      <h1>Timer : {timer}</h1>

      <div style={{display:"flex",gap:"10px"}}>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
       </div>
          
    </div>
  );
}

export default Timer;
