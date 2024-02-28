import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Adsense2 from './ad2'
const Header = () => {

    return (
        <div className="flex justify-center h-28 md:w-full items-center pt-4 bg-white   md:border-b-2 border-purple-500 md:fixed top-0 z-50">
            <nav className="self-center md:fixed top-0 w-full max-w-7xl ">
                <div className="flex justify-center md:justify-between  items-center text-gray-700">
                    <div className='flex m-2 ml-6 py-1 px-3 bg-blue-600 rounded text-white text-2xl font-medium cursor-pointer hover:bg-fuchsia-600 h-10'>  <Link href="/" > Tailblocks </Link></div>
                    {/* Ad code here */}
                    <div className='hidden lg:flex   space-x-4 m-2 w-1/2  ' >
                        {/* <Adsense2/> */}
                       

                        <a className=' w-full h-24 text-xl text-white flex items-center justify-between border' href="https://m.do.co/c/efe1f62bf0db" target={"_blank"} rel="noreferrer"> 
                        <div className='bg-white  h-full w-1/2 flex flex-col items-center justify-center font-medium'>
                            <div className='flex flex-col space-y-1'>
                            <Image src={"/digi.png"} width={100} height={100} alt={" "} />
                            </div>
                           
                            </div> 
                        <div className='w-1/2 bg-blue-600 px-2 py-1 text-white flex flex-col items-center justify-center space-y-1 '>
                            <div>

                            <div>Get $200 in your wallet</div> 
                            <div className='font-medium '>Deploy your apps Now</div> 
                            </div>
                            
                            <div className='font-medium text-blue-600 bg-white px-2  rounded hover:bg-gray-100 cursor-pointer lg:text-lg'>Signup</div> 
                            
                            </div> 
                        
                        
                        </a>

                    </div>

                        <div className="hidden md:flex  m-2 space-x-4">
                            <a className="rounded p-1  bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500  text-white  m-1 px-2 text-lg" href="https://www.instagram.com/tailblocks.css/" target={"_blank"} rel="noreferrer">
                                <ion-icon name="logo-instagram" class="mt-1"></ion-icon> </a>
                            <a className="rounded p-1 bg-blue-500 hover:bg-white text-white hover:text-blue-500 m-1 px-2 text-lg" href="https://twitter.com/tailblocksorg" target={"_blank"} rel="noreferrer">
                                <ion-icon name="logo-twitter" class="mt-1"></ion-icon> </a>
                                <a className="rounded p-1 bg-orange-600 hover:bg-white text-white hover:text-orange-600 m-1 px-2 text-lg" href="https://www.reddit.com/r/tailblocks/" target={"_blank"} rel="noreferrer">
                                <ion-icon name="logo-reddit" class="mt-1"></ion-icon> </a>
                            <a className="rounded p-1 bg-blue-600 hover:bg-white text-white hover:text-blue-600 m-1 px-2 text-lg" href="https://www.facebook.com/tailblocks/" target={"_blank"} rel="noreferrer">
                                <ion-icon name="logo-facebook" class="mt-1"></ion-icon> </a>
                            <a className="rounded p-1 bg-red-500 hover:bg-white text-white hover:text-red-500 m-1 px-2 text-lg" href="https://www.youtube.com/watch?v=dPIYCzacQVs" target={"_blank"} rel="noreferrer">
                                <ion-icon name="logo-youtube" class="mt-1"></ion-icon> </a>
                                <a className="rounded p-1 bg-red-600 hover:bg-white text-white hover:text-red-600 m-1 px-2 text-lg" href="https://tailblocks.quora.com" target={"_blank"} rel="noreferrer">
                                <li className="fa fa-quora mt-1"></li> </a>
                                
                    </div>
                               
                    {/* <ul className="hidden md:flex items-center text-[18px] font-semibold pr-10">
                        <li className='m-1 p-1 hover:text-fuchsia-600 text-green-500 font-medium '> <Link href="/about" > About US</Link></li>
                        <li className='m-1 p-1 hover:text-fuchsia-600 text-green-500 font-medium cursor-pointer'> <Link href="/privacy" > Privacy Policy</Link></li>
                        <li className='m-1 p-1 hover:text-fuchsia-600 text-green-500 font-medium cursor-pointer'> <Link href="/contact" > Contact </Link></li>
                        <li className='m-1 p-1 hover:text-fuchsia-600 text-green-500 font-medium cursor-pointer'> <Link href="/dmca" > DMCA</Link></li>

                    </ul> */}

                </div>
            </nav>
        </div>
    )
}

export default Header