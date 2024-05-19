import React from "react";
import ItemIcon from "./ItemIcon";
import { Link } from "react-router-dom";

const ItemDisplay = ({ title, icon }) => {
    return (
        <>
            <div className=" flex flex-row items-center justify-center gap-x-3">
                <ItemIcon icon={icon} />
                <p className=" font-poppins font-medium text-lg text-tBlue">{title}</p>
            </div>
        </>
    );
}

export default ItemDisplay;