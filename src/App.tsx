import React from 'react';
import './App.css';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import AuthDetails from './components/Auth/AuthDetails';
import ContactForm from './components/Mailer/ContactForm';

function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
      <ContactForm/>
    </div>
  );
}

export default App;
