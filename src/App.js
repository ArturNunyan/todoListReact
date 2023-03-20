import './App.css';
import ToDoList from './components/ToDoList';
import {useState} from "react";
import ToDoForm from './components/ToDoForm';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'Learn JS',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'Learn CSS',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'Learn React',
      isCompleted: false
    },
  ])
  return (
    <div className="App">
      <ToDoForm onAdd={(text)=>{
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ])
      }}/>
      <ToDoList 
        todos = {todos}
        onDelete = {(todo)=>{
          setTodos(todos.filter((t) => t.id !== todo.id)
      )}}
        />
    </div>
  );
}

export default App;
