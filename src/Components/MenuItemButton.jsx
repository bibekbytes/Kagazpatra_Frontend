import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";


const MenuItemButton = ({ title, IconComponent, AltIcon, linkTo }) => {
    const [currentActive, setCurrentActive] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setCurrentActive(location.pathname === linkTo)
        console.log(`${location.pathname} and ${linkTo}`);
    }, [location.pathname])

    return (
        <>
            <div>
                <NavLink to={linkTo} className={({ isActive }) => `${isActive ? "bg-cPurple text-white" : "bg-white text-tBlue"} flex flex-row gap-x-3 h-[39px] border w-full pr-20 pl-10 items-center justify-between  text-xs`}>
                    {/* title */}
                    < p className=" font-poppins font-medium">{title}</p>
                    {/* icon */}
                    {!currentActive ?
                        <div>
                            {IconComponent}
                        </div>
                        :
                        <div>
                            {AltIcon}
                        </div>}


                </NavLink>
            </div >
        </>
    );
}

export default MenuItemButton;