import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [hrs,setHrs] = useState(0)
  let [hInput,setHInput] = useState(0)
  let [mins,setMins] = useState(0)
  let [date,setDate] = useState(new Date())
  let [recipe,setRecipe] = useState(0.15)
  let [plazmaDate,setPlazmaDate] = useState('---')

  function addHours(date, hours) {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hours);
    return newDate;
  }
    useEffect(() => {
      console.log('hrs ',hrs);
      console.log('recipe ',recipe);
      setHrs(Math.floor(hInput * recipe).toFixed(1));
      setMins(Math.floor((hInput * recipe) * 60).toFixed(1));
      let d = addHours(date,Number(hrs)).toString();
      setPlazmaDate(d.slice(0,d.indexOf('G')));
  
  },[recipe,hInput,date])
  

  const onChange = (e) => {
    if(e.target.name === 'hours'){
      setHInput(e.target.value);
        }
    if(e.target.name === 'date') setDate(new Date(e.target.value));
    if(e.target.name === 'recipes'){ 
      switch (e.target.value) {
        case 'v9':
          setRecipe(0.15);
          break;
  
        case 'v10':
          setRecipe(0.10);
          break;
      
        default:
          break;
      }
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
     <div className="result mb-3 mx-auto">
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
      {hrs &&
    <label className="h4 mt-2" htmlFor="plazma-date">{plazmaDate}</label>
      }
    </div>
  </div>
  <div className="d-flex justify-content-around my-4 align-items-center">
       <div className="d-flex">
       <label htmlFor="v9">V9</label>
       <input type="radio" name="recipes" value="v9" id="v9" defaultChecked="checked" onChange={e => onChange(e)}/>
       </div>
       <div className="d-flex">
       <label htmlFor="v10">V10</label>
       <input type="radio" name="recipes" value="v10" id="v10" onChange={e => onChange(e)}/>
       </div>
     </div>

     <div className="d-flex justify-content-between mb-2">
       <label htmlFor="hours">שעות גידול</label>
       <label htmlFor="date" id="date">מתי הוכנסה לפלזמה</label>
     </div>
     <div className="d-flex justify-content-between">
       <input type="tel" name="hours" className="form-control w-25" id="hours" onChange={e => onChange(e)} />
       <input type="datetime-local" className="form-control w-50" name="date" id="date" onChange={e => onChange(e)} />
     </div>
     
  <div className="d-flex justify-content-center mt-4">
  <button className="btn btn-light">איפוס הכל</button>
  </div>
  </form>
    </div>
  );
}

export default App;
