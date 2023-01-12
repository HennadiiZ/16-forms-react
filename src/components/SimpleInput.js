// import { useState, useEffect } from 'react';
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

  const { 
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasErrors: emailInputHasError, 
    valueChangeHandler:  emailChangeHandler, 
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    } 

  // const emailInputChangeHandler = event => {
  //   setEnteredEmail(event.target.value); 
  // };
  // const emailInputBlurHandler = event => {
  //   setEnteredEmailTouched(true);  
  // };

  const formSubmitionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();

    // setEnteredEmail('');
    // setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError 
    ? 'form-control invalid' 
    : 'form-control';

  const emailInputClasses = emailInputHasError 
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
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
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
