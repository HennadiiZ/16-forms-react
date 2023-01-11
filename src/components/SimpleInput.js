import { useRef, useState, useEffect } from 'react';

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);


  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log('Name input is valid!');
  //   }
  // }, [enteredNameIsValid]);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);

    // if (event.target.value.trim() !== '') {
    //   setEnteredNameIsValid(true);
    // }  
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);

    // if (enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    // }  
  };

  const formSubmitionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      // setEnteredNameIsValid(false);
      return;
    }

    // setEnteredNameIsValid(true);

    // console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid 
    ? 'form-control invalid' 
    : 'form-control';

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
