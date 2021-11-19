import { useState } from 'react';
import './App.css';

function App() {

  let [hrs,setHrs] = useState(0)
  let [mins,setMins] = useState(0)
  let [date,setDate] = useState('')
  let [plazmaDate,setPlazmaDate] = useState('---')

  const onChange = (e) => {
    console.log(e.target.value);
    if(e.target.name === 'hours'){
      setHrs(Math.floor(e.target.value * 0.15).toFixed(1));
      setMins(Math.floor((e.target.value * 0.15) * 60).toFixed(1));
    }
    if(e.target.name === 'date') setDate(e.target.value);
    switch (e.target.value) {
      case 'v9':
      console.log('hey v9');
        break;

      case 'v10':
      console.log(date);
        break;
    
      default:
        break;
    }
  }


  
  const reset = (e) => {
    e.preventDefault()
    console.log('hrs ',hrs);
    console.log('date ',date);
    let form = document.querySelector('form');
    form.reset()
  }

  return (
    <div className="App bg-dark text-white d-flex align-items-center justify-content-center">
      <form onSubmit={e => reset(e)}>
      <div className="d-flex mb-4 h2 justify-content-center">
        חישוב שעות פלזמה
      </div>
     <div className="result mb-5 mx-auto">
    <div className="d-flex justify-content-around bg-light text-dark">
    <label  htmlFor="total-hours">סך הכל שעות</label>
    <label htmlFor="total-minutes">סך הכל דקות</label>
    </div>
    <div className="d-flex justify-content-around">
    <label className="h3 mt-1" htmlFor="total-hours">{`${hrs}`}<span> שעות</span></label>
    <label className="h3 mt-1" htmlFor="total-minutes">{`${mins}`}<span> דקות</span></label>
    </div>
    <div className="d-flex mt-4 justify-content-around bg-light text-dark">
    <label htmlFor="plazma-date">הפלאזמה תסתיים ביום</label>
    </div>
    <div className="d-flex justify-content-around">
    <label className="h3 mt-2" htmlFor="plazma-date">{plazmaDate}</label>
    </div>
  </div>
     <div className="d-flex justify-content-between mb-2">
       <label htmlFor="date" id="date">מתי הוכנסה לפלזמה</label>
       <label htmlFor="hours">שעות גידול</label>
     </div>
     <div className="d-flex justify-content-between">
       <input type="datetime-local" className="form-control w-50" name="date" id="date" onChange={e => onChange(e)} />
       <input type="tel" name="hours" className="form-control w-25" id="hours" onChange={e => onChange(e)} />
     </div>
     <div className="d-flex justify-content-around mt-5 align-items-center">
       <div className="d-flex">
       <label htmlFor="v9">V9</label>
       <input type="radio" name="recipes" value="v9" id="v9" defaultChecked="checked" onChange={e => onChange(e)}/>
       </div>
       <div className="d-flex">
       <label htmlFor="v10">V10</label>
       <input type="radio" name="recipes" value="v10" id="v10" onChange={e => onChange(e)}/>
       </div>
     </div>
  <div className="d-flex justify-content-center mt-4">
  <button className="btn btn-light">איפוס הכל</button>
  </div>
  </form>
    </div>
  );
}

export default App;
