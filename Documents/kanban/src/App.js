import {useState, useEffect, useContext} from 'react';

import { DarkModeContext } from './context/dark-mode-context';
import { ModalProvider } from './context/modal-context';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import jsonData from './data.json';

function App() {
  const {darkMode} = useContext(DarkModeContext)
  const [selectedBoard, setSelectedBoard] = useState(jsonData.boards[0].name);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  function showSidebar(){
    setSidebarVisible(true);
  }
  function hideSidebar(){
    setSidebarVisible(false);
  }

  return (
    
      <div className="app" data-theme={darkMode ? 'dark' : 'light'}>
        <ModalProvider>
          
          <Header darkMode={darkMode} setSelectedBoard={setSelectedBoard} selectedBoard={selectedBoard} showSidebar={showSidebar} sidebarVisible={sidebarVisible}/>
            {sidebarVisible &&
              <Sidebar sidebarVisible={sidebarVisible} hideSidebar={hideSidebar} selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard}/>
            }
            <Dashboard sidebarVisible={sidebarVisible} showSidebar={showSidebar}/>
        </ModalProvider>
      </div>
  );
}

export default App;
