
export default function Plan({plan, setState, state}){

  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setState(prevstate => ({...prevstate, [plan.name]: e.target.value }));
    }
  };
return(
  <div className="plan-container">
  <h2>{plan.question}</h2>
  <div className="radio-container">
  {
    plan.answers.map((answer, i) => {
      
      return(
        <div className={state[plan.name] === answer.title ? "radio-option checked" : "radio-option"}>
          <label>
          <input
              type="radio"
              name={plan.name}
              value={answer.title}
              checked = {state[plan.name] === answer.title}
              onChange={handleChange}
            />
          
          <h4 className="radio-title">{answer.title}</h4>
          <div className="radio-description">{answer.description}</div>
          </label>
        </div> 
      )
      
    })
  }
  </div>
  </div>
)
}
