import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ title, linkTo }) => {
    return (
        <>
            <div className=" font-poppins text-tBlue text-md text-center">
                <Link to={linkTo}><p>{title}</p></Link>
            </div>
        </>
    );
}
export default NavLinks;