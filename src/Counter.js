import React, { useState, useEffect } from "react"
import "./counter.css";

export default function Counter() {

  var [countera, setcountera] = useState(0);
  if(countera < 1){
    countera = 0;
  }
  var [counterb, setcounterb] = useState(0);
  if(counterb < 1){
    counterb = 0;
  }
  var [foulsb, setfoulsb] = useState(0);
  var [foulsa, setfoulsa] = useState(0);

  var [seconds, setseconds] = useState(0);
  seconds = seconds < 10 ? '0' + seconds : seconds;
  var [minutes, setminutes] = useState(0);

  if(seconds > '59') {
    setseconds(seconds = seconds % 10);
    setminutes( minutes + 1);
  }

  if(seconds < '00' && minutes !== 0 ) {
    setseconds(seconds = 59)
    setminutes( minutes - 1);
  }   

  var [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      var id = window.setInterval(() => {
        setseconds(seconds => seconds - 1);
      }, 1000);
      return () => window.clearInterval(id);
    }
    return undefined;
  }, [isRunning]);
  
  if(minutes === 0 && seconds < '00' ) {
    setseconds( seconds = 0 );
    setminutes( minutes = 0 );
    setIsRunning(false);
  }

  return(
    <div>
      <button id="timerPlus10s" onClick={() => setseconds( seconds => seconds + 10 )}>+10s</button>
      <button id="timerMinus10s" onClick={() => setseconds( seconds => seconds - 10 )}>-10s</button>
      <div className="timer">
        <span id="min" className="minutes">{minutes}</span>:<span id="sec" className="seconds">{seconds}</span>
      </div>
      <div className="buttons">
        {isRunning
        ? (
      <button id="start-stop" onClick={() => {
        setIsRunning(false);
      }}>Stop
      </button>
        ) : (
      <button id="start-stop" onClick={() => setIsRunning(true)}>
      Start
      </button>
        )
      }
      <button id="reset-timer" onClick={() => {
        setseconds( seconds = 0 );
        setminutes( minutes = 0 );
        setIsRunning(false);
      }}>Reset</button>
      </div>
      <h1 id="score">Score</h1>
      <div id="team-a">TEAM A</div>
      <div id="counter-valuea">{countera}</div>
      <button id="increment-btna" onClick={() => setcountera( countera + 1 )}>+1</button>
      <button id="increment3-btna" onClick={() => setcountera( countera + 3 )}>+3</button>
      <button id="decrement-btna" onClick={() => setcountera( countera - 1 )}>-1</button>
      <button id="reset-btna" onClick={() => setcountera( countera = 0 )}>Reset</button>
      <div id="fouls-a">{foulsa}</div>
      <button id="foulsplus1-btna" onClick={() => setfoulsa( foulsa + 1)}>+1</button>
      <button id="fouls-btna" onClick={() => setfoulsa( foulsa = 0 )}>Reset</button>
      <div id="team-b">TEAM B</div>
      <div id="counter-valueb">{counterb}</div>
      <button id="increment-btnb" onClick={() => setcounterb( counterb + 1 )}>+1</button>
      <button id="increment3-btnb" onClick={() => setcounterb( counterb + 3 )}>+3</button>
      <button id="decrement-btnb" onClick={() => setcounterb( counterb - 1 )}>-1</button>
      <button id="reset-btnb" onClick={() => setcounterb( counterb = 0 )}>Reset</button>
      <div id="fouls-b">{foulsb}</div>
      <button id="foulsplus1-btnb" onClick={() => setfoulsb( foulsb + 1)}>+1</button>
      <button id="fouls-btnb" onClick={() => setfoulsb( foulsb = 0 )}>Reset</button>
    </div>
  )
}