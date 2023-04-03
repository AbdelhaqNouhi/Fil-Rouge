import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom"; 
import logo from '../assets/images/logo.png'
import CustomButton from './custom/button/CustomButton';
import Profile from '../assets/images/Profile/Profile.png';
import english from '../assets/icons/dropDown/english.svg';
import france from '../assets/icons//dropDown/france.svg';
import germany from '../assets/icons//dropDown/germany.svg';
import nederlands from '../assets/icons//dropDown/nederlands.svg';
import spain from '../assets/icons//dropDown/spain.svg';

function DropDownLang() {

    const [openLang, setOpenLang] = useState(false);
    const [lang, setLang] = useState([
        {
            id: 1,
            img: english,
            name: 'English',
        },
        {
            id: 2,
            img: france,
            name: 'France',
        },
        {
            id: 3,
            img: germany,
            name: 'Germany',
        },
        {
            id: 4,
            img: nederlands,
            name: 'Nederlands',
        },
        {
            id: 5,
            img: spain,
            name: 'Spain',
        }
    ]);

    return (
        <div className='flex items-center mt-1 absolute'>
            <div>
                <button
                    onClick={() => setOpenLang((event) => !event)}
                    className=''>
                    <img className='w-6 h-6 rounded-full' src={english} alt="" />
                </button>
            </div>
            {openLang && (
                <div className=' mt-56 ml-[-8rem] rounded bg-white w-[133px] border'>
                    {lang.map((langs, index) => (
                        <div className=' text-sm py-2 px-2 cursor-pointer rounded hover:border-l-black border-l-4 flex gap-3'>
                            <img src={langs.img} alt="" />
                            <p className='text-black'>{langs.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function DropDownProfile() {

    const [openProfile, setOpenProfile] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const lastName = localStorage.getItem("firstName");
    const firstName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");


    const sign_out = () => {
        setIsLogged(false);
    };

    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        setIsLogged(false);
    };

    return (
        <div className='flex items-center mt-1 absolute'>
            <div>
                <button
                    onClick={() => setOpenProfile((event) => !event)}                >
                    <img className='w-8 h-8 rounded-full' src={Profile} alt="" />
                </button>
            </div>
            {openProfile && (
                <div className=' mt-64 ml-[-10rem] rounded bg-white w-[165px] h-[210px] border'>
                    <div className='text-sm py-4 px-2 cursor-pointer text-black rounded flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold text-sm'>{firstName} {lastName}</p>
                            <p className='text-xs'>{email}</p>
                        </div>
                        <div className='flex flex-col gap-2 border-t-2 border-b-2 py-3'>
                            <div className='flex gap-4 items-center'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7513 6.79072L14.9629 6.25686C14.8393 5.82514 14.6692 5.40808 14.4558 5.01298L15.3313 3.37405C15.3641 3.31218 15.3762 3.24137 15.3656 3.17213C15.355 3.10289 15.3224 3.0389 15.2725 2.98967L13.9966 1.70842C13.9474 1.65859 13.8834 1.62597 13.8142 1.61539C13.7449 1.60481 13.6741 1.61684 13.6123 1.64969L11.984 2.51988C11.585 2.29601 11.1625 2.11697 10.7241 1.98602L10.1902 0.218962C10.1677 0.153841 10.125 0.0975631 10.0684 0.0582302C10.0118 0.0188973 9.94418 -0.00146236 9.87528 8.17699e-05H8.07084C8.00152 0.000404525 7.93411 0.0228424 7.87842 0.0641301C7.82273 0.105418 7.78166 0.1634 7.76121 0.229639L7.22735 1.99136C6.78533 2.12161 6.35918 2.30066 5.95678 2.52522L4.35521 1.66037C4.29335 1.62752 4.22254 1.61549 4.1533 1.62607C4.08406 1.63665 4.02007 1.66927 3.97084 1.71909L2.67357 2.98433C2.62375 3.03356 2.59112 3.09755 2.58054 3.16679C2.56997 3.23604 2.58199 3.30684 2.61485 3.36871L3.47969 4.97027C3.2555 5.37098 3.07646 5.79532 2.94584 6.23551L1.17878 6.76936C1.11254 6.78982 1.05455 6.83088 1.01327 6.88657C0.971979 6.94226 0.949542 7.00967 0.949219 7.079V8.88343C0.949542 8.95275 0.971979 9.02017 1.01327 9.07586C1.05455 9.13155 1.11254 9.17261 1.17878 9.19306L2.95651 9.72692C3.08856 10.1598 3.26758 10.5769 3.49037 10.9708L2.61485 12.6471C2.58199 12.709 2.56997 12.7798 2.58054 12.849C2.59112 12.9183 2.62375 12.9822 2.67357 13.0315L3.94948 14.3074C3.99872 14.3572 4.0627 14.3898 4.13195 14.4004C4.20119 14.411 4.272 14.399 4.33386 14.3661L5.98347 13.4853C6.3737 13.6958 6.78533 13.8641 7.21134 13.9871L7.74519 15.7862C7.76565 15.8524 7.80671 15.9104 7.8624 15.9517C7.91809 15.993 7.9855 16.0154 8.05483 16.0157H9.85926C9.92858 16.0154 9.996 15.993 10.0517 15.9517C10.1074 15.9104 10.1484 15.8524 10.1689 15.7862L10.7028 13.9817C11.1251 13.8581 11.5331 13.6899 11.9199 13.4799L13.5802 14.3661C13.6421 14.399 13.7129 14.411 13.7821 14.4004C13.8514 14.3898 13.9154 14.3572 13.9646 14.3074L15.2405 13.0315C15.2903 12.9822 15.323 12.9183 15.3335 12.849C15.3441 12.7798 15.3321 12.709 15.2992 12.6471L14.413 10.9922C14.6252 10.6039 14.7952 10.194 14.9202 9.76963L16.7193 9.23577C16.7855 9.21532 16.8435 9.17426 16.8848 9.11857C16.9261 9.06287 16.9485 8.99546 16.9489 8.92614V7.10569C16.952 7.03931 16.9348 6.97355 16.8995 6.91725C16.8641 6.86094 16.8125 6.81679 16.7513 6.79072ZM8.97306 10.9441C8.39233 10.9441 7.82465 10.7719 7.34179 10.4493C6.85894 10.1266 6.4826 9.66806 6.26036 9.13154C6.03813 8.59502 5.97998 8.00465 6.09328 7.43508C6.20657 6.86552 6.48622 6.34233 6.89685 5.9317C7.30749 5.52106 7.83067 5.24142 8.40024 5.12812C8.9698 5.01483 9.56018 5.07298 10.0967 5.29521C10.6332 5.51744 11.0918 5.89378 11.4144 6.37664C11.7371 6.8595 11.9093 7.42718 11.9093 8.00791C11.9093 8.78664 11.5999 9.53347 11.0493 10.0841C10.4986 10.6348 9.75179 10.9441 8.97306 10.9441Z" fill="#797979" />
                                </svg>
                                <p>Profile settings</p>
                            </div>
                            <div className='flex gap-4'>
                                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.94922 1.99091L15.1714 4.81818V9.09091C15.1714 13.2 12.5226 16.9909 8.94922 18.1182C5.37589 16.9909 2.727 13.2 2.727 9.09091V4.81818L8.94922 1.99091ZM8.94922 0L0.949219 3.63636V9.09091C0.949219 14.1364 4.36255 18.8545 8.94922 20C13.5359 18.8545 16.9492 14.1364 16.9492 9.09091V3.63636L8.94922 0ZM8.06033 5.45455H9.83811V7.27273H8.06033V5.45455ZM8.06033 9.09091H9.83811V14.5455H8.06033V9.09091Z" fill="#797979" />
                                </svg>
                                <p>Our policies</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.94922 20C1.684 20 1.42965 19.8946 1.24211 19.7071C1.05458 19.5196 0.949219 19.2652 0.949219 19V1C0.949219 0.734784 1.05458 0.48043 1.24211 0.292893C1.42965 0.105357 1.684 0 1.94922 0H15.9492C16.2144 0 16.4688 0.105357 16.6563 0.292893C16.8439 0.48043 16.9492 0.734784 16.9492 1V19C16.9492 19.2652 16.8439 19.5196 16.6563 19.7071C16.4688 19.8946 16.2144 20 15.9492 20H1.94922ZM11.9492 14L16.9492 10L11.9492 6V9H5.94922V11H11.9492V14Z" fill="#797979" />
                            </svg>
                            <button onClick={() => logOut()} >
                                Log out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function NavBar() {

    const [navbar, setNavbar] = useState(false);
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const lastName = localStorage.getItem("firstName");
    const firstName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");

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
        localStorage.removeItem("email");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
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
                    <ul >
                        {isLogged ? (
                            // <div className='flex gap-4 items-center'>
                            //     <li>
                            //         <NavLink
                            //             to={"/profile"}
                            //             className={({ isActive }) => (isActive ? 'hlock hover:border-b-2 md:p-0' : 'block hover:border-b-2 md:p-0')} >
                            //             {firstName} {lastName}
                            //         </NavLink>
                            //     </li>
                            //     <li>
                            //         <CustomButton onClick={() => logOut()} text="Log Out" />
                            //     </li>
                            // </div>
                            <div className='flex gap-8 items-center'>
                                <div className='relative left-[-2rem]'>
                                    <svg width="15" height="19" viewBox="0 0 15 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.075 12.6562V12.677L13.0896 12.6916L14.95 14.552V15.4187H0.05V14.552L1.91036 12.6916L1.925 12.677V12.6562V7.96875C1.925 5.09878 3.45165 2.72334 6.10532 2.09239L6.14375 2.08326V2.04375V1.40625C6.14375 0.655739 6.74949 0.05 7.5 0.05C8.25051 0.05 8.85625 0.655739 8.85625 1.40625V2.04375V2.08329L8.89472 2.0924C11.5576 2.72333 13.075 5.10801 13.075 7.96875V12.6562ZM11.25 13.6438H11.3V13.5938V7.96875C11.3 6.79644 10.9431 5.72974 10.2886 4.95523C9.63337 4.17991 8.68189 3.7 7.5 3.7C6.31811 3.7 5.36663 4.17991 4.71142 4.95523C4.05689 5.72974 3.7 6.79644 3.7 7.96875V13.5938V13.6438H3.75H11.25ZM9.32432 16.4562C9.29759 17.437 8.48692 18.2313 7.5 18.2313C6.51308 18.2313 5.70241 17.437 5.67568 16.4562H9.32432Z" fill="white" stroke="white" stroke-width="0.1" />
                                    </svg>
                                </div>
                                <DropDownLang />
                                <div className='flex items-center relative left-[0rem]'>
                                    <DropDownProfile firstName={firstName} lastName={lastName} email={email}/>
                                    <div className='flex flex-col justify-center  text-xs text-white relative left-[2.4rem]'>
                                        <p className='font-bold'>{firstName}</p>
                                        <p>{lastName}</p>
                                    </div>
                                </div>
                            </div>
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
