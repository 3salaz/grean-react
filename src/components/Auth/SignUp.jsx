import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, createUserDocument} from "../../firebase";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const SignUp = (e) => {
        e.preventDefault();
        const {user} = createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                createUserDocument(user, {userName} );
            })
            .catch((error) => {
                console.log(error);
            })
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={SignUp}>
            <h1>Create Account</h1>
            <input type="email" placeholder='please enter your email' 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}>
            </input>
            <input type="password" placeholder='please enter your password' 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}>
            </input>
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default SignUp