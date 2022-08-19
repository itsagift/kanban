import Task from "./Task"
function Column({column}){
  console.log("column", column)
  return(
    <div className="column">
      <h4 className="column-name heading-S">{column.name}</h4>
      {
        column.tasks.map((task)=> {
          return(
            <Task task={task}/>
          )
        })
      }
    </div>
  )
}
export default Column