import React from "react";

const LocationDisplay = ({ Province, Municipality, Ward }) => {
    return (
        <>
            <div className=" bg-white border rounded-lg font-poppins h-[39px] w-[460px] font-medium text-tBlue text-center flex items-center justify-center text-md">
                <p>{Province} Province/{Municipality} Municipality/Ward-{Ward}</p>
            </div>
        </>
    );
}

export default LocationDisplay;