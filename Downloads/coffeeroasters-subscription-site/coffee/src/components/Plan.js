import {useState, useEffect} from 'react';
export default function Plan({plan, setState, state, setOpenAccordion, openAccordion, grindDisabled, setGrindDisabled}){
  
  useEffect(() => {
    // Update the document title using the browser API
    if (state["Preferences"] === "Capsule"){
      setGrindDisabled(true)
    }
    else{
      setGrindDisabled(false)
    }
  }, [state["Preferences"]]);

  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setState(prevstate => ({...prevstate, [plan.title]: e.target.value }));
    }
  };
  const handleClick = (e) => {
    if (grindDisabled && plan.title === "Grind Option"){
      e.preventDefault();
    }
    else{
      if (!openAccordion.includes(plan.title)){
        setOpenAccordion(prevState => [prevState, plan.title])
      }
      else {
        setOpenAccordion(prevState => prevState.filter(accordion => 
          accordion !== plan.title))
      }
    }
    
  }
  
return(
  <div className="plan-items">
  <details className={`plan-accordion ${plan.title === "Grind Option" && grindDisabled ? "disabled" : ""}`} onClick={handleClick}>
  <summary className='accordion-item'>
    <h2 className='accordion-title'>{plan.question}</h2>
    <img onClick={()=> console.log(openAccordion)} className={`accordion-arrow ${openAccordion.includes(plan.title) ? "open" : ""}`} src='/plan/desktop/icon-arrow.svg'></img>
  </summary>
  <div className="radio-buttons-container">
  {
    plan.answers.map((answer, i) => {
      
      return(
        <div className={state[plan.title] === answer.title ? "radio-button-option checked" : "radio-button-option"}>
          <label>
          <input className='radio-button-input'
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
