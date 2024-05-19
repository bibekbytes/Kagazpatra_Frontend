import React from "react";
import PrimaryInputField from "./Components/PrimaryInputField";
import SecondaryInputField from "./Components/SecondaryInputField";

const ContactSection = () => {
    return (
        <>
            <div className=" bg-cWhite w-full flex flex-col items-center justify-center gap-y-20 pt-20 pb-20">
                {/* title */}
                <p className=" text-4xl font-bold text-tBlue font-poppins">Contact US</p>
                {/* Map and Form Section */}
                <div className=" flex flex-row justify-around w-full">
                    {/* map section */}
                    <img src="/map.jpg" className="h-[520px] rounded-3xl" />
                    {/* form section */}
                    <div className="flex flex-col gap-y-7">
                        <div className=" flex flex-row gap-x-20">
                            <PrimaryInputField title={"First Name"} type={"text"} placeHolderText={"Sandesh"} />
                            <PrimaryInputField title={"Last Name"} type={"text"} placeHolderText={"Ghimire"} />
                        </div>

                        <PrimaryInputField title={"Email Address"} type={"email"} placeHolderText={"Sandeshghimire202@gmail.com"} />
                        <PrimaryInputField title={"Mobile No."} type={"number"} placeHolderText={"+977 9846930428"} />
                        <PrimaryInputField title={"Message"} type={"text"} placeHolderText={"Hey! I am Sandesh Ghimire"} feedback={"messagebox"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactSection;