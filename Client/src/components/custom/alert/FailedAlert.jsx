import React from 'react'

const FailedAlert = ({ message }) => {
    return (
        <div className="fixed inset-20 flex justify-end w-full">
            <div className=" ">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-text-top sm:h-screen"></span>&#8203;
                <div className="inline-block bg-red rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-80">
                    <div className="bg-green-500 px-4 py-3">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-xl text-white">{message}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FailedAlert