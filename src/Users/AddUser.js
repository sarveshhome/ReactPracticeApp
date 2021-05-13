import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import cssclass from './AddUser.module.css';
const AddUser =(props)=> {

const addUserHandle = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target[0].value);
}


    return(
        <Card className={cssclass.input}>
            <form onSubmit={addUserHandle}>
                <label htmlFor="username">UserName</label>
                <input type="input" name="username" id="username"></input>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age"></input>
                <Button id="btnSubmit" name="btnSubmit">Add User</Button>
            </form>
        </Card>
    )
        };

export default AddUser;