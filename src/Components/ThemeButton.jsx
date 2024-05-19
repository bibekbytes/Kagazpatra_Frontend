import React from "react";
import { CrescentMoon } from "./VectorGraphics";

const ThemeButton = () => {
    return (
        <>
            <div className="bg-white h-8 w-9 flex justify-center items-center rounded-xl border">
                <CrescentMoon width={'15px'} height={'15px'} />
            </div>
        </>
    );
}

export default ThemeButton;