import React from 'react'

const CustomButton = ({ onPress, text, fontSize, padding }) => {

    const buttonStyle = `text-${fontSize} py-${padding} px-${padding} text-center rounded max-sm:py-2 px-6 py-2 font-medium text-lg bg-green text-black hover:bg-white hover:scale-105 hover:scale-105 duration-300`;
    return (
        <button onClick={onPress} className={buttonStyle}>
            {text}
        </button>
    );

    CustomButton.defaultProps = {
        fontSize: 'base',
        padding: 2,
    };
}

export default CustomButton