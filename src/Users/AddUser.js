import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import cssclass from './AddUser.module.css';


const AddUser =(props)=> {

//State
const[enteredUsername, setEnteredUsername] = useState('');
const[enteredAge, setEnteredAge] = useState('');

const addUserHandle = (event) => {
    console.log(enteredUsername,enteredAge);
    event.preventDefault();
    console.log(enteredUsername,enteredAge);
    
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
                <input type="input" name="username" id="username" onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" onChange={ageChangeHandler}></input>
                <Button type="submit" name="submit">Add User</Button>
            </form>
        </Card>
    )
        };

export default AddUser;