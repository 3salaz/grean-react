import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase";

function Admin() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const addUserManually = () => {
    const usersRef = collection(db, "users");
    addDoc(usersRef, {
      displayName: displayName,
      email: email,
      phoneNumber: phoneNumber,
    });
  };
  
  return (
    <div className="container mx-auto px-2">
      <div className="bg-red-300 p-4 flex flex-col gap-4">
        <form className="flex flex-col gap-2">
          <label htmlFor="displayName">Display Name</label>
          <input
            className="border-1 border-grean"
            type="text"
            name="display-name"
            onChange={(e) => setDisplayName(e.target.value)}
          ></input>
          <div className="flex flex-col">
            <label htmlFor="buisness-email">Email</label>
            <input
              className="border-1 border-grean"
              type="email"
              text="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumer">Phone Number</label>
            <input
              className="border-1 border-grean"
              type="number"
              placeholder="415-415-1515"
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>

          <button onClick={addUserManually} className="bg-grean px-2">
            Add User Manually
          </button>
        </form>
        <form className="flex flex-col">
          <label htmlFor="id">Document ID:</label>
          <input type="text" name="id" required={true}></input>
          <button>Delete User</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
