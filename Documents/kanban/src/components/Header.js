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
      <div className='header-selected'>
        <h1 className='header-selected--desktop heading-XL'>
          {selectedBoard}
        </h1>
        <button className='header-selected--mobile' onClick={showSidebar}>
          {selectedBoard}
        </button>
      </div>
    </div>
    
  </header>
)
}
export default Header