import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ title, linkTo, zIndex }) => {
    return (
        <>
            <button className="w-[108px] h-[33px] bg-white border border-tBlue font-poppins text-center text-tBlue rounded-lg">
                <Link to={linkTo}><p>{title}</p></Link>
            </button>
        </>
    );
}

export default NavButton;

