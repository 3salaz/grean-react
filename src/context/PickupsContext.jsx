import { createContext, useContext, useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"; // Adjust this import path as necessary
import { toast } from "react-toastify";

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

  return (
    <PickupContext.Provider
      value={{
        pickups,
        visiblePickups,
        deletePickup,
        userPickups,
        acceptPickup,
      }}
    >
      {children}
    </PickupContext.Provider>
  );
};
