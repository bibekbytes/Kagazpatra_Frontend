import React from "react";
import { Link } from "react-router-dom";

const SecondaryButton = ({ title, linkTo }) => {
    return (
        <>
            <Link to={linkTo}><button className=" font-poppins font-normal text-md h-[39px] w-[200px] bg-cPurple rounded-xl  text-white drop-shadow-sm">{title}</button></Link>
        </>
    );
}

export default SecondaryButton;