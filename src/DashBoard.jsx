import React, { useContext, useEffect } from "react";
import MenuItemButton from "./Components/MenuItemButton";
import { Pen, Pen2, Peoples, Pointer } from "./Components/VectorGraphics";
import LogOutButton from "./Components/LogOutButton";
import SearchBar from "./Components/SearchBar";
import ThemeButton from "./Components/ThemeButton"
import DropdownItem from "./Components/DropdownItem";
import UniqueService from "./UniqueService";
import { Outlet } from "react-router-dom";
import UserContext from "./UserContext";
import { verifyUser } from "./Components/Api";


const DashBoard = () => {
    const { user, setUser, setAccess } = useContext(UserContext);

    const initialize = async () => {
        console.log("Initialized");
        try {
            const response = await verifyUser();
            if (response.userData != null) {
                const userInfo = {
                    firstName: response.userData._firstName,
                    lastName: response.userData._lastName,
                    email: response.userData._email,
                    mobileNumber: response.userData._mobileNumber,
                };
                setUser(userInfo);
                setAccess(true);
                console.log("Token verified");
            } else {
                setAccess(false);
                console.log("Bad token");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        initialize();
    }, []);

    return (
        <>
            <div className="flex flex-row min-h-svh">
                {/* Menu Section */}
                <div className=" bg-cWhite min-w-[280px] flex flex-col justify-between border-r">
                    {/* logo and menu div */}
                    <div>
                        {/* Logo section */}
                        <div className=" flex h-[120px] items-center justify-start">
                            <img src="/companyLogo.png" className=" h-16" />
                        </div>
                        {/* Menu Selection Section */}
                        <div>
                            <MenuItemButton title={"Generate Document"} IconComponent={<Pointer color={"#30455E"} />} AltIcon={<Pointer color={"#FFFFFF"} />} linkTo={"/services/documents"} />
                            <MenuItemButton title={"Kuruwa"} IconComponent={<Peoples color={"#30455E"} />} AltIcon={<Peoples color={"#FFFFFF"} />} linkTo={"/services/kuruwa"} />
                            <MenuItemButton title={"Notary Public"} IconComponent={<Pen color={"#30455E"} />} AltIcon={<Pen color={"#FFFFFF"} />} linkTo={"/services/notary"} />
                        </div>
                    </div>
                    <LogOutButton title={"Log Out"} />
                </div>
                {/* Content Section */}
                <div className="min-h-full w-full p-10 flex flex-col bg-cWhite">
                    {/* Head div */}
                    <div className="flex flex-row justify-between  items-center">
                        {/* User Info */}
                        <div className=" font-poppins font-medium text-tBlue">
                            <p className=" text-2xl">{user.firstName ? user.firstName : 'qwerty'} {user.lastName ? user.lastName : 'qwerty'}</p>
                            <p>{user.email ? user.email : 'qwerty@gmail.com'}</p>
                        </div>
                        {/* Utility Menu */}
                        <div className="flex flex-row justify-between gap-x-6 items-center">
                            <SearchBar />
                            <ThemeButton />
                        </div>
                    </div>
                    {/* Main Div */}
                    <div className="pt-10 flex flex-col items-start gap-y-4 pb-10">
                        <p className=" font-poppins font-medium text-md pl-3">Select Your Location</p>
                        {/* Menu Dropdowns  */}
                        <div className=" flex flex-row  w-full justify-start gap-x-32">
                            <DropdownItem title={"Province"} Items={["Gandaki", "Bagmati", "Lumbini"]} />
                            <DropdownItem title={"Municipality"} Items={["Gandaki", "Bagmati", "Lumbini"]} />
                            <DropdownItem title={"Ward"} Items={["Bhangara", "Sankharpohari", "Karkineta", "Kusma"]} />
                        </div>
                    </div>
                    {/* <GovService /> */}
                    {/* <UniqueService /> */}
                    <Outlet />


                </div>
            </div >

        </>
    );
}

export default DashBoard;