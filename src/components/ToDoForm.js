import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ToDoForm.css"

const ToDoFrom = (props) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
        console.log(userInput)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(userInput);
        setUserInput('');
    }
    return (
        <div class="container-sm box">
            <form onSubmit={handleSubmit}>
                <span>Define your task</span>
                <input class="form-control form-control-sm" value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." />
                <button class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
export default ToDoFrom;