import React, {useState} from 'react';

function TaskForm (props) {

    const [name, setName ] = useState("");
    
    const handleChange = (e) => {
        setName(e.target.value)
    }

    return(
        <label htmlFor="taskName">
            <input type="text" value={name} onChange={handleChange}/>
        </label>
    );
}

export default TaskForm;