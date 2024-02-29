import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-900 text-white flex items-center justify-center py-2'>
      <div className='max-w-7xl flex flex-col lg:flex-row items-center justify-around w-full'>
        <div>Copyright &copy; 2024 | Arkay</div>
        <div className='flex items-center justify-between space-x-4'>
          <Link className='hover:text-fuchsia-500 ease-in-out duration-500' href='/about'>About US </Link>
          <Link className='hover:text-fuchsia-500 ease-in-out duration-500' href='/contact'>Contact US </Link>
          <Link className='hover:text-fuchsia-500 ease-in-out duration-500' href='/privacy-policy'>Privacy Policy </Link>
          <Link className='hover:text-fuchsia-500 ease-in-out duration-500' href='/dmca'>DMCA </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer