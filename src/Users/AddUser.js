import React from 'react';
import Card from '../UI/Card';
import cssclass from './AddUser.module.css';
const AddUser =(props)=> {

const addUserHandle = (event) => {
    event.preventDefault();
}


    return(
        <Card className={cssclass.input}>
            <form onSubmit={addUserHandle}>
                <label htmlFor="username">UserName</label>
                <input type="input" name="username" id="username"></input>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age"></input>
                <button id="btnSubmit" name="btnSubmit">Add User</button>
            </form>
        </Card>
    )
        };

export default AddUser;