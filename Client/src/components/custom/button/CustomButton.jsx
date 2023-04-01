import React from 'react'

const CustomButton = ({ onPress, text, Background,}) => {

    return (
        <button color={Background} onClick={onPress} className='text-center rounded px-6 py-4 bg-orange-400 transform transition-all hover:scale-105'>
            <span className=''>{text}</span>
        </button>
    );
}

export default CustomButton