import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import auth from '../firebase';
const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=> {
        // const unsubscribe = auth.onAuthStateChanged((currentUser) => {
        //     setUser(currentUser);
        // })
        // return () => unsubscribe();
    },[]);
    return (
        <UserContext.Provider value={{createUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}