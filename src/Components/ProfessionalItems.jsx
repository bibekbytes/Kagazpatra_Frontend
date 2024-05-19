import React from "react";

const ProfessionalItems = ({ imageSrc, Name, Role, Address }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-evenly gap-y-4 w-[230px] p-2">
                {/* Image */}

                <img src={imageSrc} className=" object-cover h-[130px] w-[130px] rounded-lg" />

                <div className=" flex flex-col  items-center gap-y-1">
                    {/* Name */}
                    <p className=" font-poppins font-semibold text-xl text-tBlue">
                        {Name}
                    </p>
                    {/* Role and Address */}
                    <p className="text-xs font-poppins font-medium text-tBlue">{Role}, {Address}</p>
                </div>
            </div>
        </>
    );
}

export default ProfessionalItems;