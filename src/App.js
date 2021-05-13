import logo from './logo.svg';
import './App.css';
import AddUser  from './Users/AddUser';
import UserList from './Users/UserList';
function App() {
  return (
    <div className="App">
     <AddUser></AddUser>
     <UserList users={[]}></UserList>
    </div>
  );
}

export default App;
