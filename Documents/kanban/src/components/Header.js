import jsonData from '../data.json';

function Header({switchTheme, setSelectedBoard, selectedBoard, showSidebar, sidebarVisible}){
return(
  <header className='header'>
    <div className='header-right'>
    {selectedBoard}
    <button className='select-board-toggle' onClick={showSidebar}> Board Name</button>
    </div>
    
  </header>
)
}
export default Header