import React from "react";

const ServiceItems = ({ logoSrc, title }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-y-1 w-[200px] h-[170px]">
                {/* logo div */}
                <div className=" h-[112px] w-[112px] ">
                    <img src={logoSrc} className=" object-cover" />
                </div>
                {/* title text */}
                <p className=" font-poppins font-semibold text-tBlue text-center">
                    {title}
                </p>
            </div>
        </>
    );
}

export default ServiceItems;