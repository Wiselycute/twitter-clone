import React from 'react';
import { CiBookmark, CiCircleMore, CiHashtag} from "react-icons/ci";
import { FaRegEnvelope } from 'react-icons/fa';
import { IoPersonOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { RiHomeHeartFill } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { PiDeviceRotateFill } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { ModeToggle } from '@/components/sidebar/ModeToggle';
import Link from 'next/link'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


const page =() =>{

   return(
    <div className="flex bg-background min-h-screen font-sans mx-15">

      {/* Left Sidebar */}
      <aside className="w-[250px]  flex flex-col justify-between px-4 py-6">
        <div>
          <div className="text-2xl font-bold text-[#1DA1F2] mb-8">
            <img src="/logo.png" alt="logo" />
          </div>
          <nav className="flex flex-col gap-6 text-[1rem] font-semibold">
            <Link href="/" className="font-semibold text-[#1DA1F2] flex gap-3"> <RiHomeHeartFill size={20} /> Home</Link>
            <a href="#" className='flex gap-3'> <CiHashtag size={20} /> Explore</a>
            <a href="#" className='flex gap-3'> <IoMdNotificationsOutline size={20} />Notifications</a>
            <a href="#" className='flex gap-3'><FaRegEnvelope size={20} />Messages</a>
            <a href="#" className='flex gap-3'><CiBookmark size={20} />Bookmarks</a>
            <a href="#" className='flex gap-3'><CgNotes size={20} />Lists</a>
            <Link href="/profile" className='flex gap-3'><IoPersonOutline size={20} />Profile</Link>
            <a href="#" className='flex gap-3'> <CiCircleMore size={20} />More</a>
            <a href="#" className='flex gap-3'> <ModeToggle />Theme</a>
          </nav>
          <button className="bg-[#1DA1F2] text-white rounded-full mt-6 px-6 py-2 w-full font-semibold">
            Tweet
          </button>
        </div>
        <div className="flex items-center gap-3 mt-6">
          <img src="/profile1.png" className="rounded-full w-10 h-10" alt="Profile" />
          <div>
            <div className="font-semibold text-sm">Jerome Bell</div>
            <div className="text-sm text-gray-500">@afonsoinocente</div>
          </div>
        </div>
      </aside>

      {/* Center Feed */}
      <div className="max-w-xl mx-auto border-x border-secondary min-h-screen">
        <div className='border-b border-secondary flex justify-between items-center p-4'>
      <header className=" font-bold text-xl ">Home</header>
      <div className='flex gap-6'>
      <BsStars size={20} className='text-[#1DA1F2]' />
      <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </div>

      </div>

      {/* What's happening box */}
      <div className="p-4 border-b border-secondary">
        <div className="flex">
          <img
            src="/profile1.png"
            alt="profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <input
            type="text"
            placeholder="What's happening?"
            className="w-full border-none outline-none bg-transparent text-lg"
          />
        </div>
        <div className="flex justify-between mt-3 text-[#1DA1F2] items-center">
          <div className="flex gap-4">
            <CiImageOn size={20} />
            <MdOutlineGifBox size={20} />
            <PiChartBarHorizontalLight size={20} />
            <MdOutlineEmojiEmotions size={20} />
            <LuCalendarClock size={20} />
          </div>
          <button className="bg-[#1DA1F2] text-white px-4 py-1 rounded-full">
            Tweet
          </button>
        </div>
      </div>

      {/* First Tweet */}
      <div className="border-b border-secondary p-4">
        <div className="flex">
          <img
            src="/profile2.png"
            alt="Devon"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="w-full">
            <div className="flex items-center gap-2">
              <span className="font-bold">Devon Lane</span>
              <span className="text-gray-500">@johndue · 23s</span>
            </div>
            <p className="my-2">Tom is in a big hurry.</p>
            <img
              src="/image1.png"
              alt="Tweet media"
              className="rounded-xl w-full max-h-[400px] object-cover"
            />
            <div className="flex justify-between text-gray-500 mt-3 text-sm">
              <div className="flex items-center gap-1">
                <FaRegCommentDots /> 61
              </div>
              <div className="flex items-center gap-1">
                <PiDeviceRotateFill /> 12
              </div>
              <div className="flex items-center gap-1 text-pink-600">
                <MdOutlineFavorite /> 6.2K
              </div>
              <div className="flex items-center gap-1">
                <FiUpload /> 61
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Tweet */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex">
          <img
            src="/profile3.png"
            alt="Darlene"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="w-full">
            <div className="flex items-center gap-2">
              <span className="font-bold">Darlene Robertson</span>
              <span className="text-gray-500">@johndue · 23s</span>
            </div>
            <p className="my-2">Tom is in a big hurry.</p>
            <img
              src="/image2.png"
              alt="Tweet media"
              className="rounded-xl w-full max-h-[400px] object-cover"
            />
            <div className="flex justify-between text-gray-500 mt-3 text-sm">
              <div className="flex items-center gap-1">
                <FaRegCommentDots /> 61
              </div>
              <div className="flex items-center gap-1">
                <PiDeviceRotateFill /> 12
              </div>
              <div className="flex items-center gap-1 text-pink-600">
                <MdOutlineFavorite /> 6.2K
              </div>
              <div className="flex items-center gap-1">
                <FiUpload /> 61
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>

      {/* Right Sidebar */}
      <div className="w-full max-w-xs p-4 space-y-4">
      {/* Search bar */}
      <div className=" bg-background pb-2 sticky top-0 z-10">
        <input
          type="search"
          placeholder="Search Twitter"
          className="w-full p-2 rounded-full bg-secondary focus:outline-none"
        />
      </div>

      {/* What's happening */}
      <div className="bg-secondary rounded-xl p-4 space-y-4">
        <h2 className="font-bold text-lg">What's happening</h2>

        {/* First News Item */}
        <div className="flex justify-between">
          <div className="text-sm">
            <p className="text-gray-500">COVID19 · Last night</p>
            <p className="font-bold text-sm">
              England’s Chief Medical Officer says the UK is at the most
              dangerous time of the pandemic
            </p>
            <p className="text-[#1DA1F2]">Trending with #covid19</p>
          </div>
          <img
            src="/profile4.png" 
            alt="COVID news"
            className="w-16 h-16 rounded-lg object-cover ml-2"
          />
        </div>

        {/* Second News Item */}
        <div className="flex justify-between">
          <div className="text-sm">
            <p className="text-gray-500">US news · 4h ago</p>
            <p className="font-bold text-sm">
              Parler may go offline following suspensions by Amazon, Apple and Google
            </p>
            <p className="text-[#1DA1F2]">Trending with #trump</p>
          </div>
          <img
            src="/profile5.png" 
            alt="Parler news"
            className="w-16 h-16 rounded-lg object-cover ml-2"
          />
        </div>

        {/* Third News Item */}
        <div className="flex justify-between">
          <div className="text-sm">
            <p className="text-gray-500">India · 1h ago</p>
            <p className="font-bold text-sm">
              India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test
            </p>
            <p className="text-[#1DA1F2]">Trending with #sport</p>
          </div>
          <img
            src="/profile6.png" 
            alt="India Australia news"
            className="w-16 h-16 rounded-lg object-cover ml-2"
          />
        </div>

        <p className="text-[#1DA1F2] cursor-pointer">Show more</p>
      </div>

      {/* Who to follow */}
      <div className="bg-secondary rounded-xl p-4 space-y-4">
        <h2 className="font-bold text-lg">Who to follow</h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/profile7.png" 
              alt="Bessie"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-sm">Bessie Cooper</p>
              <p className="text-gray-500 text-sm">@alessandroveronezi</p>
            </div>
          </div>
          <button className="text-[#1DA1F2] font-semibold border border-[#1DA1F2] rounded-full px-3 py-1 text-sm">
            Follow
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/profile8.png" 
              alt="Jenny"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-sm">Jenny Wilson</p>
              <p className="text-gray-500 text-sm">@gabrielcantarin</p>
            </div>
          </div>
          <button className="text-[#1DA1F2] font-semibold border border-[#1DA1F2] rounded-full px-3 py-1 text-sm">
            Follow
          </button>
        </div>

        <p className="text-[#1DA1F2] cursor-pointer">Show more</p>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-500">
        <p>Terms of Service Privacy Policy Cookie Policy</p>
        <p>Ads info More © 2021 Twitter, Inc.</p>
      </div>
    </div>

    </div>
    
  );
}


export default page;