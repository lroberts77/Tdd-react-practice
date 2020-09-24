import React, { useState } from "react"
import "./counter.css";

export default function Counter() {
  var [countera, setcountera] = useState(0);
  var [counterb, setcounterb] = useState(0);
  var [foulsb, setfoulsb] = useState(0);
  var [foulsa, setfoulsa] = useState(0);

  return(
    <div>
      <div id="timer">00:00</div>
      <h1 id="score">Score</h1>
      <div id="team-a">TEAM A</div>
      <div id="counter-valuea">{countera}</div>
      <button id="increment-btna" onClick={() => setcountera( countera + 1 )}>+1</button>
      <button id="increment3-btna" onClick={() => setcountera( countera + 3 )}>+3</button>
      <button id="decrement-btna" onClick={() => setcountera( countera - 1 )}>-1</button>
      <button id="reset-btna" onClick={() => setcountera( countera = 0 )}>Reset</button>
      <div id="foulsa">{foulsa}</div>
      <button id="foulsplus1-btna" onClick={() => setfoulsa( foulsa + 1)}>+1</button>
      <button id="fouls-btna"></button>
      <div id="team-b">TEAM B</div>
      <div id="counter-valueb">{counterb}</div>
      <button id="increment-btnb" onClick={() => setcounterb( counterb + 1 )}>+1</button>
      <button id="increment3-btnb" onClick={() => setcounterb( counterb + 3 )}>+3</button>
      <button id="decrement-btnb" onClick={() => setcounterb( counterb - 1 )}>-1</button>
      <button id="reset-btnb" onClick={() => setcounterb( counterb = 0 )}>Reset</button>
      <div id="foulsb">{foulsb}</div>
      <button id="foulsplus1-btnb" onClick={() => setfoulsb( foulsb + 1)}>+1</button>
    </div>
  )
}