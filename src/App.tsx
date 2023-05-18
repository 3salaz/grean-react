import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import AuthDetails from './components/Auth/AuthDetails';

function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
    </div>
  );
}

export default App;
