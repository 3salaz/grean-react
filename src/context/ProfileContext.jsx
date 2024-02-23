import { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { UserAuth } from './AuthContext'; // Adjust the import path as needed
import { db } from '../firebase';

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const { user } = UserAuth();
  const [profile, setProfile] = useState(null);

  // Fetch the profile data
  useEffect(() => {
    const fetchProfile = async () => {
      if (user?.uid) {
        const docRef = doc(db, 'profiles', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile({ id: docSnap.id, ...docSnap.data() });
        }
      }
    };

    fetchProfile();
  }, [user?.uid]);

  // Update profile data
  const updateProfile = async (profileData) => {
    if (user?.uid) {
      const docRef = doc(db, 'profiles', user.uid);
      await setDoc(docRef, profileData);
      setProfile({ ...profileData });
    }
  };

  // Delete profile
  const deleteProfile = async () => {
    if (user?.uid) {
      const docRef = doc(db, 'profiles', user.uid);
      await deleteDoc(docRef);
      setProfile(null);
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, deleteProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};