"use client"
import React from 'react'
import Image from "next/image";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from "react-icons/fa";



const SidebarItem = ({ icon: Icon, text, active }) => {
  return (
    <div className={`sidebar-icon ${active ? "font-bold" : ""} text-xl flex items-center gap-4 mb-4 p-2 rounded-full hover:bg-gray-100 cursor-pointer`}>
      <Icon className="text-xl" />
      <span className="hidden md:inline">{text}</span>
    </div>
  );
};

export default function SidebarComponent() {
  return (
      
        <div className="flex flex-col h-screen p-2 md:p-4 border-r border-gray-200">
      <div className="mb-4 p-2">
        <Image src="/twitter-logo.svg" alt="Twitter Logo" width={30} height={30} className="text-twitter-blue" />
      </div>
      
      <nav className="flex-1">
        <SidebarItem icon={FaHome} text="Home" active={true} />
        <SidebarItem icon={FaHashtag} text="Explore" />
        <SidebarItem icon={FaBell} text="Notifications" />
        <SidebarItem icon={FaEnvelope} text="Messages" />
        <SidebarItem icon={FaBookmark} text="Bookmarks" />
        <SidebarItem icon={FaList} text="Lists" />
        <SidebarItem icon={FaUser} text="Profile" />
        <SidebarItem icon={FaEllipsisH} text="More" />
      </nav>
      
      <button className="tweet-button w-full py-3 mt-4">
        <span className="hidden md:inline">Tweet</span>
        <span className="inline md:hidden">+</span>
      </button>
      
      <div className="mt-auto flex items-center p-3 rounded-full hover:bg-gray-100 cursor-pointer">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <Image src="/user-avatar.png" alt="User Avatar" width={40} height={40} />
        </div>
        <div className="ml-3 hidden md:block">
          <p className="font-bold text-sm">Jerome Bell</p>
          <p className="text-gray-500 text-sm">@afonsoinocente</p>
        </div>
      </div>
    </div>
  );
}
