import {useState} from 'react';

export const useForm = (callback, inputOptions) => {
  const [inputs, setInputs] = useState(inputOptions);
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
