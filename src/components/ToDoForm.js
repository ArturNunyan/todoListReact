import { useState } from "react";
import "./form.css"

function ToDoForm({onAdd}) {
    const [text, setText] = useState('')
    return(
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText('');
        }}>
            <input type="text" 
                value={text}
                onChange={(e) =>{
                    setText(e.target.value)
                }}/>
            <button>Add</button>
        </form>
    )
}

export default ToDoForm;