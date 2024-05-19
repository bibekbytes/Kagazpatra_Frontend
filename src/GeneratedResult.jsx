import React from "react";
import SecondaryButton from "./Components/SecondaryButton";

const GeneratedResult = () => {
    return (
        <>
            {/* Diplay for generated document with printing and downloading buttons */}
            <div className="flex flex-row gap-x-4">
                <img src="/document.jpg" className=" h-[500px]" />
                <div className="flex flex-row gap-x-3 items-end">
                    <SecondaryButton title={"Print"} />
                    <SecondaryButton title={"Download"} />
                </div>
            </div>
        </>
    );
}

export default GeneratedResult;