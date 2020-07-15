import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setcounter] = React.useState(0);
  return (
    <div className="App">
      <h1>Counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setcounter( counter + 1)}>Increment</button>
      <button id="decrement-btn">Decrement</button>
    </div>
  );
}

export default App;
