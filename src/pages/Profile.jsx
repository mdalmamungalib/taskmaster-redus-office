import React, { useState } from "react";
import { FaSave, FaTimes, FaUserEdit } from "react-icons/fa";
import { IoMdCamera } from "react-icons/io";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [bio, setBio] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-page bg-gray-50 p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
              <img
                src={profileImage || "https://via.placeholder.com/150"}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <label
              htmlFor="profileImage"
              className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white cursor-pointer"
            >
              <IoMdCamera size={24} />
            </label>
            <input
              type="file"
              id="profileImage"
              className="hidden"
              accept="image/*"
              onChange={handleProfileImageChange}
            />
          </div>
        </div>

        {/* Editable Profile Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Profile Settings</h2>

          {/* Name */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="bio" className="text-gray-700 font-medium">
              Bio
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              disabled={!isEditing}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all"
              rows="4"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
              >
                <FaSave size={18} />
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg flex items-center gap-2 hover:bg-gray-400"
              >
                <FaTimes size={18} />
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2 hover:bg-green-600"
            >
              <FaUserEdit size={18} />
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
