import React from "react";

const AuthButton = ({ title }) => {
    return (
        <>
            <button type="submit" className=" font-poppins font-semibold text-sm h-[50px] w-[250px] bg-cPurple rounded-xl  text-white drop-shadow-sm">{title}</button>
        </>
    );
}

export default AuthButton;