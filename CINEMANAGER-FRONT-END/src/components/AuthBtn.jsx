import React from 'react';

function AuthBtn({text, onClick, type = "button", className}) {
    return (
        <button type={type} onClick={onClick} className={`text-black font-bold font-serif bg-amber-300 w-[100%] py-3 hover:bg-amber-200 duration-300 ${className}`}> {text}</button>
    );
}

export default AuthBtn;