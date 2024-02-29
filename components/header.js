import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='flex w-full items-center justify-center h-16 pb-0.5 bg-gradient-to-r from-fuchsia-500 to-blue-500 fixed top-0 z-50'>
        <div href={'/'} className='h-full w-full bg-white flex items-center justify-start px-6'>
        <Link href={'/'} className='h-full w-full bg-white flex items-center justify-start px-6'>
          <div className='h-14 w-14 bg-red-500 overflow-hidden'>
            <img className='h-full w-full' src='/logo.png'/>
          </div>
            <h1 className='text-lg text-gray-600 font-bold font-Quintessential'><span className='text-yellow-600'>Amazon </span>VS <span className='text-blue-700'>Flipkart</span></h1>
        </Link>
        <div className='hidden md:flex'>
        <a className='bg-gradient-to-r from-fuchsia-700 via-red-600 to-fuchsia-700 mx-2 px-2 py-1 text-white rounded' href='https://tailblocks.org/' target='_blank' rel="noreferrer">Tailblocks</a>
        <a className='bg-gradient-to-r from-blue-800 via-cyan-600 to-blue-800 mx-2 px-2 py-1 text-white rounded' href='https://elitetools.tech/' target='_blank' rel="noreferrer">EliteTools</a>
        </div>
        </div>
    </header>
  )
}

export default Header