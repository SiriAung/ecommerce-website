import { logo, menu, close } from './assets';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { navLinks } from './constants';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`flex justify-between items-center py-[20px] px-[80px] bg-[#482614] shadow-[0_5px_15px_rgba(0,0,0,0.06)] z-[999] sticky top-0 left-0`}>
      <img src={logo} alt="logo"/>

      <ul className="list-none flex md:hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <Link 
            to={`/${nav.id}`} 
            key={nav.id}>
            <li
              className={`relative cursor-pointer text-[16px] font-spartan font-semibold hover:text-[#E5D1B8] active:text-[#E5D1B8] hover:underline
                ${active === nav.title ? "text-[#E5D1B8]" : "text-black"}
                ${index === navLinks.length -1 ? 'mr-0':'mr-10'}`}
              onClick={() => setActive(nav.title)}
            >

              {nav.title}
            </li>
          </Link>
        ))}
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-bag hover:text-[#E5D1B8] hover:underline active:text-[#E5D1B8]"></i>
          </Link>
        </li>
      </ul>

      <div className="mmd:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#482614] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <Link to={`/${nav.id}`} key={nav.id}>
                <li
                  className={`px-[20px] py-[0] font-spartan cursor-pointer text-[16px] font-semibold 
                    hover:text-[#E5D1B8] hover:underline active:text-[#E5D1B8]
                    ${active === nav.title ? "text-[#E5D1B8]" : "text-black"}
                    ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'}`}
                    onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </li>
              </Link>
            ))}
            <li>
          <Link to="/cart">
            <i className="fas fa-shopping-bag hover:text-[#E5D1B8] hover:underline active:text-[#E5D1B8]"></i>
          </Link>
        </li>

          </ul>
        </div>  
      </div>

    </nav>
  );
};

export default Navbar;


{/*import { Link } from "react-router-dom"
import { close, logo, menu } from './assets';
import { navLinks } from './constants';
import { useState } from 'react';

export default function Navbar() {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`flex justify-between items-center py-[20px] px-[80px] bg-[#E3E6F3] shadow-[0_5px_15px_rgba(0,0,0,0.06)] z-[999] sticky top-0 left-0`}>
      <img src={logo} alt="" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <Link 
            to={`/${nav.id}`} 
            key={nav.id}
          >
            <li className={`relative cursor-pointer text-[16px] font-spartan font-semibold hover:text-[#088178] active:text-[#088178]
              ${active === nav.title ? "text-green" : "text-black"} 
              ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} `}>
              {nav.title}
            </li>
          </Link>
        ))}
        <li><a href="/cart"><i className="fas fa-shopping-bag ml-[-60px] hover:text-green hover:underline active:text-green"></i></a></li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
      <a href="/cart"><i className="fas fa-shopping-bag ml-[-60px] hover:text-green hover:underline active:text-green"></i></a>
        <img 
          src={toggle ? close : menu} 
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}  
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#E3E6F3] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <Link 
                to={`/${nav.id}`} 
                key={nav.id}
              >
                <li className={`font-spartan cursor-pointer text-[16px] font-normal 
                  ${active === nav.title ? "text-green" : "text-black"}
                  ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} hover:text-[#088178] active:text-[#088178]`}>
                  {nav.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
*/}
