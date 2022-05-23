import { useEffect } from "react";
export default function Plan({plan, setState, state}){
  useEffect(() => {
    plan.answers.map((answer, i) => {
      if (i === 0){
        setState(prevstate => ({...prevstate, [plan.name]: answer.title }))
      }
    })
  }, []);

  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setState(prevstate => ({...prevstate, [plan.name]: e.target.value }));
    }
  };
return(
  <div>
  <h1>{plan.question}</h1>
  <div className="radio-container">
  {
    plan.answers.map((answer, i) => {
      
      return(
        <div className="radio-option">
          <label>
          <input
              type="radio"
              name={plan.name}
              value={answer.title}
              checked = {state[plan.name] === answer.title}
              onChange={handleChange}
            />
          
          <h1 className="radio-title">{answer.title}</h1>
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
