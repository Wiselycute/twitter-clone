"use client"
import React, { useState, useRef } from "react";
import Link from 'next/link'; 
import { FaCamera } from "react-icons/fa"; // camera icon
import { FaArrowLeft } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";

const page = () => {
  const [formData, setFormData] = useState({
    name: "Jerome Bell",
    username: "afonsoincenter",
    bio: "Product Designer",
    location: "london",
  });

  const [profileImage, setProfileImage] = useState("/profile1.png"); // default image
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleUpdate = () => {
  const updatedData = { ...formData, profileImage };
  localStorage.setItem("profileData", JSON.stringify(updatedData));
  // Redirect to profile page
  window.location.href = "/profile";
};


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
      // You can also upload the file to the server here
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

 


  return (
    <div className="min-h-screen  bg-background flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-primary  px-4 flex items-center py-11 justify-between">
        <Link href="/profile" className="text-white text-xl"><FaArrowLeft size={25}/></Link>
        <h1 className="text-white font-semibold text-lg">Edit Profile</h1>
        <p className="text-white "><IoShareSocialSharp size={25}/></p>
      </div>

      {/* Profile Image with Upload Icon */}
      <div className="relative flex flex-col items-center mt-[-40px] mb-4">
        <img
          src={profileImage}
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-white object-cover"
        />
        <div
          onClick={triggerFileSelect}
          className="absolute bottom-2 right-12 bg-black p-2 rounded-full cursor-pointer hover:bg-opacity-80"
        >
          <FaCamera className="text-white text-sm" />
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />
        <button className="text-sm text-gray-600 mt-2">Change Picture</button>
      </div>

      {/* Form */}
      <div className="w-full max-w-md px-6">
        <label className="block text-sm font-medium  mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border text-gray-500 border-gray-300 rounded-md"
        />

        <label className="block text-sm font-medium  mb-1">User name</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border text-gray-500 border-gray-300 rounded-md"
        />

        <label className="block text-sm font-medium  mb-1">Bio</label>
        <input
          type="text"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border text-gray-500 border-gray-300 rounded-md"
        />

        <label className="block text-sm font-medium  mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border text-gray-500 border-gray-300 rounded-md"
        />

        <button
          onClick={handleUpdate}
          className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default page;