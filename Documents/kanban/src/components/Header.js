import jsonData from '../data.json';


function Header({darkMode, switchTheme, setSelectedBoard, selectedBoard, showSidebar, sidebarVisible}){
  
return(
  <header className='header'>
    <div className='header-right'>
      <div className={sidebarVisible ? 'logo logo-default' : 'logo logo-alt'}>
        <img src={darkMode ? '/assets/logo-light.svg' :'/assets/logo-dark.svg'}></img>
      </div>
    </div>
    <div className='header-left'>
    {selectedBoard}
    <button className='select-board-toggle' onClick={showSidebar}> Board Name</button>
    </div>
    
  </header>
)
}
export default Header