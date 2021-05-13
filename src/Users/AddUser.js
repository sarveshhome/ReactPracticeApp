import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import cssclass from './AddUser.module.css';


const AddUser =(props)=> {

//State
const[enteredUsername, setEnteredUsername] = useState('');
const[enteredAge, setEnteredAge] = useState('');

const addUserHandle = (event) => {    
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        return;
      }
      if (+enteredAge < 1) {
        return;
      }
    console.log(enteredUsername,enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
}

const usernameChangeHandler =(event)=>{

    setEnteredUsername(event.target.value);
}
const ageChangeHandler =(event)=>{
    setEnteredAge(event.target.value);
}

    return(
        <Card className={cssclass.input}>
            <form onSubmit={addUserHandle}>
                <label htmlFor="username">UserName</label>
                <input type="input" name="username" id="username" value={enteredUsername} onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" value={enteredAge} onChange={ageChangeHandler}></input>
                <Button type="submit" name="submit">Add User</Button>
            </form>
        </Card>
    )
        };

export default AddUser;