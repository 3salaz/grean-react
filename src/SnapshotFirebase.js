import { useEffect, useState } from "react";
import { QuerySnapshot, Timestamp, collection, onSnapshot, query, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { UserAuth } from "./context/AuthContext";

const collectionRef = collection(db,'pickups')
const {user} = UserAuth();
const currentUserId = user ? user.uid : null
const [pickups, setPickups] = useState([])
const [isOpen, setIsOpen] = useState(false);
const [address, setAddress] = useState('')
const [date, setDate] = useState('');
const [note, setNote] = useState('')

useEffect(() => {
    const q = query(
        collectionRef,
    )
    const unsub = onSnapshot(collectionRef,(querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        setPickups(items);
    })


    return () => {
        unsub();
    }
    
})
// Crud Pickup Requests

// Create
async function addPickup() {
    const owner = user ? user.uid : 'unknown';
    const ownerEmail = user ? user.email : 'unknown'
    const newPickup = {
        owner,
        ownerEmail,
        createdAt: serverTimestamp(),
        lastUpdate: serverTimestamp(),
    }
    try{
        const pickupRef = doc(collectionRef, newPickup.id);
        await setDoc(pickupRef, newPickup);
    } catch (error) {
        console.log(error);
    }
}

