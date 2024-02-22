import { createContext, useContext, useState, useEffect } from "react";
import { collection, doc, onSnapshot, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase"; // Adjust this import path as necessary
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const PickupContext = createContext();

export const usePickups = () => useContext(PickupContext);

export const PickupsProvider = ({ children }) => {
  const [pickups, setPickups] = useState([]);
  const [userPickups, setUserPickups] = useState([]);
  // Initialize visiblePickups from localStorage or default to empty array
  const [visiblePickups, setVisiblePickups] = useState(() => {
    const localData = localStorage.getItem("visiblePickups");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "pickups"),
      (querySnapshot) => {
        const fetchedPickups = [];
        const deletedPickupIds = new Set(
          JSON.parse(localStorage.getItem("deletedPickupIds") || "[]")
        );

        querySnapshot.forEach((doc) => {
          fetchedPickups.push({ id: doc.id, ...doc.data() });
        });

        setPickups(fetchedPickups);
        const updatedVisiblePickups = fetchedPickups.filter(
          (pickup) => !deletedPickupIds.has(pickup.id)
        );

        setVisiblePickups(updatedVisiblePickups);
        // Ensure visiblePickups is updated correctly here
      }
    );
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

  const acceptPickup = (pickupId) => {
    const pickup = pickups.find((p) => p.id === pickupId);
    if (pickup) {
      const updatedUserPickups = [...userPickups, pickup];
      setUserPickups(updatedUserPickups);
      localStorage.setItem("userPickups", JSON.stringify(updatedUserPickups));
      setVisiblePickups(visiblePickups.filter((p) => p.id !== pickupId));
      // Remove the accepted pickup from visible pickups
      const deletedPickupIds = new Set(
        JSON.parse(localStorage.getItem("deletedPickupIds") || "[]")
      );
      deletedPickupIds.add(pickupId);
      localStorage.setItem(
        "deletedPickupIds",
        JSON.stringify(Array.from(deletedPickupIds))
      );
    }
  };

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
        deletePickup,
        acceptPickup,
        addPickup,
      }}
    >
      {children}
    </PickupContext.Provider>
  );
};
