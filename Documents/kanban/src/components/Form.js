import {useState, useEffect} from 'react';

function Form(){
  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  return(
  
  <form>
    <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
    <input type="submit" value="Submit"></input>
    <h3>{name}</h3>
  </form>
)
}
export default Form