import { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { motion } from "framer-motion";
import { db } from "../../../firebase";
import { v4 as uuidv4 } from "uuid";
import  mapScreen from "../../../assets/mapScreen.png"
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
import { usePickups } from "../../../context/PickupsContext";

function Pickup({ handleClose }) {
  const { addPickup } = usePickups();
  const [businessAddress, setBusinessAddress] = useState("");
  const [isAddressLoading, setAddressLoading] = useState(true); // State to manage address loading status
  const [formData, setFormData] = useState({
    pickupDate: getCurrentDate(),
    pickupTime: "12:00",
    notes: "",
    businessAddress: "",
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
  // async function addPickup() {
  //   const owner = user ? user.displayName : "unknown";
  //   const ownerUid = user ? user.uid : "unknown";
  //   const ownerEmail = user ? user.email : "unknown";
  //   const ownerImg = user ? user.photoURL : "unknown";
  //   const newPickup = {
  //     ownerUid,
  //     owner,
  //     ownerEmail,
  //     ownerImg,
  //     isOpen: true,
  //     createdAt: serverTimestamp(),
  //     lastUpdate: serverTimestamp(),
  //     id: uuidv4(),
  //     pickupDate: formData.pickupDate,
  //     pickupTime: formData.pickupTime,
  //     notes: formData.notes,
  //     pickupAddress: formData.pickupAddress,
  //   };
  //   try {
  //     const pickupRef = doc(db, "pickups", newPickup.id);
  //     await setDoc(pickupRef, newPickup);
  //     toast.success("Pickup request submitted successfully!");
  //     // Close the modal
  //     handleClose();
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Error submitting pickup request. Please try again.");
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPickup(formData);
    
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

  useEffect(() => {
    async function fetchBusinessAddress() {
      if (user && user.uid) {
        const docRef = doc(db, "locations", user.uid);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setBusinessAddress(docSnap.data().businessAddress);
            console.log(isAddressLoading);
            setAddressLoading(false); // Address fetched, update loading status
          } else {
            console.log("No such document!");
            setAddressLoading(false); // Handle case where document doesn't exist
          }
        } catch (error) {
          console.error("Error fetching document:", error);
          setAddressLoading(false); // Handle error case
        }
      }
    }

    if (user) {
      fetchBusinessAddress();
    }
  }, [user, isAddressLoading]);

  return (
    <div
      id="pickup"
      className="w-full absolute top-0 h-full bg-black bg-opacity-40 z-20 flex justify-center items-center px-4"
    >
      <main className="bg-white max-w-[600px] h-[96%] overflow-auto container rounded-md drop-shadow-2xl flex items-center justify-center">
        <form className="h-full w-full px-4 py-2 flex flex-col justify-between" onSubmit={handleSubmit}>
          <div className="text-center text-3xl font-bold pb-8">Pickup Request</div>
          <div className="flex flex-col gap-4">
              <img className="object-cover h-52 w-full" src={mapScreen}></img>
            <section className="gap-2">

              <label className="flex flex-col font-bold md:w-80">
                Business Address:
                <select
                  name="pickupAddress"
                  value={businessAddress}
                  onChange={handleChange}
                  className="rounded-lg p-2 font-normal"
                >
                  {/* Ensure there's a default option or handling for when businessAddress is not yet fetched */}
                  {businessAddress && (
                    <option value={businessAddress}>{businessAddress}</option>
                  )}
                </select>
              </label>

              <label className="flex flex-col font-bold w-48">
                Date:
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  min={getCurrentDate()}
                  onChange={handleChange}
                  className="text-2xl font-normal"
                />
              </label>

              <label className="flex flex-col font-bold w-48 ">
                Time:
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="text-2xl font-normal"
                />
              </label>

              <label htmlFor="notes" className="block text-lg font-bold leading-6">
                Driver Notes:
              </label>
                <textarea id="note"
                  name="note"
                  rows={3}
                  className="block w-full rounded-md border-0 p-2 text-black shadow-sm ring-1 ring-inset ring-grean placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grean sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
            </section>

            <section className="flex flex-col gap-1 p-8">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-grean text-white px-2 p-1 rounded-md"
                type="submit"
              >
                Submit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-red-500 text-white px-2 p-1 rounded-md"
                onClick={handleClose}
              >
                Close
              </motion.button>
            </section>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Pickup;
