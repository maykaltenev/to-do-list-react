
import { useState } from 'react';
import ToDoFrom from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import './App.css';


function App() {
  const [toDoList, setToDoList] = useState([]);
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }]
    setToDoList(copy);
    console.log(toDoList)
  }
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task }
    })
    setToDoList(mapped);
  }
  const handleFilter = (index) => {
    let filtered = toDoList.filter((_, i) => {
      return index !== i;
    });
    setToDoList(filtered);
  }
  return (
    <div className="App container-s">
      <ToDoFrom addTask={addTask} />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
    </div>
  );
}

export default App;
