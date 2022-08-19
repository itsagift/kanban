import Column from "./Column"

function Board({board}){
return(
  <div className="board">
    {
      board.columns.map((column)=> {
        return(
          <Column column={column}/>
        )
      })
    }
  </div>
)
}
export default Board