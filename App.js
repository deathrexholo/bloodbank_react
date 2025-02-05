import React from 'react';
import UserForm from './components/userForm';
import UserList from './components/userList';

function App() {
  return (
    <div>
      <h1>Blood Donation App</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;