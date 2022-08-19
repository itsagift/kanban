import BoardList from './BoardList';

function Dashboard({sidebarVisible, showSidebar, selectedBoard}){
return(
  <div className={sidebarVisible ? 'dashboard dashboard-default' : 'dashboard dashboard-extended'}>
    {
      !sidebarVisible &&
      <button className="sidebar-show-button" onClick={showSidebar}><img src="/assets/icon-show-sidebar.svg"/></button>
    }
    <h1>{selectedBoard.columns.length}</h1>
  </div>
)
}
export default Dashboard