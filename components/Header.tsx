import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import Button from "./Button";
import MenuSvg from "../public/assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";
import { useState, useRef, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { ChevronDown } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  const toggleNavigation = () => {
    if(openNavigation){
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if(!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  // Handle mouse enter on nav item
  const handleMouseEnter = (itemId) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(itemId);
  };

  // Handle mouse leave on nav item
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // Small delay to prevent flickering
  };

  // Handle mouse enter on dropdown to keep it open
  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-gray-800 lg:bg-black/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-black' : 'bg-black/90 backdrop-blur-sm'}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Increased logo size and fixed the typo in w-[12-rem] to w-[12rem] */}
        <a className='block w-[15rem] xl:w-[18rem] xl:mr-4' href='#hero'>
          <img src="/assets/bitwise.png" width={220} height={45} alt="Bitwise" className="max-w-full h-auto" />
        </a>

        <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-black lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href={item.url} 
                  onClick={!item.hasDropdown ? handleClick : undefined}
                  className={`block relative font-code text-xl uppercase text-gray-200 transition-colors hover:text-purple-400 ${item.onlyMobile ? 'lg:hidden' : ''} px-4 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${pathname === item.url ? 'z-2 lg:text-purple-400' : 'lg:text-purple-400/50'} lg:leading-5 lg:hover:text-purple-400 xl:px-8 flex items-center`}
                >
                  {item.title}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3" />}
                </a>

                {/* Desktop Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.id && (
                  <div
                    className="hidden lg:block absolute left-0 mt-2 w-48 rounded-md bg-gray-900 border border-gray-800 shadow-lg py-2"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        onClick={handleClick}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-purple-400 transition-colors"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}

                {/* Mobile Dropdown */}
                {item.hasDropdown && activeDropdown === item.id && openNavigation && (
                  <div className="lg:hidden bg-gray-900/50 py-2 pl-8">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-lg text-gray-300 hover:text-purple-400"
                        onClick={handleClick}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <HambugerMenu />
        </nav>

        <a href="#signup" className="button hidden mr-4 text-gray-200/50 transition-colors hover:text-gray-200 lg:block text-sm whitespace-nowrap">
          New Account
        </a>
        <Button className="!hidden lg:!inline-flex text-[10px] whitespace-nowrap" href="#login" onClick={() => {}}>
          Sign In
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;