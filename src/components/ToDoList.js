
import './ToDoList.css'
const ToDoList = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
        props.handleToggle(e.target.id)
        console.log(e.target.id)
    }

    return (
        <div className='container-md'>
            <div className='container-sm list'>
                {props.toDoList.map(todo => {
                    return (
                        <div className='listElement'>
                            <div id={todo.id} key={todo.id + todo.task} value={todo.id} className={todo.complete ? "todo strike" : "todo"}>
                                {todo.task}
                            </div>
                            <div className='buttonsBox'>
                                <button id={todo.id} onClick={handleClick} className="btn btn-warning">Set To Done</button><button id={todo.id} onClick={props.handleFilter} className="btn btn-danger">Delete Task</button>
                            </div>
                        </div>
                    )
                })}
            </div >
        </div>
    )
}
export default ToDoList;