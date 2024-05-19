import React from "react";
import ItemIcon from "./ItemIcon";

const Item = ({ title, icon, linkTo }) => {
    return (
        <>
            <div className=" flex flex-col items-center justify-center gap-y-3">
                <ItemIcon icon={icon} linkTo={linkTo} />
                <p className=" font-poppins font-medium text-lg text-tBlue">{title}</p>
            </div>
        </>
    );
}

export default Item;