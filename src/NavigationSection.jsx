import React, { useContext } from "react";
import NavLinks from "./Components/NavLinks";
import NavButton from "./Components/NavButton";
import ThemeButton from "./Components/ThemeButton";
import UserContext from "./UserContext";

const NavigationSection = () => {
    const { access } = useContext(UserContext);
    return (
        <>
            {/* Sub Nav Bar */}
            <div className=" flex flex-row h-[40px] w-full bg-cWhite items-center justify-end pr-6 gap-x-6">
                <NavLinks title={"Police Report"} linkTo={"/services"} />
                <NavLinks title={"Namsari Kagaz"} linkTo={"/services/lekhapadhi"} />
                <NavLinks title={"Rajinama Kagaz"} linkTo={"/services/lekhapadhi"} />

            </div>
            {/* Main Nav Bar */}
            <div className=" bg-white h-[88px] flex flexp-row items-center justify-between pr-6 pl-6 ">
                {/* company logo */}
                <img src="/companyLogo.png" className=" object-contain h-3/4" />
                {/* links section */}
                <div className=" flex flex-row gap-x-6">
                    <NavLinks title={"Home"} linkTo={"/"} />
                    <NavLinks title={"About"} linkTo={"/"} />
                    <NavLinks title={"Services"} linkTo={"/services"} />
                    {!access ? <NavButton title={"Login"} linkTo={"/login"} />
                        : <></>}
                    {!access ? <NavButton title={"Sign in"} linkTo={"/register"} /> : <></>}

                    <ThemeButton />
                </div>
            </div>

        </>
    );
}

export default NavigationSection;