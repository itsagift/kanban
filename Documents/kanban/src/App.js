import Form from "./components/Form";
import Form2 from "./components/Form2";
import {useState} from 'react';
import { useLocalStorage } from "./useLocalStorage";


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  function switchTheme(){
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className="app" data-theme={theme}>
      <header className="App-header">
        <button onClick={switchTheme}>Toggle dark mode</button>
        <p className="heading-L">test</p>
        <button className="button-primary-L">Button Primary L</button>
        <button className="button-primary-S">Button Primary S</button>
        <button className="button-secondary">Button Primary S</button>
      </header>
    </div>
  );
}

export default App;
