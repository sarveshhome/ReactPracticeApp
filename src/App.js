import React,{Fragment, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser  from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
  const [usersList,setUsersList] = useState([]);
  
  const addUserHandler = (uName,uAge) => {
      setUsersList((preUsersList)=>{
          return [...preUsersList,{name:uName,age:uAge,id:Math.random().toString()}];
      });
  };

  return (  
      /**Fragment  <>  </> or <Fragment></Fragment>   */  
      <Fragment>
        <AddUser onAddUser={addUserHandler}/>
        <UserList users={usersList}/>
      </Fragment>
  );
}

export default App;
