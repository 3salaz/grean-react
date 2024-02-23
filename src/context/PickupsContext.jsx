import { createContext, useContext, useState, useEffect } from "react";
import { collection, doc, getDocs, onSnapshot, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase"; // Adjust this import path as necessary
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { UserAuth } from "./AuthContext";

const PickupContext = createContext();

export const usePickups = () => useContext(PickupContext);

export const PickupsProvider = ({ children }) => {
  const [pickups, setPickups] = useState([]);
  const [userPickups, setUserPickups] = useState([]);
  const [userUid, setUserUid] = useState(null);
  const { user } = UserAuth(); // Call UserAuth at the top level
  // Initialize visiblePickups from localStorage or default to empty array
  const [visiblePickups, setVisiblePickups] = useState(() => JSON.parse(localStorage.getItem("visiblePickups")) || []);

  useEffect(() => {
    if (user?.uid) {
      setUserUid(user.uid); // Store user's UID in state
    }
  }, [user?.uid]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "pickups"), (querySnapshot) => {
      const fetchedPickups = [];
      const deletedPickupIds = new Set(JSON.parse(localStorage.getItem("deletedPickupIds") || "[]"));
  
      querySnapshot.forEach((doc) => {
        const pickup = { id: doc.id, ...doc.data() };
        if (!pickup.accepted && !deletedPickupIds.has(pickup.id)) {
          fetchedPickups.push(pickup);
        }
      });
  
      setPickups(fetchedPickups);
      setVisiblePickups(fetchedPickups); // This now only includes pickups that are not accepted
    });
  
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Update localStorage whenever visiblePickups changes
  useEffect(() => {
    localStorage.setItem("visiblePickups", JSON.stringify(visiblePickups));
  }, [visiblePickups]);

  useEffect(() => {
    // Persist userPickups to localStorage whenever it changes
    localStorage.setItem("userPickups", JSON.stringify(userPickups));
  }, [userPickups]);

  const fetchAllPickups = async () => {
    try {
      // Fetch all pickups from the database
      // This is a placeholder, replace with your actual database call
      const querySnapshot = await getDocs(collection(db, "pickups"));
      const allPickups = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
      // Update the state with all fetched pickups
      setVisiblePickups(allPickups);
    } catch (error) {
      console.error("Error fetching pickups: ", error);
      // Handle the error appropriately, perhaps show a notification
    }
  };

  const acceptPickup = async (pickupId) => {
    const pickupRef = doc(db, "pickups", pickupId); // Reference to the pickup document in Firestore
  
    try {
      // Update the pickup document in Firestore
      await updateDoc(pickupRef, {
        accepted: true,
        acceptedBy: userUid, // Set the UID of the user who accepted the pickup
      });
  
      // Proceed with updating local state and localStorage as before
      const pickup = pickups.find((p) => p.id === pickupId);

      if (pickup) {
        const updatedUserPickups = [...userPickups, pickup];
        setUserPickups(updatedUserPickups);
        localStorage.setItem("userPickups", JSON.stringify(updatedUserPickups));
        setVisiblePickups(visiblePickups.filter((p) => p.id !== pickupId));
  
        const deletedPickupIds = new Set(JSON.parse(localStorage.getItem("deletedPickupIds") || "[]"));
        deletedPickupIds.add(pickupId);
        localStorage.setItem("deletedPickupIds", JSON.stringify(Array.from(deletedPickupIds)));
      }
    } catch (error) {
      console.error("Error accepting pickup: ", error);
      // Handle the error appropriately, e.g., show an error message to the user
    }
    
    setVisiblePickups((currentVisiblePickups) =>
    currentVisiblePickups.filter((pickup) => pickup.id !== pickupId)
  );
  }

  const deletePickup = (pickupId) => {
    // Add the deleted pickup ID to a set stored in localStorage
    const deletedPickupIds = new Set(
      JSON.parse(localStorage.getItem("deletedPickupIds") || "[]")
    );
    deletedPickupIds.add(pickupId);
    localStorage.setItem(
      "deletedPickupIds",
      JSON.stringify(Array.from(deletedPickupIds))
    );

    // Update visible pickups
    setVisiblePickups((currentVisiblePickups) =>
      currentVisiblePickups.filter((pickup) => pickup.id !== pickupId)
    );
  };

  const addPickup = async (pickupData) => {
    const newPickupId = uuidv4();
    const newPickupRef = doc(db, "pickups", newPickupId);
    const newPickup = {
      ...pickupData,
      id: newPickupId,
      createdAt: serverTimestamp(),
      lastUpdate: serverTimestamp(),
      isOpen: true,
    };

    try {
      await setDoc(newPickupRef, newPickup);
      toast.success("Pickup request submitted successfully!");
      // Optionally, update local state here if needed
    } catch (error) {
      console.error("Error adding pickup:", error);
      toast.error("Error submitting pickup request. Please try again.");
    }
  };

  return (
    <PickupContext.Provider
      value={{
        pickups,
        visiblePickups,
        userPickups,
        fetchAllPickups,
        deletePickup,
        acceptPickup,
        addPickup,
      }}
    >
      {children}
    </PickupContext.Provider>
  );
};
