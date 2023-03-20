import "./todoitem.css"

function ToDoItem({todo, onDelete}) {
    return(
        <div className="list">
            <label>
                <input type = "checkbox" />
                {todo.text}
                <button onClick={()=>{
                    onDelete(todo);
                }}>x</button>
            </label>
        </div>
    )
}

export default ToDoItem;