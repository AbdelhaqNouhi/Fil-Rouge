import React from "react";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import CustomButton from "../../components/custom/button/CustomButton";
import Background from '../../assets/images/Background.png'
import Background2 from '../../assets/images/Background2.png'
import Product from "../../components/Home/Product";
import Service from "../../components/Home/Service";
import About from "../../components/Home/About";
import Contact from "../../components/Home/Contact";

const Home = () => {
    const [title, setTitle] = useState('OPEN MY ACCOUNT');
    
    return (
        <div className="flex flex-col md:gap-8 ">
            <div className="w-ful h-screen">
                <div className="absolute bg-black opacity-50 w-full h-full"></div>
                <div className="max-sm:flex justify-center">
                    <div className="absolute flex flex-col md:gap-9 gap-4 md:my-28 my-8 max-sm:items-center mx-6 md:mx-16 md:text-3xl text-2xl text-white">
                        <Typewriter
                            className='text-white'
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(
                                        "Welcom Back!! 🖐"
                                    )
                                    .pauseFor(2500)
                                    .start();
                            }}
                        />
                        <div>
                            <div className="flex md:gap-4 gap-1 ">
                                <h1>Becoming a</h1>
                                <h1 className=" text-green">MAISON DATTY,</h1>
                            </div>
                            <h1>Customer in all simplicity.</h1>
                        </div>
                        <div className='flex'>
                            <CustomButton text="Shop Online" className='font-medium' />
                        </div>
                        <img className="bg-cover w-1/2 max-lg:hidden" src={Background2} alt="img" />
                    </div>
                </div>
                <div className="flex justify-end mt-56">
                    <img className="bg-cover" src={Background} alt="img" />
                </div>
            </div>
            <Product />
            <Service />
            <About />
            <Contact />
        </div>
    );
};

export default Home;
