import { useState } from "react";

function useForm(callback, initialState) {
  const [vals, setVals] = useState(initialState);

  const handleSubmit = event => {
    event && event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setVals(vals =>
      Object.assign({}, vals, { [event.target.name]: event.target.value })
    );
    // setVals(vals => ({ ...vals, [event.target.name]: event.target.value}) );
  };

  return {
    handleChange,
    handleSubmit,
    vals
  };
}

export default useForm;
