import React from "react";
import "./App.css"
import NavButton from "./Components/NavButton";

const LandingSection = () => {
    return (
        <>
            <div className=" relative flex items-center justify-center bg-cWhite h-[750px] w-full overflow-hidden">
                {/* abstract spheres */}
                <div className="Ellipse1 left-[-153px] top-[-173px]"></div>
                <div className="Ellipse1 right-[-153px] bottom-[-173px] "></div>
                {/* Content Div */}
                <div className="relative flex items-center justify-center">
                    <img src="/girl.png" className="absolute -right-56 -top-14 w-11/12" />
                    {/* Info and action div */}
                    <div className="flex flex-col items-center font-poppins text-tBlue gap-y-3">
                        <p className=" font-semibold text-5xl">Be Your <span className=" text-cPurple">Kagazpatra</span> Writer</p>
                        <p className=" font-medium">No Hassel, No Queue, No Fee</p>
                        <NavButton title={"Generate"} linkTo={"/services"} />
                    </div>
                    {/* Abstract person image */}

                </div>
            </div>
        </>
    );
}

export default LandingSection;