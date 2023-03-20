import ToDoItem from "./ToDoItem"
import "./todolist.css"

function ToDoList({todos, onDelete}) {
    return(
        <div>
            {todos.map((todo) => {
                return(
                    // <div key={todo.id}>{todo.text}</div>
                    <ToDoItem 
                        key={todo.id} 
                        todo={todo}
                        onDelete={onDelete}
                    />
                )
            })}
        </div>
    )
}

export default ToDoList;