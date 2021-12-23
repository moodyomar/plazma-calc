import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { AiFillCalculator,AiOutlineFieldTime,AiTwotoneCalendar } from 'react-icons/ai';

const Calc = () => { 

  let [hrs,setHrs] = useState(0)
  let [hInput,setHInput] = useState(0)
  let [mins,setMins] = useState(0)
  let [date,setDate] = useState(new Date())
  let [recipe,setRecipe] = useState(0.15)
  let [plazmaDate,setPlazmaDate] = useState('---')
  let [toggle,setToggle] = useState(false)

  function addHours(date, hours) {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hours);
    return newDate;
  }
    useEffect(() => {
      setHrs((hInput * recipe).toFixed(1));
      setMins(((hInput * recipe) * 60).toFixed(1));
      let d = addHours(date,Number(hrs)).toString();
      setPlazmaDate(d.slice(0,d.indexOf('G')));
  
  },[recipe,hInput,date,hrs])
  

  const onChange = (e) => {
    if(e.target.name === 'hours'){
      setHInput(e.target.value);
      setToggle(true)
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
    let form = document.querySelector('form');
    let dd = document.querySelector('#date');
    dd.value = ''
    setPlazmaDate('')
    form.reset()
    setToggle(false)
    setHInput(0);
  }

return(

<div className=''>
<form onSubmit={e => reset(e)}>
       <div className="d-flex mb-4 h2 justify-content-center align-items-center">
     <AiFillCalculator className="me-2" />מחשבון גובה<AiFillCalculator className="ms-2" />
      </div>
     <div className="result mb-3 mx-auto">
    <div className="d-flex justify-content-around bg-light text-dark">
    <label  htmlFor="total-hours">.</label>
    <label htmlFor="total-minutes">.</label>
    </div>
    <div className="d-flex justify-content-around">
    <label className="h3 mt-1 text-warning" htmlFor="total-hours">{`${hrs}`}<span> </span></label>
    <label className="h3 mt-1 text-warning" htmlFor="total-minutes">{`${mins}`}<span> </span> 
    </label> 
    
    </div>

    <div className="d-flex mt-4 justify-content-around bg-light text-dark">
    <label htmlFor="plazma-date">.</label>
    </div>
    <div className="d-flex justify-content-around">
{  toggle &&
    <label className="h4 mt-2 text-warning" htmlFor="plazma-date">{plazmaDate}</label>
}
    </div>
  </div>
  <div className="d-flex justify-content-around my-5 align-items-center">
       <div className="d-flex">
       {/* <label htmlFor="v9">V9 <span className="text-warning fw-bold">-</span> 15%</label>
       <input type="radio" name="recipes" value="v9" id="v9" defaultChecked="checked" onChange={e => onChange(e)}/>
       </div>
       <div className="d-flex">
       <label htmlFor="v10">V10 <span className="text-warning fw-bold">-</span> 10%</label>
       <input type="radio" name="recipes" value="v10" id="v10" onChange={e => onChange(e)}/> */}
       </div>
     </div>

     <div className="d-flex justify-content-end text-center mb-2">
       <label htmlFor="hours"  className="me-2"> שעות גידול  <AiOutlineFieldTime/></label>
      
       <label htmlFor="date" className="ms-2" id="date"> <AiTwotoneCalendar/></label>
     </div>
     <div className="d-flex justify-content-between">
       <input type="tel" name="hours" className="form-control w-50 me-2" id="hours" onChange={e => onChange(e)} />
       <input type="datetime-local" className="form-control w-50" name="date" id="date" onChange={e => onChange(e)} />
     </div>
     

  <div className="d-flex justify-content-center mt-4">
  <button className="btn btn-danger">איפוס הכל</button>
  </div>
  </form>
</div>

)
}

export default Calc