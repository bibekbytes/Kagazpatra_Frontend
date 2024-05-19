import React from "react";
import ServiceItems from "./Components/ServiceItems";

const ServicesSection = () => {
    return (
        <>
            <div className=" bg-white h-[352px] w-full flex flex-col items-center gap-y-10 pt-8 pb-8">
                {/* Title div */}
                <p className=" font-poppins font-bold text-tBlue text-3xl">Services</p>

                {/* Service Item div */}
                <div className=" flex flex-row w-full items-center justify-evenly">
                    <ServiceItems logoSrc={"/police.png"} title={"Police Report"} />
                    <ServiceItems logoSrc={"/gov.png"} title={"IRD Document"} />
                    <ServiceItems logoSrc={"/gov.png"} title={"Malpot Document"} />
                    <ServiceItems logoSrc={"/gov.png"} title={"Municipality Document"} />
                    <ServiceItems logoSrc={"/gov.png"} title={"Ward Document"} />


                </div>
            </div>
        </>
    );
}

export default ServicesSection;