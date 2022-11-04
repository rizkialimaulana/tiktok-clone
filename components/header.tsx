import Image from 'next/image'
import React from 'react'
import { HiPlus, HiDotsVertical, HiSearch } from 'react-icons/hi'

type Props = {}

const Header = (props: Props) => {
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
      <div className="flex cursor-pointer items-center space-x-4">
        <div className="flex items-center border border-gray-300 py-2 px-3 space-x-4">
          <HiPlus />
          <span>Upload</span>
        </div>
        <button className="bg-[#ff004c] py-2 px-5 text-white font-bold transition-all hover:bg-[#c4003b]">
          Sign in
        </button>
        <i>
          <HiDotsVertical />
        </i>
      </div>
    </div>
  );
}

export default Header