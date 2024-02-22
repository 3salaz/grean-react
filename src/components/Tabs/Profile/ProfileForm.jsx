import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
import { db } from "../../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
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
  const navigate = useNavigate();

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
      navigate("/account")
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

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  console.log(error);

  return (
    <form className="container mx-auto rounded-lg flex flex-col items-center overflow-scroll gap-4">
      <main
        className={`flex flex-col gap-8 overflow-y-scroll  px-2 no-scroll no-scroll::-webkit-scrollbar
          ${editMode ? "rounded-md" : " bg-white"}
        `}
      >
        <section id="profileFormDetails" className="flex flex-col flex-wrap gap-1">
          <div className="bg-light-grey">
            <div className="text-lg font-bold text-gray-dark">Profile</div>
            <div className="text-sm">Please fill out the details below to save your details.</div>
          </div>

          <div className="flex items-center justify-center flex-row flex-wrap">
            {/* First Name */}
            <div id="firstName" className="basis-full md:basis-1/2">
              <div className="px-4">
              <label className="block text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 
                ${
                  editMode
                    ? "bg-slate-100 border-slate-200"
                    : "bg-slate-200 border-grean font-bold"
                }
              `}
                type="text"
                name="firstName"
                value={formData.firstName}
                readOnly={!editMode}
                onChange={handleChange}
                required
              />
              </div>
            </div>

            {/* Last Name */}
            <div id="lastName" className="basis-full md:basis-1/2">
              <div className="px-4">
              <label className="block text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input type="text"
                name="lastName"
                value={formData.lastName}
                readOnly={!editMode}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 pl-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                  editMode
                    ? "bg-slate-100 border-slate-200"
                    : "bg-slate-200 border-grean font-bold"
                }`} // Toggle class name based on editMode
              />
              </div>

            </div>
          </div>



          {/* Business Check
          <div className="flex justify-center flex-col col-span-4 items-center">
            <label htmlFor="isBusiness" className="block text-gray-700">
              Are you a business?
            </label>
            <input
              id="isBusiness"
              type="checkbox"
              name="isBusiness"
              checked={formData.isBusiness}
              disabled={!editMode}
              onChange={handleChange}
            />
          </div> */}


          {/* Business Info */}
          {formData.isBusiness && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center flex-col col-span-2">
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
                  className={`px-4 py-2 border w-[80%] md:basis-4/6 rounded-md focus:outline-none focus:border-blue-500 text-center 
                ${
                  editMode
                    ? "bg-slate-100 border-slate-200"
                    : "bg-slate-200 border-grean font-bold"
                }`} // Toggle class name based on editMode
                />
              </div>
              <div className="flex items-center flex-col col-span-2">
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
              <div className="flex items-center flex-col col-span-2">
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
                  className={`px-4 py-2  border  w-[80%] md:basis-4/6 rounded-md focus:outline-none focus:border-blue-500 text-center ${
                    editMode
                      ? "bg-slate-100 border-slate-200"
                      : "bg-slate-200 border-grean font-bold"
                  }`} // Toggle class name based on editMode
                />
              </div>
              {/* Website */}
              <div className="flex items-center flex-col col-span-2">
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
              <div className="flex items-center flex-col col-span-2">
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
        </section>

        <section
          id="profileFormBtns"
          className="flex items-center justify-center"
        >
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
        </section>
      </main>
    </form>
  );
};

export default ProfileForm;
