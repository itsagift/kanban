import {useState, useCallback} from 'react';

function NewBoard({setModal}){
  const unSetModal = useCallback(() => {
    setModal()
  }, [setModal])
  const [columns, setColumns] = useState(["Todo", "Done"]);
  function editColumnName(e, index){
    
    setColumns(prevState => prevState.map((object, prevIndex)=> {
      if (prevIndex === index){
        return object = e.target.value
      }
      return object;
    }));
  }
  function addNewColumn(e){
    e.preventDefault();
    setColumns(prevState => [...prevState, ""])
  }
  function createNewBoard(){
    console.log(columns);
    unSetModal();
  }
return(
  <div className="modal-content--desktop">
    <h2 className="heading-L modal-content-heading">Add New Board</h2>
    <form>
      <p className="paragraph-accent modal-content-accent">Name</p>
      <input type="text" className="modal-content-input modal-content-input--text" placeholder="e.g. Web Design"/>
      <p className="paragraph-accent modal-content-accent">Columns</p>
      {
        columns.map((column, index) => {
          return(
            <div className='input-item-container'>
              <input type="text" className="modal-content-input modal-content-input--item" value={column} onChange={(e)=> {editColumnName(e, index)}}/>
              <img src="/assets/icon-cross.svg" onClick={()=> setColumns((prevState) => prevState.filter(newColumn => newColumn != column))}/>
            </div>
          )
        })
      }
      <button className='button-secondary modal-content-button' onClick={(e)=> addNewColumn(e)}>+ Add New Column</button>

      <button className='button-primary-S modal-content-button modal-content-button--submit' onClick={createNewBoard}>Create New Board</button>
    </form>
  </div>
)
}

export default NewBoard