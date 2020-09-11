import React from "react"

export default function Counter() {
  var [counter, setcounter] = React.useState(0);
  return(
    <div>
      <h1>BBall Score</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setcounter( counter + 1 )}>+1</button>
      <button id="decrement-btn" onClick={() => setcounter( counter - 1 )}>-1</button>
      <button id="reset-btn" onClick={() => setcounter( counter = 0 )}>Reset</button>
      {/* <button id="square-btn" onClick={() => setcounter( counter * counter )}>Square</button> */}
    </div>
  )
}