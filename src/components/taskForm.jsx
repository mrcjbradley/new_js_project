import React, { useState } from "react";
import useForm from "./useForm.jsx";

const Form = () => {
  const { vals, handleChange, handleSubmit } = useForm(test, {
    title: "task title",
    description: "task description",
    date: new Date()
  });

  function test() {
    console.log(vals);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={vals.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={vals.description}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={vals.date}
        onChange={handleChange}
      />
      <button />
    </form>
  );
};

// function TaskForm (props) {

//     const [state, setState] = useState({
//         title: "",
//         description: "",
//         dueDate: new Date()
//     })

//     return(
//         <form onSubmit={()=>{console.log("submit")}}>
//             <Input name="title" type="text"/>
//             <Input name="description" type="text"/>
//             <Input name="due date" type="date"/>
//             <button
//             >
//                 Create Task
//             </button>
//         </form>
//     );
// }

// function Input ({name, type}) {
//     const [state, setState] = useState("");

//     function handleChange(e){
//         setState(e.target.value);
//     }

//     return(
//         <label htmlFor={name}>
//             <input type={type}
//             name={name}
//             value={state}
//             onChange={handleChange}
//             placeholder={`New Task ${name}`}
//             />
//         </label>
//     )
// }

export default Form;
