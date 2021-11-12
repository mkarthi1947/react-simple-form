import React from 'react';
import './style.css';
const initValue = {
  dropdown1: 'test3',
  dropdown2: '',
  dropdown3: '',
};
export default function App() {
  const [appForm, setAppForm] = React.useState(initValue);
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const temp = { ...appForm };
    temp[name] = value;
    setAppForm(temp);
  };
  const submitForm = (event) => {
    console.log(appForm);
    event.preventDefault();
  };
  const resetForm = (event) => {
    setAppForm(initValue);
    event.preventDefault();
  };
  return (
    <form>
      <select
        name="dropdown1"
        value={appForm.dropdown1}
        onChange={(e) => handleChange(e)}
      >
        <option value="">Select value</option>
        <option value="test">test</option>
        <option value="test2">test2</option>
        <option value="test3">test3</option>
        <option value="test4">test4</option>
      </select>
      <select
        name="dropdown2"
        value={appForm.dropdown2}
        onChange={(e) => handleChange(e)}
      >
        <option value="">Select value</option>
        <option value="test">test</option>
        <option value="test2">test2</option>
        <option value="test3">test3</option>
        <option value="test4">test4</option>
      </select>
      <select
        name="dropdown3"
        value={appForm.dropdown3}
        onChange={(e) => handleChange(e)}
      >
        <option value="">Select value</option>
        <option value="test">test</option>
        <option value="test2">test2</option>
        <option value="test3">test3</option>
        <option value="test4">test4</option>
      </select>
      <button onClick={(e) => submitForm(e)}>Submit</button>
      <button onClick={(e) => resetForm(e)}>Reset</button>
    </form>
  );
}
