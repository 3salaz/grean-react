import React, { useState } from "react";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isBusiness: false,
    businessName: "",
    businessAddress: "",
    website: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileRef = doc(db, "profiles", user.uid);
    const locationRef = doc(db, "locations", user.uid);

    try {
      // Check if profile document already exists
      const profileDoc = await getDoc(profileRef);

      if (profileDoc.exists()) {
        // If document exists, update it
        await updateDoc(profileRef, formData);
        console.log("Profile successfully updated!");
      } else {
        // If document doesn't exist, create it
        await setDoc(profileRef, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            isBusiness: formData.isBusiness
        });
        console.log("Profile successfully created!");
      }

      // Add business address to locations collection if it's a business
      if (formData.isBusiness) {
        const locationDoc = await getDoc(locationRef);
        if (locationDoc.exists()) {
          // If document exists, update it
          await updateDoc(locationRef, {
            businessAddress: formData.businessAddress,
            businessName: formData.businessName,
            website: formData.website,
            description: formData.description,
          });
          console.log("Location successfully updated!");
        } else {
          // If document doesn't exist, create it
          await setDoc(locationRef, {
            businessAddress: formData.businessAddress,
            businessName: formData.businessName,
            website: formData.website,
            description: formData.description,
          });
          console.log("Location successfully created!");
        }
      }
    } catch (error) {
      console.error("Error creating/updating profile: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Are you a business?
        <input
          type="checkbox"
          name="isBusiness"
          checked={formData.isBusiness}
          onChange={handleChange}
        />
      </label>
      {formData.isBusiness && (
        <>
          <label>
            Business Name:
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Business Address:
            <input
              type="text"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Website:
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </label>
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
