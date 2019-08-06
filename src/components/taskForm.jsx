import React, {useState, useEffect} from 'react';

function TaskForm (props) {
    
    const [name, setName ] = useState("");
    
    const handleChange = (e) => {
        setName(e.target.value)
    }

    return(
        <input type="text" value={name} onChange={handleChange}/>
    );
}

export default TaskForm;