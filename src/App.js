import { useState } from 'react';
import Calc from './Calc';
import HightAvg from './HightAvg';
import {TiArrowBack } from 'react-icons/ti';

function App() {

let [showCalc,toggleCalc] = useState(false)
let [showHavg,toggleHavg] = useState(false)
let [showBtn,toggleBtn] = useState(true)
let [open,toggleOpen] = useState(false)

  return (
    <div className={`App ${open && 'open'} bg-dark text-white d-flex align-items-center justify-content-center`}>
      {open && <button onClick={() => {
        toggleOpen(o => !o)
        toggleHavg(false)
        toggleCalc(false)
        toggleBtn(true)
        }} className='btn btn-danger mb-2'> <TiArrowBack/>חזור</button>}
      { showBtn && <button className='btn btn-light mb-4' onClick={() => {
        toggleCalc(s => !s)
        toggleHavg(false)
        toggleBtn(s => !s)
        toggleOpen(true)
      }}>חישוב פלזמה</button>}
      { showBtn && <button className='btn btn-light' onClick={() => {
        toggleHavg(s => !s)
        toggleCalc(false)
        toggleBtn(s => !s)
        toggleOpen(true)
      }}>חישוב הגובה</button>}

      {showCalc &&
      <Calc/>
      }
      {showHavg &&
      <HightAvg/>
      }
    </div>
  );
}

export default App;

