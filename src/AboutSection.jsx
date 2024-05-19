import React from "react";

const AboutSection = () => {
    return (
        <>
            <div className=" bg-cWhite h-[306px] w-full flex flex-col justify-center gap-y-8 items-center text-center font-poppins">
                {/* title */}
                <p className=" text-4xl font-bold text-tBlue">About <span className=" text-cPurple">Kagazpatra</span></p>
                {/* Description */}
                <p className=" w-1/2 font-semibold text-tBlue"><span className=" text-cPurple">Kagazpatra</span> is a referral document generator platform, whose main
                    objective is to resolve the hassling problem, excessive charge
                    faces by citizen while writing referral's document.
                </p>
            </div>
        </>
    );
}

export default AboutSection;