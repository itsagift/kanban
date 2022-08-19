function Task({task}){
  const completedSubtasks = task.subtasks.filter((subtask) => subtask.isCompleted === true)
  
  return(
    <div className="task">
      <h3 className="heading-M task-title">{task.title}</h3>
      <div className="paragraph-accent subtasks">{completedSubtasks.length} of {task.subtasks.length} subtasks</div>
    </div>
  )
}

export default Task