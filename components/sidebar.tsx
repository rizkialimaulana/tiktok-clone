import Image from 'next/image'
import React from 'react'
import { HiHome, HiUsers, HiVideoCamera, HiHashtag, HiMusicNote } from 'react-icons/hi'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div
      className="sticky z-1 left-0 h-screen flex-[0.1] md:flex-[0.3] p-5 flex flex-col space-y-6 border-r border-gray-200 md:border-none overflow-hidden
    md:hover:overflow-y-scroll"
    >
      {/* COLL 1 */}
      <div className="flex flex-col">
        <div className="px-1 py-2 md:px-3 md:py-2 cursor-pointer flex items-center space-x-4 transition-all duration-[300ms] hover:bg-gray-200">
          <HiHome className="w-10 h-10 md:w-8 md:h-8 text-black md:text-[#ff004c]" />
          <span className="hidden md:inline-flex text-lg font-bold">For You</span>
        </div>
        <div className="px-1 py-2 md:px-3 md:py-2 cursor-pointer flex items-center space-x-4 transition-all duration-[300ms] hover:bg-gray-200">
          <HiUsers className="w-8 h-8 text-black md:text-[#ff004c]" />
          <span className="hidden md:inline-flex text-lg font-bold">Following</span>
        </div>
        <div className="px-1 py-2 md:px-3 md:py-2 cursor-pointer flex items-center space-x-4 transition-all duration-[300ms] hover:bg-gray-200">
          <HiVideoCamera className="w-8 h-8 text-black md:text-[#ff004c]" />
          <span className="hidden md:inline-flex text-lg font-bold">Live</span>
        </div>
      </div>

      {/* COLL 2 */}
      <div className="hidden md:flex flex-col space-y-5">
        <p className='text-gray-500 text-sm w-[70%]'>Log in to follow creators, like videos, and view comments.</p>
        <button className="w-full py-4 text-[#ff004c] border border-[#ff004c] font-bold">
          Sign in
        </button>
      </div>

      {/* COLL 3 */}
      <div className='flex flex-col space-y-5'>
        <span className='hidden md:inline-flex text-sm text-gray-500'>Account Suggestion</span>
        <div className='flex flex-col space-y-3'>
            <div className='flex items-center space-x-2'>
                <Image src="/profile.png" alt="" className='rounded-full object-cover' width={50} height={50} />
                <div className='hidden md:flex flex-col'>
                    <h1 className='font-bold text-md'>accont.name</h1>
                    <span className='text-gray-500 text-sm'>accountname</span>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <Image src="/profile.png" alt="" className='rounded-full object-cover' width={50} height={50} />
                <div className='hidden md:flex flex-col'>
                    <h1 className='font-bold text-md'>accont.name</h1>
                    <span className='text-gray-500 text-sm'>accountname</span>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <Image src="/profile.png" alt="" className='rounded-full object-cover' width={50} height={50} />
                <div className='hidden md:flex flex-col'>
                    <h1 className='font-bold text-md'>accont.name</h1>
                    <span className='text-gray-500 text-sm'>accountname</span>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <Image src="/profile.png" alt="" className='rounded-full object-cover' width={50} height={50} />
                <div className='hidden md:flex flex-col'>
                    <h1 className='font-bold text-md'>accont.name</h1>
                    <span className='text-gray-500 text-sm'>accountname</span>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <Image src="/profile.png" alt="" className='rounded-full object-cover' width={50} height={50} />
                <div className='hidden md:flex flex-col'>
                    <h1 className='font-bold text-md'>accont.name</h1>
                    <span className='text-gray-500 text-sm'>accountname</span>
                </div>
            </div>
            <span className='hidden md:inline-flex text-[#ff004c] text-sm'>See all</span>
        </div>
      </div>

      {/* COLL 4 */}
      <div className='hidden md:flex flex-col space-y-5'>
        <span className='text-sm text-gray-500'>Find</span>
        <div className='flex items-center flex-wrap w-full space-x-3 space-y-2'>
            <div className='flex items-center space-x-3 px-2 cursor-pointer rounded-full border border-gray-500 bg-gray-200'>
                <HiHashtag className='w-5 h-5 font-bold'/>
                <span className='text-sm text-gray-500'>TikTokForYourStage</span>
            </div>
            <div className='flex items-center space-x-3 px-2 cursor-pointer rounded-full border border-gray-500 bg-gray-200'>
                <HiHashtag className='w-5 h-5 font-bold'/>
                <span className='text-sm text-gray-500'>FYP</span>
            </div>
            <div className='flex items-center space-x-3 px-2 cursor-pointer rounded-full border border-gray-500 bg-gray-200'>
                <HiMusicNote className='w-5 h-5 font-bold'/>
                <span className='text-sm text-gray-500'>MusicForYou</span>
            </div>
            <div className='flex items-center space-x-3 px-2 cursor-pointer rounded-full border border-gray-500 bg-gray-200'>
                <HiHashtag className='w-5 h-5 font-bold'/>
                <span className='text-sm text-gray-500'>TikTokShop</span>
            </div>
            <div className='flex items-center space-x-3 px-2 cursor-pointer rounded-full border border-gray-500 bg-gray-200'>
                <HiHashtag className='w-5 h-5 font-bold'/>
                <span className='text-sm text-gray-500'>TikTokIndonesia</span>
            </div>
        </div>
      </div>

      {/* COLL 5 */}
      <div className='hidden md:flex flex-col space-y-3'>
        <div className='flex items-center space-x-2 space-y-2 flex-wrap'>
            <span className='cursor-pointer text-gray-500 text-xs transition-all hover:underline'>Tentang Kami</span>
        </div>
        <span className='text-gray-500 text-xs'>2022 TikTok Clone</span>
      </div>
    </div>
  );
}

export default Sidebar