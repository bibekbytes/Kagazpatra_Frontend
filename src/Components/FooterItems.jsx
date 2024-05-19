import React from "react";
import { Link } from "react-router-dom";

const FooterItems = ({ title, Items }) => {
    return (
        <>
            <div className=" font-poppins flex flex-col text-tBlue p-2 gap-y-4">
                {/* title  */}
                <p className="font-semibold text-xl">{title}</p>
                {/* Items container */}
                <div className="flex flex-col font-medium text-sm gap-y-4 pl-2">
                    {Items.map((item, index) =>
                    (
                        <Link to={item.path} key={index}><p key={index}>{item.name}</p></Link>
                    )
                    )}
                </div>
            </div>
        </>
    );
}

export default FooterItems;