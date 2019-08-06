// import React from 'react';
// import ReactDOM from 'react-dom';
// import HelloWorld from './components/HelloWorld';
// import './styles/app.scss';

// ReactDOM.render(
//     <HelloWorld />,
//     document.getElementById('app')
// );

document.addEventListener("DOMContentLoaded", () => {
   writeContent(); 
});

const SEEDTASKS = [
    "task 1",
    "task 2",
    "task 3",
    "task 4",
    "task 5"
]

function writeContent(){
    const title = document.createElement("h1");
    title.innerText = "New JS Project";

    const taskList = document.createElement("ul");
    SEEDTASKS.map(task => {
        const taskLi = document.createElement("li");
        taskLi.innerHTML = task;       
        taskList.appendChild(taskLi);
    })

    const taskForm = document.createElement("form");

    const taskTitleInput = document.createElement("input");
    taskTitleInput.type = "text";

    const descriptionInput = document.createElement("textarea");
    const submitBtn = document.createElement("button");
    submitBtn.innerText = "submit";

    taskForm.append(taskTitleInput, descriptionInput, submitBtn);
    
    document.body.append(title, taskList, taskForm);
}

function newContent(tag, text, {klass = null, id = null }){
    const newElement = document.createElement(tag)
    const newText = document.createTextNode(text);
    newElement.appendChild(newText);

    
}