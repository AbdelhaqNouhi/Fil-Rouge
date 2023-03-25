import React from "react";
import point from "../../assets/images/HowWork/point_interogation.svg";
import one from "../../assets/images/HowWork/ICON_1.svg";
import two from "../../assets/images/HowWork/ICON_2.svg";
import three from "../../assets/images/HowWork/ICON_3.svg";
import four from "../../assets/images/HowWork/ICON_4.svg";

const HowWork = () => {
    return (
        <div className="relative">
            <div className=" min-w-full">
                <div style={{ marginTop: "-2rem" }} className="absolute md:w-24 w-20 md:ml-14">
                    <img src={point} alt="point" />
                </div>
                <div className=" border-gray-200 text-white px-24 md:m-16 py-6 bg-gradient-to-r from-blue-400 sm:flex col md:flex justify-between dark:text-gray-900">
                    <div className="flex md:flex-col gap-2 md:justify-center text-4xl font-bold">
                        <h1 className="text-blue-200">How it</h1>
                        <h1 className="text-white">work ?</h1>
                    </div>
                    <div className="flex md:gap-32 gap-16 justify-between py-6">
                        <div className="flex flex-col gap-4 align-center">
                            <img src={one} alt="one" width={67.057} />
                            <div className="w-28 flex flex-col gap-1">
                                <h1 className="text-blue-500 font-bold text-xl">
                                    Profile !
                                </h1>
                                <p>Select the profile that best suits you</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <img src={two} alt="two" width={67.057} />
                            <div className="w-28 flex flex-col gap-1">
                                <h1 className="text-blue-500 font-bold text-xl">
                                    Package !
                                </h1>
                                <p> Choose the package that suits you </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:gap-32 gap-16 justify-between py-6">
                        <div className="flex flex-col gap-4">
                            <img src={three} alt="three" width={67.057} />
                            <div className="w-28 flex flex-col gap-1">
                                <h1 className="text-blue-500 font-bold text-xl">
                                    Form !
                                </h1>
                                <p>
                                    Fill out the online account application form
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <img src={four} alt="four" width={67.057} />
                            <div className="w-28 flex flex-col gap-1">
                                <h1 className="text-blue-500 font-bold text-xl">
                                    Advisor !
                                </h1>
                                <p>
                                    An advisor will contact you to set up an
                                    appointment with you at the branch
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWork;
