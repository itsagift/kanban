import BoardList from './BoardList';
import Column from './Column';

function Dashboard({sidebarVisible, showSidebar, selectedBoard}){
return(
  <div className={sidebarVisible ? 'dashboard dashboard-default' : 'dashboard dashboard-extended'}>
    {
      !sidebarVisible &&
      <button className="sidebar-show-button" onClick={showSidebar}><img src="/assets/icon-show-sidebar.svg"/></button>
    }
    <div className='board-columns'>
    {
      selectedBoard.columns.map((column)=> {
        return(
          <Column column={column}/>
        )
      })
    }
    <div className='column column-new'>
      Add New
    </div>
    </div>
  </div>
)
}
export default Dashboard