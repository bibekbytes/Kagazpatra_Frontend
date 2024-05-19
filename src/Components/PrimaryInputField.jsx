import React, { useState } from "react";

const PrimaryInputField = ({ title, placeHolderText, feedback, type, onDataChanged, error }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
        //passing data back to the parent component
        onDataChanged(e.target.value);
    }
    return (
        <>
            <div className=" font-poppins font-medium text-tBlue">
                {/* Title */}
                <p className=" text-xs p-2">
                    {title}
                </p>
                {/* Input Field */}
                {!feedback ?
                    <input type={type} placeholder={placeHolderText} value={inputValue} onChange={handleChange} className='h-[50px] w-full p-4 rounded-xl border-2  text-sm ' />
                    :
                    <textarea placeholder={placeHolderText} value={inputValue} onChange={handleChange} className='h-[300px] w-full p-4 rounded-xl border-2  text-lg border-tBlue resize-none' />
                }
                {error && <p className=" font-poppins text-xs font-normal text-red-500 pl-5">{error}</p>}
            </div>

        </>
    );
}

export default PrimaryInputField;