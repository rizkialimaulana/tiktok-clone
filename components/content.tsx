import React from 'react'
import Image from 'next/image'
import { FcLike } from 'react-icons/fc'
import { FaRegCommentDots } from 'react-icons/fa'
import { IoMdShareAlt } from 'react-icons/io'

type Props = {}

const Content = (props: Props) => {
  return (
    <div className='h-screen flex-[0.9] py-5 flex flex-col items-center overflow-y-hidden hover:overflow-y-scroll'>
        <div className='w-full md:w-[40rem] min-h-full flex flex-col space-y-5'>
            <div className='flex space-x-4 items-start justify-between'>
                <div className='flex items-start space-x-3'>
                    <Image src="/profile.png" alt="" width={60} height={60} className='rounded-full cursor-pointer' />
                    <div className='flex flex-col space-y-2'>
                        <h1 className='font-bold text-lg'>Account Name{"  "}<span>Name</span></h1>
                        <p className='text-sm'>Could anyone explain this?</p>
                        <div className='flex items-center space-x-2'>
                            <span className='font-bold text-md'>#Lol</span>
                            <span className='font-bold text-md'>#Lol</span>
                            <span className='font-bold text-md'>#Lol</span>
                        </div>
                        <div className='flex space-x-3 items-end'>
                            <div className='w-[12rem] h-[20rem] md:w-[20rem] md:h-[30rem] bg-gray-500 rounded-md'/>
                            <div className='flex flex-col items-center space-y-4'>
                                <div className='flex flex-col items-center space-y-3'>
                                    <FcLike className='w-6 h-auto md:w-8 md:h-8'/>
                                    <span className='font-bold text-xs'>1K</span>
                                </div>
                                <div className='flex flex-col items-center space-y-3'>
                                    <FaRegCommentDots className='w-6 h-auto md:w-8 md:h-auto'/>
                                    <span className='font-bold text-xs'>1.950</span>
                                </div>
                                <div className='flex flex-col items-center space-y-3'>
                                    <IoMdShareAlt className='w-6 h-auto md:w-8 md:h-8'/>
                                    <span className='font-bold text-xs'>2.250</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='text-sm md:text-md py-1 px-6 border border-[#ff004c] text-[#ff004c]'>Follow</button>
            </div>
        </div>
        <div className='w-full md:w-[40rem] min-h-full flex flex-col space-y-5'>
            <div className='flex space-x-4 items-start justify-between'>
                <div className='flex items-start space-x-3'>
                    <Image src="/profile.png" alt="" width={60} height={60} className='rounded-full cursor-pointer' />
                    <div className='flex flex-col space-y-2'>
                        <h1 className='font-bold text-lg'>Account Name{"  "}<span>Name</span></h1>
                        <p className='text-sm'>Could anyone explain this?</p>
                        <div className='flex items-center space-x-2'>
                            <span className='font-bold text-md'>#Lol</span>
                            <span className='font-bold text-md'>#Lol</span>
                            <span className='font-bold text-md'>#Lol</span>
                        </div>
                        <div className='flex space-x-3 items-end'>
                            <div className='w-[12rem] h-[20rem] md:w-[20rem] md:h-[30rem] bg-gray-500 rounded-md'/>
                            <div className='flex flex-col items-center space-y-4'>
                                <div className='flex flex-col items-center space-y-3'>
                                    <FcLike className='w-6 h-auto md:w-8 md:h-8'/>
                                    <span className='font-bold text-xs'>1K</span>
                                </div>
                                <div className='flex flex-col items-center space-y-3'>
                                    <FaRegCommentDots className='w-6 h-auto md:w-8 md:h-auto'/>
                                    <span className='font-bold text-xs'>1.950</span>
                                </div>
                                <div className='flex flex-col items-center space-y-3'>
                                    <IoMdShareAlt className='w-6 h-auto md:w-8 md:h-8'/>
                                    <span className='font-bold text-xs'>2.250</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='text-sm md:text-md py-1 px-6 border border-[#ff004c] text-[#ff004c]'>Follow</button>
            </div>
        </div>
        <div className='w-full md:w-[40rem] min-h-full flex flex-col space-y-5'>
            <div className='flex space-x-4 items-start justify-between'>
                <div className='flex items-start space-x-3'>
                    <Image src="/profile.png" alt="" width={60} height={60} className='rounded-full cursor-pointer' />
                    <div className='flex flex-col space-y-2'>
                        <h1 className='font-bold text-lg'>Account Name{"  "}<span>Name</span></h1>
                        <p className='text-sm'>Could anyone explain this?</p>
                        <div className='flex items-center space-x-2'>
                            <span className='font-bold text-md'>#Lol</span>
                            <span className='font-bold text-md'>#Lol</span>
                            <span className='font-bold text-md'>#Lol</span>
                        </div>
                        <div className='flex space-x-3 items-end'>
                            <div className='w-[12rem] h-[20rem] md:w-[20rem] md:h-[30rem] bg-gray-500 rounded-md'/>
                            <div className='flex flex-col items-center space-y-4'>
                                <div className='flex flex-col items-center space-y-3'>
                                    <FcLike className='w-6 h-auto md:w-8 md:h-8'/>
                                    <span className='font-bold text-xs'>1K</span>
                                </div>
                                <div className='flex flex-col items-center space-y-3'>
                                    <FaRegCommentDots className='w-6 h-auto md:w-8 md:h-auto'/>
                                    <span className='font-bold text-xs'>1.950</span>
                                </div>
                                <div className='flex flex-col items-center space-y-3'>
                                    <IoMdShareAlt className='w-6 h-auto md:w-8 md:h-8'/>
                                    <span className='font-bold text-xs'>2.250</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='text-sm md:text-md py-1 px-6 border border-[#ff004c] text-[#ff004c]'>Follow</button>
            </div>
        </div>
    </div>
  )
}

export default Content