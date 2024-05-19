import React from "react";

const DropdownItem = ({ title, Items }) => {
    return (
        <>

            <select name={title} className="border rounded-lg w-[150px] h-[39px] text-tBlue bg-white font-poppins font-medium text-sm text-center">
                <option value="">{title}</option>
                {Items.map((item, index) =>
                (
                    <option key={index} value={item}>{item}</option>
                )
                )}

            </select>
        </>
    );
}

export default DropdownItem;