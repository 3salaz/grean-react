import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            })
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={signIn}>
            <h1>Login to your account</h1>
            <input type="email" placeholder='please enter your email' 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}>
            </input>
            <input type="password" placeholder='please enter your password' 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}>
            </input>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default SignIn