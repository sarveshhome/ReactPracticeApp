import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser  from './Users/AddUser';
import UserList from './Users/UserList';
function App() {
  const [usersList,setUsersList] = useState([]);
  
  const addUserHandler = (uName,uAge) => {
      setUsersList((preUsersList)=>{
          return [...preUsersList,{name:uName,age:uAge,id:Math.random().toString()}];
      });
  };

  return (    
      <div className="App">
        <AddUser onAddUser={addUserHandler}/>
        <UserList users={usersList}/>
      </div>
  );
}

export default App;
