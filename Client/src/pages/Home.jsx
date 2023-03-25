import React from "react";
import Typewriter from "typewriter-effect";
import PrimaryButton from "../layouts/Button/PrimaryButton";
import  Background from '../assets/images/Background.png'
import { useState } from "react";

const Home = () => {
    const [title, setTitle] = useState('OPEN MY ACCOUNT');
    
    return (
        <div>
            <div>
                <div className=" flex flex-col md:gap-12 gap-8 justify-center md:my-28 my-16 mx-6 md:mx-16 md:text-4xl md:text-1xl font-bold dark:text-gray-900">
                    <Typewriter
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
                            <h1 className="text-blue-500 md:text-4xl">CRÉDIT DU MAROC,</h1>
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
                    <img className="h-96 md:h-screen bg-cover" src={Background} alt="img" />
                </div>
            </div>
            {/* <Students /> */}
        </div>
    );
};

export default Home;
