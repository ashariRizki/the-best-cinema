import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className='bg-primary text-white mx-auto flex py-4 justify-center items-center'>
      <nav className='flex w-full justify-between max-w-[1400px] items-center'>
        <h1 className='text-xl'>The Best Cinema</h1>
        <ul className='flex gap-8 text-lg'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/faq'>FAQ</NavLink>
          <NavLink to='/contact-us'>Contact Us</NavLink>
        </ul>
        <form>
          <input className='rounded-l-sm px-3 py-2' type='text' placeholder='Search' />
          <button className='bg-white text-primary px-4 py-2 rounded-r-sm border-l-2 border-primary'>
            search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Header;
