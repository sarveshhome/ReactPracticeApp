import React from 'react';

const AddUser =(props)=> {

const addUserHandle = (event) => {
    event.preventDefault();
}


    return(
        <form onSubmit={addUserHandle}>
            <label htmlFor="username">UserName</label>
            <input type="input" name="username" id="username"></input>
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age"></input>
            <button id="btnSubmit" name="btnSubmit">Add User</button>
        </form>
    )
        };

export default AddUser;