import Form from "./components/Form";
import Form2 from "./components/Form2";
import {useState} from 'react';
import { useLocalStorage } from "./useLocalStorage";


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  function switchTheme(){
    const newTheme = theme == 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className="app" data-theme={theme}>
      <header className="App-header">
        <button onClick={switchTheme}>Toggle dark mode</button>
        test
      </header>
    </div>
  );
}

export default App;
