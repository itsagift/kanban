import { useContext } from 'react';
import { DarkModeContext } from '../context/dark-mode-context';

function ThemeToggle(){
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  function handleChange(){

  }

  return(
    <div className="toggle-container">
      <img src="/assets/icon-light-theme.svg"/>
      <label className="toggle">
        <input type="checkbox" checked={darkMode} onChange={() => toggleDarkMode(!darkMode)}/>
        <span className="toggle-slider round"></span>
      </label>
      <img src="/assets/icon-dark-theme.svg"/>
    </div>
  )
}
export default ThemeToggle