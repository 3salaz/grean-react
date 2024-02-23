import { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLocations } from "../../../context/LocationContext";
import { useProfile } from "../../../context/ProfileContext";

const ProfileForm = () => {
  const { user } = UserAuth();
  const { profile, updateProfile } = useProfile();
  const { updateLocation } = useLocations(); // Use updateLocation from LocationsContext
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    driverName: "",
    usersEmail: user.email,
    userRole: "",
    businessName: "",
    businessAddress: "",
    businessWebsite: "",
    businessDescription: "",
    businessEmail: "",
  });

  const locationData = {
    businessName: formData.businessName,
    businessAddress: formData.businessAddress,
    businessDescription: formData.businessDescription || "",
    businessEmail: formData.businessEmail || "",
    businessWebsite: formData.businessWebsite || "",
    // any other location-related data you want to include
  };

  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(profile || {}); // Update formData whenever the profile data changes
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData);

      if (formData.userRole === "Business") {
        await updateLocation(locationData);
      }

      toast.success("Profile saved successfully!");
      navigate("/account");
    } catch (error) {
      toast.error("Error saving profile: " + error.message);
      console.error("Error saving profile: ", error);
    }
  };

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

  const handleEdit = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <form className="container mx-auto h-[80%]  rounded-lg flex flex-col items-center overflow-scroll gap-4">
      <main className="w-full h-full flex flex-col gap-4 overflow-y-scroll  px-2 no-scroll no-scroll::-webkit-scrollbar">
        <section id="profileFormDetails" className="flex flex-col h-[85%] overflow-auto gap-8"
        >
          <div className="bg-light-grey">
            <div className="text-lg font-bold text-gray-dark">Profile</div>
            <div className="text-sm">
              Please fill out the details below to save your details.
            </div>
          </div>
          {/* Profile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* First Name */}
            <div id="firstName"
              className="flex items-center flex-col col-span-2"
            >
                <label className="block text-gray-700" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className={`px-4 py-2 border w-[80%] md:basis-4/6 rounded-md focus:outline-none focus:border-blue-500 text-center
                ${
                  editMode
                    ? "bg-slate-100 border-slate-200"
                    : "bg-slate-200 border-grean"
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

            {/* Last Name */}
            <div id="lastName"
              className="flex items-center flex-col col-span-2"
            >
                <label className="block text-gray-700" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  readOnly={!editMode}
                  onChange={handleChange}
                  required
                  className={`px-4 py-2 border w-[80%] md:basis-4/6 rounded-md focus:outline-none focus:border-blue-500 text-center ${
                    editMode // Toggle className based on editMode
                      ? "bg-slate-100 border-slate-200"
                      : "bg-slate-200 border-grean"
                  }`}
                />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex items-center mr-4">
              <input
                id="driver"
                type="radio"
                name="userRole"
                value="Driver"
                checked={formData.userRole === "Driver"}
                disabled={!editMode}
                onChange={handleChange}
              />
              <label htmlFor="driver" className="ml-2">
                Driver
              </label>
            </div>
            <div className="flex items-center">
              <input
                id=""
                type="radio"
                name="userRole"
                value="Business"
                checked={formData.userRole === "Business"}
                disabled={!editMode}
                onChange={handleChange}
              />
              <label htmlFor="business" className="ml-2">
                Business
              </label>
            </div>
          </div>

          {/* Business Info */}
          {formData.userRole == "Business" && (
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
                <label htmlFor="lastName" className="block text-gray-700">
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
                  className={`px-4 py-2  border  w-[80%] rounded-md focus:outline-none focus:border-blue-500 text-center ${
                    editMode
                      ? "bg-slate-100 border-slate-200"
                      : "bg-slate-200 border-grean font-bold"
                  }`} // Toggle class name based on editMode
                />
              </div>
              {/* Website */}
              <div className="flex items-center flex-col col-span-2">
                <label
                  htmlFor="BusinessWebsite"
                  className="block text-gray-700"
                >
                  Business Website
                </label>
                <input
                  id="businessWebsite"
                  type="url"
                  name="businessWebsite"
                  value={formData.businessWebsite}
                  readOnly={!editMode}
                  onChange={handleChange}
                  className={`px-4 py-2  border  w-[80%] rounded-md focus:outline-none focus:border-blue-500 text-center ${
                    editMode
                      ? "bg-slate-100 border-slate-200"
                      : "bg-slate-200 border-grean font-bold"
                  }`} // Toggle class name based on editMode
                />
              </div>
              {/* Description */}
              <div className="flex items-center flex-col col-span-2">
                <label htmlFor="businessDescription" className="block text-gray-700">
                  Business Description
                </label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  value={formData.businessDescription}
                  readOnly={!editMode}
                  onChange={handleChange}
                  className={`px-4 py-2  border  w-[80%] rounded-md focus:outline-none focus:border-blue-500 text-center ${
                    editMode
                      ? "bg-slate-100 border-slate-200"
                      : "bg-slate-200 border-grean font-bold"
                  }`} // Toggle class name based on editMode
                ></textarea>
              </div>
            </div>
          )}

          {formData.userRole == "Driver" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center flex-col col-span-4">
                <label
                  htmlFor="businessName"
                  className="block text-gray-700 basis-2/6"
                >
                  Drivers Name
                </label>
                <input
                  id="driverName"
                  type="text"
                  name="driverName"
                  value={formData.driverName}
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
            </div>
          )}
        </section>

        <section id="profileFormBtns" className="flex items-start justify-center h-[15%]">
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
                Unlock
              </button>
            )}
          </div>
        </section>

      </main>
    </form>
  );
};

export default ProfileForm;
