import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { toast } from "react-toastify";

const AccountForm = () => {
  const { user } = UserAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    usersEmail: user.email,
    businessEmail: "",
    isBusiness: false,
    businessName: "",
    businessAddress: "",
    website: "",
    description: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0); // Initialize reload key

  useEffect(() => {
    const fetchData = async () => {
      const profileRef = doc(db, "profiles", user.uid);
      const locationRef = doc(db, "locations", user.uid);

      const profileDoc = await getDoc(profileRef);
      if (profileDoc.exists()) {
        const data = profileDoc.data();
        setFormData(data);
      }

      const locationDoc = await getDoc(locationRef);
      if (locationDoc.exists()) {
        const data = locationDoc.data();
        setFormData((prevData) => ({
          ...prevData,
          ...data,
        }));
      }
    };
    fetchData();
  }, [user, reloadKey]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "email" && !isValidEmail(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    // Update form data if validation passes
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear the error message if validation passes
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileRef = doc(db, "profiles", user.uid);
    const locationRef = doc(db, "locations", user.uid);

    try {
      await setDoc(profileRef, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        userEmail: user.email,
        isBusiness: formData.isBusiness,
      });

      if (formData.isBusiness) {
        await setDoc(locationRef, {
          businessName: formData.businessName,
          businessAddress: formData.businessAddress,
          website: formData.website,
          description: formData.description,
          businessEmail: formData.businessEmail,
        });
      }
      toast.success("Profile saved successfully!");
      handleEdit();
      setReloadKey((prevKey) => prevKey + 1); // Remount Component
      // window.location.reload(); // Reload the page
    } catch (error) {
      setError("Error saving profile: " + error.message);
      toast.error("Error saving profile: " + error.message);
      console.error("Error saving profile: ", error);
    }
  };

  const handleEdit = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };
  console.log(editMode);

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  console.log(error);

  return (
    <form
      className='container mx-auto rounded-lg flex flex-col gap-4'
    >
      <div className={`flex flex-col overflow-y-scroll h-[28rem] max-h-[29rem] px-2 no-scroll no-scroll::-webkit-scrollbar py-6
        ${editMode ? "bg-light-grean py-4 rounded-md" : "bg-white"}
      `}>
        {/* Personal Details */}

        {editMode ? <div className="text-3xl text-center">Edit Mode</div> : <div className="text-3xl invisible">Locked Mode</div>}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          {/* First Name */}
          <div className="flex items-center flex-col md:flex-row col-span-2 gap-2">
            <label
              htmlFor="firstName"
              className="block text-gray-700 basis-2/6"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              readOnly={!editMode}
              onChange={handleChange}
              required
              className={`px-4 py-2  border  w-[80%] md:basis-4/6 rounded-md focus:outline-none focus:border-blue-500 text-center ${
                editMode
                  ? "bg-slate-100 border-slate-200"
                  : "bg-slate-200 border-grean font-bold"
              }`} // Toggle class name based on editMode
            />
          </div>
          {/* Last Name */}
          <div className="flex items-center flex-col md:flex-row col-span-2  gap-2">
            <label htmlFor="lastName" className="block text-gray-700 basis-2/6">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              readOnly={!editMode}
              onChange={handleChange}
              required
              className={`px-4 py-2  border  w-[80%] md:basis-4/6 rounded-md focus:outline-none focus:border-blue-500 text-center ${
                editMode
                  ? "bg-slate-100 border-slate-200"
                  : "bg-slate-200 border-grean font-bold"
              }`} // Toggle class name based on editMode
            />
          </div>
          {/* Business Check */}
          <div className="flex justify-center flex-col md:flex-row md:justify-start items-center col-span-2 gap-2">
            <label htmlFor="isBusiness" className="block text-gray-700">
              Are you a business?
            </label>
            <input
              id="isBusiness"
              type="checkbox"
              name="isBusiness"
              checked={formData.isBusiness}
              readOnly={!editMode}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Business Info */}
        {formData.isBusiness && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            <div className="flex items-center flex-col md:flex-row col-span-2 gap-2">
              <label
                htmlFor="businessName"
                className="block text-gray-700 basis-2/6"
              >
                Business Name:
              </label>
              <input
                id="businessName"
                type="text"
                name="businessName"
                value={formData.businessName}
                readOnly={!editMode}
                onChange={handleChange}
                required
                className={`px-4 py-2  border  w-[80%] md:basis-4/6 rounded-md focus:outline-none focus:border-blue-500 text-center ${
                editMode
                  ? "bg-slate-100 border-slate-200"
                  : "bg-slate-200 border-grean font-bold"
              }`} // Toggle class name based on editMode
              />
            </div>
            <div className="flex items-center flex-col md:flex-row col-span-2 gap-2">
              <label
                htmlFor="businessAddress"
                className="block text-gray-700 basis-2/6"
              >
                Business Address:
              </label>
              <input
                id="businessAddress"
                type="text"
                name="businessAddress"
                value={formData.businessAddress}
                readOnly={!editMode}
                onChange={handleChange}
                required
                className={`px-4 py-2  border  w-[80%] md:basis-4/6 rounded-md focus:outline-none focus:border-blue-500 text-center ${
                editMode
                  ? "bg-slate-100 border-slate-200"
                  : "bg-slate-200 border-grean font-bold"
              }`} // Toggle class name based on editMode
              />
            </div>
            {/* Email Address */}
            <div className="flex items-center flex-col md:flex-row col-span-2  gap-2">
              <label
                htmlFor="lastName"
                className="block text-gray-700 basis-2/6"
              >
                Email
              </label>
              <input
                id="businessEmail"
                type="email"
                name="businessEmail"
                placeholder="email@something.com"
                readOnly={!editMode} // Set readOnly based on editMode
                value={formData.businessEmail}
                onChange={handleChange}
                required
                className=" px-4 py-2 bg-slate-100 border border-slate-300 w-[80%] md:basis-4/6 rounded-md focus:outline-none focus:border-blue-500 text-center"
              />
            </div>
            {/* Website */}
            <div className="flex items-center flex-col md:flex-row col-span-2 gap-2">
              <label
                htmlFor="website"
                className="block text-gray-700 basis-2/6"
              >
                Website:
              </label>
              <input
                id="website"
                type="url"
                name="website"
                value={formData.website}
                readOnly={!editMode}
                onChange={handleChange}
                className={`px-4 py-2  border  w-[80%] md:basis-4/6 rounded-md focus:outline-none focus:border-blue-500 text-center ${
                editMode
                  ? "bg-slate-100 border-slate-200"
                  : "bg-slate-200 border-grean font-bold"
              }`} // Toggle class name based on editMode
              />
            </div>
            {/* Description */}
            <div className="flex items-center flex-col md:flex-row col-span-2 gap-2">
              <label
                htmlFor="description"
                className="block text-gray-700 basis-2/6"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                readOnly={!editMode}
                onChange={handleChange}
                className={`px-4 py-2  border  w-[80%] md:basis-4/6 rounded-md focus:outline-none focus:border-blue-500 text-center ${
                editMode
                  ? "bg-slate-100 border-slate-200"
                  : "bg-slate-200 border-grean font-bold"
              }`} // Toggle class name based on editMode
              ></textarea>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center">
        <div className="w-2/3 flex items-center gap-4">
          {editMode ? (

<button
type="button"
onClick={handleSubmit}
className="w-full order-last px-4 py-2 bg-grean text-white rounded-md focus:outline-none focus:bg-grean"
>
Save
</button>

          ) : (
            <button
              type="button"
              onClick={handleEdit}
              className="w-full order-last px-4 py-2 bg-blue-500  text-white rounded-md  focus:outline-none focus:bg-blue-500"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default AccountForm;
