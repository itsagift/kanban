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
      <button onClick={hideSidebar}>Hide sidebar</button>
    </div>
  </div>
)
}
export default Sidebar