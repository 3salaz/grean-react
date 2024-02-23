import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Import your Firestore instance
import { UserAuth } from './AuthContext';

const LocationsContext = createContext();

export const useLocations = () => useContext(LocationsContext);

export const LocationsProvider = ({ children }) => {
  const { user } = UserAuth();
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const fetchLocations = async () => {
      const querySnapshot = await getDocs(collection(db, 'locations'));
      setLocations(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchLocations();
  }, []);

  const addLocation = async (newLocation) => {
    await addDoc(collection(db, 'locations'), newLocation);
    // Optionally, re-fetch locations here or update the state directly
  };
  
  const updateLocation = async (locationData) => {
    if (user?.uid) {
      const docRef = doc(db, 'locations', user.uid);
  
      // Check if the document exists before deciding between setDoc and updateDoc
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await updateDoc(docRef, locationData);
      } else {
        await setDoc(docRef, locationData);
      }
    }
  };

  const deleteLocation = async (id) => {
    const locationDoc = doc(db, 'locations', id);
    await deleteDoc(locationDoc);
    // Optionally, re-fetch locations here or update the state directly
  };

  return (
    <LocationsContext.Provider value={{ locations, addLocation, updateLocation, deleteLocation }}>
      {children}
    </LocationsContext.Provider>
  );
};