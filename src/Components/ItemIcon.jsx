import React from "react";
import { Pen2 } from "./VectorGraphics";
import { Link } from "react-router-dom";

const ItemIcon = ({ icon, linkTo }) => {
    return (
        <>
            <Link to={linkTo}>
                <div className="h-[90px] w-[90px] bg-white rounded-lg flex justify-center items-center border drop-shadow-sm">

                    <div className=" h-2/6 w-2/6">
                        {icon}
                    </div>

                </div>
            </Link>
        </>
    );
}

export default ItemIcon;