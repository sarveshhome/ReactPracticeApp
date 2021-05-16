import React, { useState,useRef } from 'react';
import Wrapper from '../Helper/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel';
import cssclass from './AddUser.module.css';


const AddUser =(props)=> {

const nameInputRef = useRef();
const ageInputRef = useRef();
//State
const[enteredUsername, setEnteredUsername] = useState('');
const[enteredAge, setEnteredAge] = useState('');
const[error,setError] = useState('');
const addUserHandle = (event) => {  
    
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
    
    const inputName = nameInputRef.current.value;
    const inputAge =ageInputRef.current.value;
    if (inputName.trim().length === 0 || inputName.trim().length === 0) {
        setError({
            title:'Invalid input',
            message:'Please enter a valid name and age'
        });
        return;
      }
      if (+inputAge < 1) {
          setError({
              title:'Invalid age',
              message:'Please enter a valid age(>0)'
          });
        return;
      }
      props.onAddUser(inputName,inputAge);
      nameInputRef.current.value ='';
      ageInputRef.current.value ='';

    event.preventDefault();
    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    //     setError({
    //         title:'Invalid input',
    //         message:'Please enter a valid name and age'
    //     });
    //     return;
    //   }
    //   if (+enteredAge < 1) {
    //       setError({
    //           title:'Invalid age',
    //           message:'Please enter a valid age(>0)'
    //       });
    //     return;
    //   }
    // console.log(enteredUsername,enteredAge);
    // props.onAddUser(enteredUsername,enteredAge);
    // setEnteredUsername('');
    // setEnteredAge('');
}

const usernameChangeHandler =(event)=>{

    setEnteredUsername(event.target.value);
}
const ageChangeHandler =(event)=>{
    setEnteredAge(event.target.value);
};

const errorHandler =() =>{
    setError(null);
};

    return(
            <Wrapper>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={cssclass.input}>
                <form onSubmit={addUserHandle}>
                    <label htmlFor="username">UserName</label>
                    <input type="input" name="username" id="username" 
                    // value={enteredUsername} 
                    // onChange={usernameChangeHandler}
                    ref={nameInputRef}
                    ></input>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" 
                    // value={enteredAge}
                    //  onChange={ageChangeHandler}
                    ref={ageInputRef}></input>
                    <Button type="submit" name="submit">Add User</Button>
                </form>
            </Card>
            </Wrapper>
        )
        };

export default AddUser;