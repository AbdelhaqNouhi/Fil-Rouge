import React from "react";
import Typewriter from "typewriter-effect";
import PrimaryButton from "../layouts/Button/PrimaryButton";
import  Background from '../assets/images/Background.svg'
import { useState } from "react";
import Product from "../components/Home/Product";
import Service from "../components/Home/Service";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";

const Home = () => {
    const [title, setTitle] = useState('OPEN MY ACCOUNT');
    
    return (
        <div>
            <div className="w-full">
                <div className="absolute flex flex-col md:gap-10 gap-8 justify-center md:my-28 my-16 mx-6 md:mx-16 md:text-4xl md:text-1xl font-bold">
                    <Typewriter
                        className='text-yellow-50'
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
                        <div className="flex md:gap-4 gap-1">
                            <h1>Becoming a</h1>
                            <h1 className="text-[#a39e9e] md:text-4xl">MAISON DATTY,</h1>
                        </div>
                        <h1>Customer in all simplicity.</h1>
                    </div>
                    <div className='flex'>
                        <PrimaryButton 
                            children={"Register"}
                            onClick={() => Sign_up()}
                            width={"w-60"} 
                        />
                    </div>
                </div>
                <div className="">
                    <div className="absolute bg-black opacity-25 w-full h-full"></div>
                    <img className="w-full h-screen bg-cover" src={Background} alt="img" />
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
