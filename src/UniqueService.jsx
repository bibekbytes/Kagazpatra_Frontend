import React from "react";
import ItemDisplay from "./Components/ItemDisplay";
import LocationDisplay from "./Components/LocationDisplay";
import { Pen2 } from "./Components/VectorGraphics";
import DropdownItem from "./Components/DropdownItem";
import GeneratedResult from "./GeneratedResult";
import FormDocs from "./FromDocs";
import { Outlet } from "react-router-dom";

const UniqueService = () => {
    return (
        <>
            {/* Form for items */}
            <div className="h-full w-full ">
                {/* item and location display */}
                <div className="flex flex-row justify-between items-center">
                    <ItemDisplay title={"Lekhapadhi"} icon={<Pen2 />} />
                    <LocationDisplay Province={"Gandaki"} Municipality={"Phalewas"} Ward={"9"} />
                </div>
                {/* Document info filling and generation */}
                <div className=" ml-24 pt-8 flex flex-col gap-y-10">
                    {/* type of doc */}
                    <div className="flex flex-col gap-y-2">
                        <p className=" font-poppins text-tBlue font-medium">Select Required Document</p>
                        <DropdownItem title={"Document"} Items={["Rajinama Sifarish", "Namsari", "ExampleDoc2", "ExampleDoc3"]} />
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default UniqueService;