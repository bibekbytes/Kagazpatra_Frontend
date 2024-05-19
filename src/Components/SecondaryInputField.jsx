import React from "react";

const SecondaryInputField = ({ title, placeHolderText, feedback, type }) => {
    return (
        <>
            <div className=" font-poppins font-medium text-tBlue ">
                {/* Title */}
                <p className=" text-lg p-2">
                    {title}
                </p>
                {/* Input Field */}
                {!feedback ?
                    <input type={type} placeholder={placeHolderText} className='h-[65px] w-full p-4 rounded-xl border-2  text-lg' />
                    :
                    <textarea placeholder={placeHolderText} className='h-[300px] w-full p-4 rounded-xl border-2  text-lg border-tBlue' />
                }
            </div>
        </>
    );
}

export default SecondaryInputField;