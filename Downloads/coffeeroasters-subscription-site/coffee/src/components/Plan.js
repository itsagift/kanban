import {useState} from 'react';
export default function Plan({plan, setState, state, setOpenAccordion, openAccordion}){
  

  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setState(prevstate => ({...prevstate, [plan.title]: e.target.value }));
    }
  };
  const handleToggle = (e) => {
    if (e.target.open){
      setOpenAccordion(plan.title)
    }
    else{
      setOpenAccordion("")
    }
  }
return(
  <div className="plan-items">
  <details className="plan-accordion" onToggle={handleToggle}>
  <summary className='accordion-item'>
    <h2 className='accordion-title'>{plan.question}</h2>
    <img className={`accordion-arrow ${openAccordion === plan.title ? "open" : ""}`} src='/plan/desktop/icon-arrow.svg'></img>
  </summary>
  <div className="radio-buttons-container">
  {
    plan.answers.map((answer, i) => {
      
      return(
        <div className={state[plan.title] === answer.title ? "radio-button-option checked" : "radio-button-option"}>
          <label>
          <input
              type="radio"
              name={plan.name}
              value={answer.title}
              checked = {state[plan.title] === answer.title}
              onChange={handleChange}
            />
          
          <h4 className="radio-button-title">{answer.title}</h4>
          <div className="radio-button-description">{answer.description}</div>
          </label>
        </div> 
      )
      
    })
  }
  
  </div>
  </details>
  </div>
)
}
