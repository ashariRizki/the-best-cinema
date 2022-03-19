import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchProps } from "../../interfaces/search";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC<SearchProps> = (props) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className='bg-primary text-white mx-auto flex py-4 xl:px-0 px-4 justify-center items-center '>
      <nav className='flex w-full justify-between max-w-[1300px] items-center'>
        <h1 className='text-base lg:text-lg xl:text-xl'>The Best Cinema</h1>
        <ul
          className={`flex absolute flex-col w-full xl:w-fit lg:w-fit gap-8 text-base lg:text-lg xl:text-xl text-[#32a2a8] 
        xl:static lg:static lg:flex-row xl:flex-row px-4 xl:px-0 lg:px-0 lg:pb-0 xl:pb-0 pb-4
       bg-primary left-0 ${
         !showNav ? "top-[-100rem]" : "top-[4.2rem]"
       }  z-40  xl:bg-transparent lg:bg-transparent`}>
          <NavLink className='w-[5rem] xl:w-fit lg:w-fit' to='/'>
            Home
          </NavLink>
          <NavLink className='w-[5rem] xl:w-fit lg:w-fit' to='/about'>
            About
          </NavLink>
          <NavLink className='w-[5rem] xl:w-fit lg:w-fit' to='/faq'>
            FAQ
          </NavLink>
          <NavLink className='w-[5rem] xl:w-fit lg:w-fit' to='/contact-us'>
            Contact Us
          </NavLink>
        </ul>
        <input
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
          className='rounded-l-sm px-2 py-2 text-sm xl:text-lg lg:text-base text-primary mr-8 lg:mr-0 xl:mr-0'
          type='text'
          placeholder='Search'
        />
        <GiHamburgerMenu
          size={20}
          className='absolute right-4 cursor-pointer block lg:hidden xl:hidden'
          onClick={() => setShowNav(!showNav)}
        />
      </nav>
    </div>
  );
};

export default Header;
