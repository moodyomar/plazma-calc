import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { AiFillCalculator,AiOutlineFieldTime,AiOutlineColumnHeight } from 'react-icons/ai';

const Calc = () => { 

  let [initHeight,setInitHeight] = useState(0)
  let [finalHeight,setFinalHeight] = useState(0)
  let [hrs,setHrs] = useState(0)
  let [date,setDate] = useState(new Date())
  let [avrg,setAvrg] = useState(4.5)
  let [pressure,setPressure] = useState(95)
  let [finishDate,setFinishDate] = useState('---')

  const pressures = {
    95:4.5,
    98:4.8,
    100:5,
    102:5.3,
    104:5.6,
    106:5.9,
    108:6.2,
    110:6.5,
    112:6.8
  }

  useEffect(() => {
    setDate(new Date())
    setFinalHeight((Number((hrs * avrg) / 1000) + Number(initHeight)).toFixed(2));
    let d = addHours(date,Number(hrs)).toString();
    setFinishDate(d.slice(0,d.indexOf('G')));

  },[avrg,pressure,hrs,initHeight])

  const onChange = (e) => {
    if(e.target.name === 'init-height'){ 
setInitHeight(e.target.value);
    }
    if(e.target.name === 'hours'){ 
      setHrs(e.target.value);
      console.log('avrg',avrg);
      
setFinalHeight((e.target.value * avrg)/1000);
    }
    if(e.target.name === 'paces'){ 
      setAvrg(pressures[e.target.value]);
      setPressure(e.target.value);
    }
  }

  function addHours(date, hours) {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hours);
    return newDate;
  }
  
  const reset = (e) => {
    e.preventDefault()
    let form = document.querySelector('form');
    let dd = document.querySelector('#date');
    dd.value = ''
    setFinishDate('')
    form.reset()
    setAvrg(0);
  }

return(

<div className=''>
<form onSubmit={e => reset(e)}>
       <div className="d-flex mb-4 h2 justify-content-center align-items-center">
     <AiFillCalculator className="me-2" />מחשבון גובה<AiFillCalculator className="ms-2" />
      </div>
     <div className="result mb-3 mx-auto">
    <div className="d-flex justify-content-around bg-light text-dark">
    <label  htmlFor="total-hours">F גובה בסיום</label>
    <label htmlFor="total-minutes">F גובה בהתחלה</label>
    </div>
    <div className="d-flex justify-content-around">
    <label className="h3 mt-1 text-warning" htmlFor="total-hours">{`${finalHeight}`}<span> </span></label>
    <label className="h3 mt-1 text-warning" htmlFor="total-minutes">{`${initHeight}`}<span> </span> 
    </label> 
    
    </div>

    <div className="d-flex mt-4 justify-content-around bg-light text-dark">
    <label htmlFor="finish-date">תאריך סיום</label>
    </div>
    <div className="d-flex justify-content-around">

    <label className="h4 mt-2 text-warning" htmlFor="finish-date">{finishDate}</label>

    </div>
  </div>
  <div className="d-flex justify-content-around my-5 align-items-center">
       <div className="d-flex align-items-center">
       <label className='me-2 checkbox-text' htmlFor="pressure">לחץ</label>
       <select onChange={e => onChange(e)} name="paces" id="paces" 
       className='form-control pressure-box'>
         <option value="95">95</option>
         <option value="98">98</option>
         <option value="100">100</option>
         <option value="102">102</option>
         <option value="104">104</option>
         <option value="106">106</option>
         <option value="108">108</option>
         <option value="110">110</option>
         <option value="112">112</option>
       </select>
       </div>
       <div className="d-flex align-items-center">
       <label className='me-2 checkbox-text' htmlFor="pressure">Gas Flow</label>
       <input type="checkbox" name="recipes" value="v10" id="gasflow" onChange={e => onChange(e)}/>
       </div>
       <div className="d-flex align-items-center">
       <label className='me-2 checkbox-text' htmlFor="pressure">חמצן גבוה</label>
       <input type="checkbox" name="recipes" value="higho" id="higho" onChange={e => onChange(e)}/>
       </div>
     </div>

     <div className="d-flex justify-content-center text-center mb-2">
       <label htmlFor="hours"  className="me-2"> שעות גידול  <AiOutlineFieldTime/></label>
      
       <label htmlFor="date" className="ms-5" id="date"> נכנסה בגובה <AiOutlineColumnHeight/> </label>
     </div>
     <div className="d-flex justify-content-between">
       <input type="text" name="hours" className="form-control w-50 me-2" id="hours" onChange={e => onChange(e)} />
       <input type="text" className="form-control w-50" name="init-height" id="init-height" onChange={e => onChange(e)} />
     </div>
     

  <div className="d-flex justify-content-center mt-4">
  <button className="btn btn-danger">איפוס הכל</button>
  </div>
  </form>
</div>

)
}

export default Calc