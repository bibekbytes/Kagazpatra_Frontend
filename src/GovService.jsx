import React from "react";
import Item from "./Components/Item";
import { Pen2, Police, Car, Building } from "./Components/VectorGraphics";
const GovService = () => {
    return (
        <>
            {/* Items Div */}
            <div className="h-full w-full flex items-center justify-center">
                {/* Item Collection Grid */}
                <div className=" grid grid-cols-4 gap-y-10">
                    <Item title={"Lekhapadhi"} icon={<Pen2 />} linkTo={"/services/lekhapadhi"} />
                    <Item title={"Police Report"} icon={<Police />} />
                    <Item title={"Yatayat Karyalaya"} icon={<Car />} />
                    <Item title={"Woda Karyalaya"} icon={<Building />} />
                    <Item title={"Nagarpalika"} icon={<Building />} />
                    <Item title={"Karmachari Sanchya Kosh"} icon={<Building />} />
                    <Item title={"Yatayat Karyalaya"} icon={<Car />} />
                    <Item title={"Woda Karyalaya"} icon={<Building />} />
                </div>
            </div>
        </>
    );
}

export default GovService;


