import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyAAp7X6MMLfJtAnsdZJTDgWD6n7z_zpjZY",
  authDomain: "grean-de04f.firebaseapp.com",
  databaseURL: "https://grean-de04f-default-rtdb.firebaseio.com",
  projectId: "grean-de04f",
  storageBucket: "grean-de04f.appspot.com",
  messagingSenderId: "881625022209",
  appId: "1:881625022209:web:fc7fed7164fbbf7925a500",
  measurementId: "G-6N4REHK39G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const createUserDocument = async (user, additionData) => {
  if(!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const {email} = user;
    const {userName} = additionData;

    try{
      userRef.set({
        userName,
        email,
        createdAt: new Date(),
      })
    } catch(error){
      console.log(error);
    }
  }
}