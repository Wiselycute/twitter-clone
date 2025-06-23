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
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ModeToggle } from '@/components/sidebar/ModeToggle';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link'


const page =() =>{

   return(
    <div className="flex bg-background min-h-screen font-sans mx-15">


      {/* Left Sidebar */}
      <aside className="w-[250px]  flex flex-col justify-between px-4 py-6">
        <div>
          <div className="text-2xl font-bold text-[#1DA1F2] mb-8">
            <img src="logo.png" alt="logo" />
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
     <div className="twitter-profile" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
        <div className='flex justify-between items-center p-4'>
            <div className='text-[#1DA1F2]'>
                <FaArrowLeftLong size={20} className='text-[#1DA1F2]' />
            </div>
            <div>
                <h1 className='font-bold'>Name</h1>
                <p className='text-gray-500'>9 Tweets</p>
            </div>
        </div>
      {/* Header with background */}
      <div style={{ backgroundImage: 'url(/cover.png)', height: '200px', backgroundSize: 'cover' }} />

      {/* Profile section */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0 16px', marginTop: '-50px' }}>
        <img
          src="profile1.png"
          alt="Profile"
          style={{ borderRadius: '50%', border: '4px solid white', width: '100px', height: '100px', objectFit: 'cover' }}
        />
        
        <button style={{ marginLeft: 'auto', padding: '2px', width: '150px', marginTop: '50px', borderRadius: '16px', border: '1px solid #1DA1F2', color: '#1DA1F2', background: 'background' }}>
          Edit Profile
        </button> 
      </div>

      {/* Following / Followers */}
      <div className=' '>
         <div style={{ marginLeft: '16px' }} className='flex flex-col'>
          <h2 className="font-bold">Davide Biscuso</h2>
          <p className="text-gray-500">@biscuttu</p>
          <p className="font-semibold">Product Designer</p>
          <div className="text-gray-500 flex gap-4" >
            <p className='flex gap-2 items-center'> <CiLocationOn /> London</p>
            <p className='flex gap-2 items-center'> <FaRegCalendarAlt /> Joined September 2011</p>
          </div>
        </div>
        
      </div>
      <div style={{ padding: '0 16px', marginTop: '8px' }} className="flex " >
        <span  className="flex gap-1"  style={{ marginRight: '16px' }}><strong > 569</strong> <p className="text-gray-500"> Following </p> </span>
        <span  className="flex gap-1" ><strong >72</strong> <p className="text-gray-500"> Followers </p> </span>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #e1e8ed', marginTop: '16px' }}>
        <div style={{ flex: 1, textAlign: 'center', padding: '12px', cursor: 'pointer', borderBottom: '2px solid #1DA1F2' }}>Tweets</div>
        <div style={{ flex: 1, textAlign: 'center', padding: '12px', cursor: 'pointer' }}>Tweets & replies</div>
        <div style={{ flex: 1, textAlign: 'center', padding: '12px', cursor: 'pointer' }}>Media</div>
        <div style={{ flex: 1, textAlign: 'center', padding: '12px', cursor: 'pointer' }}>Likes</div>
      </div>

      {/* Tweet */}
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

    </div>


      {/* Right Sidebar */}
      <div className="w-full max-w-xs p-4 space-y-4">
      {/* Search bar */}
      <div className=" bg-background pb-2">
        <input
          type="text"
          placeholder="Search Twitter"
          className="w-full p-2 rounded-full bg-secondary focus:outline-none"
        />
      </div>

      {/* Who to follow */}
      <div className="bg-secondary rounded-xl p-4 space-y-4">
        <h2 className="font-bold text-lg">You might like to follow</h2>

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