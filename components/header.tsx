import Image from 'next/image'
import React, { useState } from 'react'
import { HiPlus, HiDotsVertical, HiSearch } from 'react-icons/hi'
import { FiSend } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import Login from './login'
import { selectUser } from '../redux/userSlice';
import { useSelector } from 'react-redux'
import { Popup } from 'reactjs-popup'
import { auth } from '../firebase';
import Modal from './modal';

type Props = {}

const Header = (props: Props) => {
  const user = useSelector(selectUser);
  const [show, setShow] = useState(false)

  return (
    <div className="bg-white sticky top-0 z-10 flex items-center justify-around py-3 border-b border-gray-300">
      <Image
        src="/logo.png"
        alt="logo"
        width={130}
        height={100}
        className="cursor-pointer"
      />
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-full w-[30rem]">
        <input
          type="text"
          placeholder="Find Account and Video"
          className="flex-grow pl-2 outline-none bg-transparent"
        />
        <button>
          <HiSearch className="w-6 h-6 text-[#ff004c]" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex cursor-pointer items-center border border-gray-300 py-2 px-3 space-x-4">
          <HiPlus />
          <span>Upload</span>
        </div>
        {!user ? (
          <>
            <button
              onClick={() => setShow(true)}
              className="bg-[#ff004c] cursor-pointer py-2 px-5 text-white font-bold transition-all hover:bg-[#c4003b]"
            >
              Sign in
            </button>
            <i>
              <HiDotsVertical
                className="transition-all ease-in-out"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Tooltip on bottom"
              />
            </i>
            {show ? <Login close={() => setShow(false)} /> : null}
          </>
        ) : (
          <>
            <FiSend className="w-6 h-6 cursor-pointer" />
            <BiMessageDetail className="w-6 h-6 cursor-pointer" />
            <Image
              src="/profile.png"
              alt=""
              className="rounded-full cursor-pointer"
              width={30}
              height={30}
              onClick={() => auth.signOut()}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Header