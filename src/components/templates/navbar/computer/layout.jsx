import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { FaTimes, FaEye, FaDoorOpen } from 'react-icons/fa';
import { FiSettings } from "react-icons/fi";
import { CiMenuFries } from 'react-icons/ci';

import MobileNavBarIndex from '../mobile';
import { UseAppContext } from '../../../../utils/hooks/UseAppContext';

import logo from '/logo2.svg';
import avatar from '/avatar.svg';


const NavBarLayout = ({ isAuthenticated, isLandindPage }) => {

    const { logout } = UseAppContext();

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef();

    const HandleClick = () => setClick(!click);
    const HandleDropdown = () => setDropdown(!dropdown);

    const content = <MobileNavBarIndex isAuthenticated={isAuthenticated} />;

    useEffect(() => {
        function HandleDropDownClosure(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdown(false);
            }
        }

        document.addEventListener("mousedown", HandleDropDownClosure);

        return () => {
            document.removeEventListener("mousedown", HandleDropDownClosure);
        };
        
    }, [dropdownRef]);

    return (
        <>
            <nav className="fixed bg-white w-full top-0 z-50">
                <div className="h-20 max-w-[1750px] mx-auto flex justify-between z-50 text-black lg:py-5 px-10 py-5">
                    <Link className='flex inline-block align-bottom' to="/">
                        <img src={logo} className={`overflow-hidden transition-all w-28 `}  alt="logo" />
                    </Link>
                    <div className="flex-1 flex items-center justify-end hidden sm:flex">
                        <div className="flex-10">
                            <ul className="flex items-center gap-8 sm:gap-4 md:gap-6 lg:gap-8 text-[17px]">
                                {isLandindPage ? (
                                    <>
                                        <Link to="#">
                                            <button className="relative font-bold transition-all hover:text-blue-700 cursor-pointer overflow-hidden group">
                                                <span className="transition align-middle">Docs</span>
                                                <span className="absolute bottom-0 right-0 w-full h-[2px] bg-blue-700 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                                            </button>
                                        </Link>
                                        <Link to="#">
                                            <button className="relative font-bold transition-all hover:text-blue-700 cursor-pointer overflow-hidden group">
                                                <span className="transition align-middle">Contacts</span>
                                                <span className="absolute bottom-0 right-0 w-full h-[2px] bg-blue-700 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                                            </button>
                                        </Link>
                                        <Link to="#">
                                            <button className="relative font-bold transition-all hover:text-blue-700 cursor-pointer overflow-hidden group">
                                                <span className="transition align-middle">Prices</span>
                                                <span className="absolute bottom-0 right-0 w-full h-[2px] bg-blue-700 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                                            </button>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                                {isAuthenticated ? (
                                    <li ref={dropdownRef} className="relative flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold transition cursor-pointer" onClick={HandleDropdown}>
                                        <img src={avatar} className="w-10 h-10 rounded-full border border-black object-cover" />
                                        {dropdown && (
                                            <ul className="absolute rounded-xl text-slate-900 right-0 top-11 w-48 rounded shadow-lg bg-gray-100">
                                                <Link to="/profile">
                                                    <li className="font-normal flex rounded-tl-2xl rounded-tr-2xl items-center px-4 py-2 cursor-pointer">
                                                        <FaEye className="mr-2" />
                                                        View
                                                    </li>
                                                </Link>
                                                <hr className='mx-2' />
                                                <Link to="/settings">
                                                    <li className="font-normal flex items-center px-4 py-2 cursor-pointer">
                                                        <FiSettings className="mr-2" />
                                                        Settings
                                                    </li>
                                                </Link>
                                                <li className="font-semibold flex text-red-500 rounded-bl-2xl rounded-br-2xl items-center px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer" onClick={logout}>
                                                    <FaDoorOpen className="mr-2" />
                                                    Logout
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                ) : (
                                    <div className='flex gap-2'>
                                        <Link to="/login">
                                            <button className="relative px-5 py-1 border-2 border-blue-700 rounded-full text-blue-700 font-semibold transition-all hover:bg-blue-700 hover:text-white shadow-md hover:shadow-lg">
                                                <span className="align-middle">Log in</span>
                                            </button>
                                        </Link>

                                        <Link to="/register">
                                            <button className="relative px-5 py-1 border-2 border-slate-900 rounded-full text-slate-900 font-semibold transition-all hover:bg-slate-900 hover:text-white shadow-md hover:shadow-lg">
                                                <span className="align-middle">Register</span>
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className='mt-10 sm:hidden'>{click && content}</div>
                    <button className="block sm:hidden transition" onClick={HandleClick}>
                        {click ? <FaTimes /> : <CiMenuFries />}
                    </button>
                </div>
            </nav>

            <div className="mt-20" >
                <hr className='text-black' />
            </div>
        </>
    );
}

export default NavBarLayout