import React from 'react';
import { useState } from 'react'; 
import logo from '../../assets/images/campaign.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
    
        return (
            <header className="bg-green-200 p-8">
              <div className="container mx-auto flex items-center justify-between">
                {/* Logo Item */}
                <div className='w-20'><img src={logo} alt='logo' /></div>
        
                {/* Hamburger Icon */}
                <button
                  className="md:hidden text-black text-xl" onClick={toggleDrawer}>
                  ☰
                </button>
        
                {/* Navbar */}
                <nav className="hidden md:flex space-x-4 text-black text-lg font-medium">
                <Link to='about'>درباره ما </Link>
                <Link to='tutorial'>آموزش ها</Link>
                <Link to='home'>صفحه اصلی</Link>

                  {/* Add more navigation items as needed */}
                </nav>
        
                {/* Search Bar */}
                <div className="hidden md:flex items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border rounded-l py-2 px-4"
                  />
                  <button className="bg-green-600 text-white py-2 px-4 rounded-r">
                    جستجو
                  </button>
                </div>
              </div>
        
              {/* Side Drawer */}
              <div
                className={`${
                  isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden fixed top-0 right-0 h-full w-1/3 bg-green-100 text-black text-lg font-medium transform transition-transform ease-in-out`}
              >
                <ul className="space-y-4">

                  <li>
                  <Link to='home'>صفحه اصلی</Link>
                  </li>

                  <li>
                  <Link to='tutorial'>آموزش ها</Link>
                  </li>

                  <li>
                  <Link to='about'>درباره ما </Link>
                  </li>
                  
                  <li>
                  <button
                  className="md:hidden text-black text-xl" onClick={toggleDrawer}>
                  ☰
                </button>
                  </li>

                  {/* Add more navigation items as needed */}
                </ul>
              </div>
            </header>
          );
    
};

export default Header;