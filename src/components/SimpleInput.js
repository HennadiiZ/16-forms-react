import { useState, useEffect } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const { 
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasErrors: nameInputHasError, 
    valueChangeHandler:  nameChangeHandler, 
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    } 

  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value); 
  // };

  // const nameInputBlurHandler = event => {
  //   setEnteredNameTouched(true);  
  // };

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value); 
  };

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);  
  };

  const formSubmitionHandler = event => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    // setEnteredName('');
    // setEnteredNameTouched(false);

    resetNameInput();

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError 
    ? 'form-control invalid' 
    : 'form-control';

  const emailInputClasses = emailInputIsInvalid // enteredEmailIsInvalid 
    ? 'form-control invalid' 
    : 'form-control';

  return (
    <form onSubmit={formSubmitionHandler}>
      {/*  */}
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      {/*  */}
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      {/*  */}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
