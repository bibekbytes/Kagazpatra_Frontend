import React from "react";
import ProfessionalItems from "./Components/ProfessionalItems";

const ProfessionalsSection = () => {
    return (
        <>
            <div className=" bg-white h-[384px] w-full flex flex-col items-center justify-center gap-y-10">
                {/* title */}
                <p className=" text-4xl font-bold text-tBlue font-poppins"> <span className=" text-cPurple">Expert's</span> With Us</p>
                {/* professionals item */}
                <div className=" flex flex-row w-full items-center justify-evenly">
                    <ProfessionalItems imageSrc={"/boy1.jpg"} Name={"Avishek Shakya"} Role={"Inspector"} Address={"Kathmandu"} />
                    <ProfessionalItems imageSrc={"/boy2.jpg"} Name={"Bamdev Ghimire"} Role={"CIIA Officer"} Address={"Butwal"} />
                    <ProfessionalItems imageSrc={"/girl2.jpg"} Name={"Prakrity Chhetri"} Role={"CIIA Officer"} Address={"Pokhara"} />
                    <ProfessionalItems imageSrc={"/girl1.jpg"} Name={"Avanie Gurung"} Role={"CIIA Officer"} Address={"Nepalgunj"} />
                    <ProfessionalItems imageSrc={"/girl2.jpg"} Name={"Shreya Giri"} Role={"CIIA Officer"} Address={"Chitwan"} />
                </div>
            </div>
        </>
    );
}

export default ProfessionalsSection;
