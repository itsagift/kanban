import BoardList from './BoardList';

function Dashboard({sidebarVisible, showSidebar}){
return(
  <div className='dashboard'>
    {
      !sidebarVisible &&
      <button className="sidebar-show-button" onClick={showSidebar}>Show sidebar</button>
    }
  </div>
)
}
export default Dashboard