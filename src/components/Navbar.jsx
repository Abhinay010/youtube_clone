import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";


import logo from "../../public/logo.png";
import profile from "../../public/profile.jpg";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchbar, setSearchbar] = useState(false)

  useEffect(() => {
    console.log({ isSidebar, mobileShow })
  },[isSidebar])

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSideBar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
      
    }
    setIsSidebar(!isSidebar)
  }

  const handleLogoClick = () => {
    navigate("/");
  }


  if (searchbar) {
    return <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 items-center">
      <div className=" ml-3 border rounded-full cursor-pointer hover:bg-gray-200 duration-200 ">
          <IoArrowBack size={"42px"} className=" p-2 " onClick={()=>setSearchbar(!searchbar)} />
      </div>
      
      <div className="flex flex-grow items-center mx-4 ">
        <div className="w-[100%] border border-gray-400 px-5 py-2 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full "
        onClick={() => setSearchQuery("searchButton")}>
          <CiSearch size={"24px"} />
        </button>
      </div>
        <div
          className=" ml-3 border rounded-full cursor-pointer hover:bg-gray-200 duration-200 "
        >
          <IoMdMic size={"42px"} className=" p-2 " />
        </div>

    </div>
  }
  
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center space-x-4  ">
        <div className="rounded-full hover:bg-gray-200 duration-200 p-2">
          <AiOutlineMenu className="text-xl cursor-pointer " onClick={handleSideBar} />
        </div>
        <img src={logo} alt="" className="w-28 cursor-pointer" onClick={handleLogoClick} />
      </div>

      <div className="hidden md:flex w-[35%] items-center  ">
        <div className="w-[100%] border border-gray-400 px-5 py-2 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full "
        onClick={() => setSearchQuery("searchButton")}>
          <CiSearch size={"24px"} />
        </button>
        <div
          className=" ml-3 border rounded-full cursor-pointer hover:bg-gray-200 duration-200 "
          
        >
          <IoMdMic size={"42px"} className=" p-2 " />
        </div>
      </div>

      <div className="flex space-x-3 items-center">
        <div className=" text-2xl  rounded-full hover:bg-gray-200 duration-200 p-2">
          <IoIosSearch className="text-xl cursor-pointer xl:hidden "  onClick={() => setSearchbar(!searchbar)}/>
        </div>
        <div className=" text-2xl  rounded-full hover:bg-gray-200 duration-200 p-2">
          <RiVideoAddLine className="text-xl cursor-pointer " />
        </div>
        <div className=" text-2xl  rounded-full hover:bg-gray-200 duration-200 p-2">
          <AiOutlineBell className="text-xl cursor-pointer " />
        </div>
        <Avatar src={profile} size="32" round={true} />
        
      </div>
    </div>
  );
};

export default Navbar;
