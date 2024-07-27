import { NavLink } from "react-router-dom";

import birthdaylogo from "../assets/images/birthdaylogo.png";
import giftbox from "../assets/icons/giftbox.png";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={birthdaylogo} alt='logo' className='object-contain w-24 h-24' />
      </NavLink>
      <nav className='flex flex-row items-center justify-center gap-3 text-lg font-medium sm:w-44'>
        {/* <NavLink to='/gift' className={({ isActive }) => isActive ? "text-white" : "text-black"}>
          <img src={giftbox} alt='giftbox' className='object-contain w-16 h-16' />
        </NavLink> */}
        {/* <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Navbar;
