import React from "react"

export default function Counter() {
  var [countera, setcountera] = React.useState(0);
  var [counterb, setcounterb] = React.useState(0);
  return(
    <div>
      <h1>Score</h1>
      <div id="counter-value">{countera}</div>
      <button id="increment-btn" onClick={() => setcountera( countera + 1 )}>+1</button>
      <button id="decrement-btn" onClick={() => setcountera( countera - 1 )}>-1</button>
      <button id="reset-btn" onClick={() => setcountera( countera = 0 )}>Reset</button>
      {/* <button id="square-btn" onClick={() => setcounter( counter * counter )}>Square</button> */}
      <div id="counter-valueb">{counterb}</div>
      <button id="increment-btn" onClick={() => setcounterb( counterb + 1 )}>+1</button>
      <button id="decrement-btn" onClick={() => setcounterb( counterb - 1 )}>-1</button>
      <button id="reset-btn" onClick={() => setcounterb( counterb = 0 )}>Reset</button>
    </div>
  )
}