import React, {createContext, useState} from 'react';
import { useLocalStorage } from '../useLocalStorage';

const DarkModeContext = createContext();

function DarkModeProvider(props){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = (dark) => {
        setDarkMode(!darkMode);
    };
    return (
        <div>  
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
};

export {DarkModeContext, DarkModeProvider};