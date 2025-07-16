  "use client"
import React from 'react'
import { useState } from "react";
import Link from 'next/link';
import { FaTwitter } from "react-icons/fa"; 
import { SignInButton } from '@clerk/nextjs'

 const page = () => {
     const [formData, setFormData] = useState({
         email: "",
         password: "",
         
         
       });
       const [errors, setErrors] = useState({});
       const [showPassword, setShowPassword] = useState(false);
       const [showConfirm, setShowConfirm] = useState(false);
     
       const validate = () => {
         const newErrors = {};
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     
         if (!emailRegex.test(formData.email)) {
           newErrors.email = "Please enter a valid email.";
         }
     
         if (formData.password.length < 4) {
           newErrors.password = "Password must be at least 4 characters.";
         }
     
         if (formData.password !== formData.confirm) {
           newErrors.confirm = "Passwords do not match.";
         }
     
         setErrors(newErrors);
         return Object.keys(newErrors).length === 0;
       };
     
       const handleSubmit = (e) => {
         e.preventDefault();
         if (validate()) {
           alert("Sign up successful!");
           // Add your signup logic (e.g., send data to backend) here.
         }
       };
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/login-bg.jpg')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg shadow-xl p-10 rounded-2xl w-full max-w-md border border-white/30">
               <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-black"><FaTwitter size={28} className='text-[#1DA1F2]'/>Sign in</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm text-black">Name</label>
            <input
              name="username"
              type="text"
              placeholder="wisely cute"
              className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            />
            {errors.username && <p className="text-sm text-red-600 mt-1">{errors.username}</p>}
          </div>
           <div>
            <label className="block mb-1 text-sm text-black">Email</label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="user@email.com"
              className={`w-full px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border ${
                errors.email ? "border-red-500" : "border-white/40"
              } focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm text-black">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`w-full px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border ${
                  errors.password ? "border-red-500" : "border-white/40"
                } focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

         

          <button
            type="submit"
            className="w-full bg-[#1DA1F2] hover:bg-purple-600 transition text-white py-2 rounded-md font-medium"
          >
            Sign in
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-4">
          SingUp to create account?{" "}
          <Link href="/singup" className="text-[#1DA1F2] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
