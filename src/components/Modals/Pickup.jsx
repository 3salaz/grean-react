import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Pickup({ handleClose }) {
  const [businessAddress, setBusinessAddress] = useState("");
  const [formData, setFormData] = useState({
    pickupDate: getCurrentDate(),
    pickupTime: "12:00",
    notes: "",
    businessAddress,
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const collectionRef = collection(db, "pickups");
  const { user } = UserAuth();
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collectionRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() }); // Include document id
      });
      setPickups(items);
    });

    return () => {
      unsub();
    };
  }); // Dependency array is empty to run the effect only once after component mounts
  // Crud Pickup Requests
  // Create
  async function addPickup() {
    const owner = user ? user.displayName : "unknown";
    const ownerUid = user ? user.uid : "unknown";
    const ownerEmail = user ? user.email : "unknown";
    const ownerImg = user ? user.photoURL : "unknown";
    const newPickup = {
      ownerUid,
      owner,
      ownerEmail,
      ownerImg,
      isOpen: true,
      createdAt: serverTimestamp(),
      lastUpdate: serverTimestamp(),
      id: uuidv4(),
      pickupDate: formData.pickupDate,
      pickupTime: formData.pickupTime,
      notes: formData.notes,
      pickupAddress: formData.pickupAddress,
    };
    try {
      const pickupRef = doc(db, "pickups", newPickup.id);
      await setDoc(pickupRef, newPickup);
      toast.success("Pickup request submitted successfully!");
      // Close the modal
      handleClose();
    } catch (error) {
      console.log(error);
      toast.error("Error submitting pickup request. Please try again.");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPickup();
    console.log(pickups);
  };

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let day = now.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    return `${year}-${month}-${day}`;
  }
  const fetchBusinessAddress = async () => {
    if (user && user.uid) {
      // Check if user exists and has a uid
      const docRef = doc(db, "locations", user.uid); // Reference to the user-specific document
      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Document found, extract the businessAddress
          const businessAddress = docSnap.data().businessAddress;
          console.log("Business Address:", businessAddress);
          return businessAddress;
        } else {
          // No such document
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    }
  };
  useEffect(() => {
    if (user) {
      // Only fetch if user is logged in
      fetchBusinessAddress().then((address) => {
        // Do something with the address, maybe set state
        setBusinessAddress(address); // Assuming you have a state variable to hold this
      });
    }
  }, [user]);

  return (
    <div
      id="requestPickupModal"
      className="w-full  absolute top-0 h-full bg-black bg-opacity-90 px-2 z-20 flex justify-center items-center"
    >
      <main className="bg-white max-w-[650px] min-h-[500px] container rounded-md drop-shadow-2xl flex items-center justify-center border-t-grean border-t-8">
        <form className="text-center" onSubmit={handleSubmit}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-500 flex text-white p-2 rounded-md justify-center text-center items-center absolute top-5 right-5"
            onClick={handleClose}
          >
            Close
          </motion.button>
          <div className="flex flex-col">
            <label>
              Address:
              <select
                name="pickupAddress"
                value={businessAddress}
                onChange={handleChange}
                className="rounded-lg px-2 bg-grean text-white"
              >
                {/* Ensure there's a default option or handling for when businessAddress is not yet fetched */}
                {businessAddress && (
                  <option value={businessAddress}>{businessAddress}</option>
                )}
              </select>
            </label>
            <label>
              Date:
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                min={getCurrentDate()}
                onChange={handleChange}
              />
            </label>
            <label>
              Time:
              <input
                type="time"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
              />
            </label>
            <label>
              Description:
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Enter any notes here for the driver"
              />
            </label>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-grean text-white px-2 p-1 rounded-md"
              type="submit"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Pickup;
