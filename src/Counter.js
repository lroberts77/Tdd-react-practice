import React, { useState, useEffect } from "react"
import "./counter.scss";
import { Grid } from "@material-ui/core";

export default function Counter() { 
  // state for counter a and b
  var [countera, setcountera] = useState(0);
  var [counterb, setcounterb] = useState(0);

  // countera does not go below 0 if it does countera gets reset to 0
  if(countera < 1){
    countera = 0;
  }
  // counterb does not go below 0 if it does counterb gets reset to 0
  if(counterb < 1){
    counterb = 0;
  }
  
  // state for fouls a and b
  var [foulsb, setfoulsb] = useState(0);
  var [foulsa, setfoulsa] = useState(0);
  // state form minutes and seconds
  var [seconds, setseconds] = useState(0);
  var [minutes, setminutes] = useState(0);
  // boolean state for is timer running?
  var [isRunning, setIsRunning] = useState(false);
  // if(foulsa > 5){
  //   foulsa = 5;
  // }

  // minutes does not below 0 if it does minutes gets reset to 0
  if(minutes < 0 ) {
    setminutes( minutes = 0 );
  }
  // if the seconds are less than 10 add a 0 before seconds else display seconds
  seconds = seconds < 10 ? '0' + seconds : seconds;
  // if seconds go above 59 then +1 minute and set seconds as seconds % 10
  if(seconds > '59') {
    setseconds(seconds = seconds % 10);
    setminutes( minutes + 1);
  }
  // if timer is running and seconds go below 0 and minutes are more than 0, set seconds to 59 and -1 from minutes
  if(isRunning && seconds < '00' && minutes !== 0 ) {
    setseconds(seconds = 59)
    setminutes( minutes - 1);
  } 
  // if timer is not running and seconds go below 00 and minutes are above 0 set seconds to 50 and -1 from minutes
  if(isRunning === false && seconds < '00' && minutes !== 0 ) {
    setseconds(seconds = 50);
    setminutes( minutes - 1);
  } 
  // if the timer reaches 0 the timer stops by setting minutes and seconds to 0 and setting isRunning to false
  if(minutes === 0 && seconds < '00' ) {
    setseconds( seconds = 0 );
    setminutes( minutes = 0 );
    setIsRunning(false);
  }

  // if timer is running set interval to -1 from seconds every second else clear interval
  useEffect(() => {
    if (isRunning) {
      var id = window.setInterval(() => {
        setseconds(seconds => seconds - 1);
      }, 1000);
      return () => window.clearInterval(id);
    }
    return undefined;
  }, [isRunning]);

  return(

    <div className="app-container">
      <Grid className="timer-container" item xs={12} container spacing={2}>
        <Grid item xs={3} 
          container
          direction="column"
          justify="center"
          alignItems="center">
          <button id="timerPlus10s" onClick={() => setseconds( seconds => seconds + 10 )}>+10s</button>
          <button id="timerPlus1min" onClick={() => setminutes( minutes => minutes + 1 )}>+1 min</button>
        </Grid>
        <Grid item xs={6}
          container
          direction="column"
          justify="center"
          alignItems="center">
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
        </Grid>
        <Grid item xs={3} 
          container
          direction="column"
          justify="center"
          alignItems="center">
        <button id="timerMinus10s" onClick={() => setseconds( seconds => seconds - 10 )}>-10s</button>
        <button id="timerMinus1min" onClick={() => setminutes( minutes => minutes - 1 )}>-1 min</button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <h1 id="score">Score</h1>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={6}             
            container
            direction="column"
            justify="center"
            alignItems="center">
      <div id="team-a">TEAM A</div>
      </Grid>
      <Grid item xs={6}             
            container
            direction="column"
            justify="center"
            alignItems="center">
      <div id="team-b">TEAM B</div>
      </Grid>
      </Grid>
      <Grid className="score-container" container spacing={2}>
        <Grid item xs={3} 
            container
            direction="column"
            justify="center"
            alignItems="flex-end">
          <button id="increment-btna" onClick={() => setcountera( countera + 1 )}>+1</button>
          <button id="increment3-btna" onClick={() => setcountera( countera + 3 )}>+3</button>
          <button id="decrement-btna" onClick={() => setcountera( countera - 1 )}>-1</button>
          <button id="reset-btna" onClick={() => setcountera( countera = 0 )}>Reset</button>
        </Grid>
        <Grid item xs={3} 
            container
            direction="column"
            justify="center"
            alignItems="center">
          <div id="counter-valuea">{countera}</div>
          </Grid>
          <Grid item xs={3} 
            container
            direction="column"
            justify="center"
            alignItems="center">
          <div id="counter-valueb">{counterb}</div>
          </Grid>
          <Grid item xs={3} 
            container
            direction="column"
            justify="center"
            alignItems="flex-start">
          <button id="increment-btnb" onClick={() => setcounterb( counterb + 1 )}>+1</button>
          <button id="increment3-btnb" onClick={() => setcounterb( counterb + 3 )}>+3</button>
          <button id="decrement-btnb" onClick={() => setcounterb( counterb - 1 )}>-1</button>
          <button id="reset-btnb" onClick={() => setcounterb( counterb = 0 )}>Reset</button>
          </Grid>
        </Grid>
        <Grid className="fouls-title" container spacing={2}>
        <Grid item xs={6}             
            container
            direction="column"
            justify="center"
            alignItems="center">
            <div className="fouls-teama">FOULS</div>
          </Grid>
          <Grid item xs={6}
            container
            direction="column"
            justify="center"
            alignItems="center">
            <div className="fouls-teamb">FOULS</div>
          </Grid>
        </Grid>
        <Grid className="fouls-container" container spacing={4} >
        <Grid item xs={3}
            container
            direction="column"
            justify="center"
            alignItems="flex-end">
            <button id="foulsplus1-btna" onClick={() => foulsa >= 5 ? foulsa =5 : setfoulsa( foulsa + 1)}>+1</button>
            <button id="fouls-btna" onClick={() => setfoulsa( foulsa = 0 )}>Reset</button>
          </Grid>
          <Grid item xs={3}
            container
            direction="row"
            justify="flex-start"
            alignItems="center">
            <div id="fouls-a">{foulsa}</div>

          </Grid>
          <Grid item xs={3}
            container
            direction="row"
            justify="flex-end"
            alignItems="center">
            <div id="fouls-b">{foulsb}</div>
          </Grid>
          <Grid item xs={3}
            container
            direction="column"
            justify="center"
            alignItems="flex-start">
            <button id="foulsplus1-btnb" onClick={() => foulsb >= 5 ? foulsb = 5 : setfoulsb( foulsb + 1)}>+1</button>
            <button id="fouls-btnb" onClick={() => setfoulsb( foulsb = 0 )}>Reset</button>
          </Grid>
        </Grid>
    </div> 
  )
}