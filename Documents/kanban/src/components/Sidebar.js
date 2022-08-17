import BoardList from "./BoardList";
import ThemeToggle from "./ThemeToggle";

function Sidebar({switchTheme, sidebarVisible, hideSidebar, selectedBoard, setSelectedBoard}){
  
return(
  <div className="sidebar">
    <div className="sidebar-top">
      <BoardList selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard}/>
    </div>
    <div className="sidebar-bottom">
      <ThemeToggle/>
      <div className="sidebar-toggle-container">
      <button className="sidebar-toggle-button heading-M" onClick={hideSidebar}>Hide sidebar</button>
      </div>
      
    </div>
  </div>
)
}
export default Sidebar