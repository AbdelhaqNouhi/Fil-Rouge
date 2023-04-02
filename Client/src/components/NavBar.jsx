import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom"; 
import logo from '../assets/images/logo.png'
import CustomButton from './custom/button/CustomButton';

function NavBar() {

    const [navbar, setNavbar] = useState(false);
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const lastName = localStorage.getItem("firstName");

    const sign_out = () => {
        setIsLogged(false);
    };

    const Auth_modal = () => {
        setOpenAuthModal(true);
    };
    const active = () => {
        setNavbar(!navbar);
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLogged(true);
        }
    }, []);

    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("id");
        setIsLogged(false);
    };
    
    return (
        <nav className= "text-white bg-quaternary sticky top-0 z-[100] border-gray-200 px-2 sm:px-16 py-2.5  bg-primary">
            <div className="container flex flex-wrap gap-10 items-center justify-between mx-auto">
                <NavLink to="/" className="flex items-center w-40">
                    <img src={logo} alt="logo" />
                </NavLink>
                <div className='flex md:hidden'>
                    <button
                        onClick={() => active()}
                        type="button"
                        className="inline-flex focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-8 h-8 rounded-full p-1"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div
                    className={
                        navbar
                            ? "block w-full md:block md:w-auto "
                            : "hidden md:block"
                    }
                    id="navbar-default"
                >
                    <ul className="flex justify-center items-center text-white-200 p-2 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-primary md:dark:bg-primary">
                        <li className='flex gap-20 max-md:flex-col max-md:gap-12 items-center'>
                            <NavLink 
                                to={"/"}
                                className={({ isActive }) => (isActive ? 'block text-white border-b-2' : 'block hover:border-b-2 md:p-0')} >
                                Home 
                            </NavLink>
                            <NavLink
                                to={"/Store"}
                                className={({ isActive }) => (isActive ? 'block text-white border-b-2' : 'block hover:border-b-2 md:p-0')} >
                                Store
                            </NavLink>  
                            <NavLink
                                to={"/ContactUs"}
                                className={({ isActive }) => (isActive ? 'block text-white border-b-2' : 'block hover:border-b-2 md:p-0')} >
                                ContactUs
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div
                    className={
                        navbar
                            ? "block w-full md:block md:w-auto "
                            : "hidden md:block"
                    }
                    id="navbar-default"
                >
                    <ul>
                        {isLogged ? (
                            <>
                                <li>
                                    <NavLink
                                        to={"/profile"}
                                        className={({ isActive }) => (isActive ? 'block py-2 pl-3 pr-4 text-white md:bg-transparent md:text-blue- hover:text-primary md:p-0 dark:text-white border-b-2 border-blue-500' : 'block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:hover:text-blue-700 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-b-2 border-blue-500')} >
                                        {lastName}
                                    </NavLink>
                                </li>
                                <li>
                                    <CustomButton onClick={() => logOut()} text="Log Out" />
                                </li>
                            </>
                        ) : (
                            <li>
                                <NavLink
                                        className="flex justify-center max-md:mb-6"
                                    to={"/signIn"}
                                >
                                        <CustomButton onClick={() => Auth_modal()} text="Login"/>
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
