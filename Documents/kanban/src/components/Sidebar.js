import BoardList from "./BoardList";


function Sidebar({switchTheme, sidebarVisible, hideSidebar, selectedBoard, setSelectedBoard}){
return(
  <div className="sidebar">
    
    <BoardList selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard}/>
    <button onClick={switchTheme}>Switch theme</button>
    <button onClick={hideSidebar}>Hide sidebar</button>
  </div>
)
}
export default Sidebar