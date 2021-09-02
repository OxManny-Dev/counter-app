// TODO: Import useState with React
import { useState } from 'react';
import './style.css';
// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';
function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [ email, setEmail ] = useState('');
  const [ userName, setUserName ] = useState('');
  // TODO: Create a password variable and a function "setPassword" using useState
  const [ password, setPassword ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    let target = e.target;
    let inputType = target.name;
    let inputValue = target.value;
    console.log(22, target);
    console.log(23, inputType);
    console.log(24, inputValue);
    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Fill out email and username please!');
    } else if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
    } else {
      alert(`Hello ${userName}`);
    }
    setUserName('');
    // TODO: Set the password back to an empty string after the user clicks submit
    setPassword('');
    setEmail('');
  };
  return (
    <div>
      <p>Hello {userName}</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
        {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
      {
        errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )
      }
    </div>
  );
}
export default Form;
