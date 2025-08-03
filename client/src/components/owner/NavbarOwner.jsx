import React from 'react'
import { assets, dummyUserData } from '../../assets/assets'
import { Link } from 'react-router-dom';

const NavbarOwner = () => {

     const user = dummyUserData;
  return (
    <div className='flex items-center justify-between px-6 md:px-16 lg:px-10 py-4 text-gray-500 border-b borderColor relative transition-all'>
        <Link src={assets.logo} alt="" className='h-7'/>
     <p>Welcome , {user.name || "Owner"}</p>
    </div>
  )
}

export default NavbarOwner
