import React from "react";
import SecondaryButton from "./Components/SecondaryButton";
import SecondaryInputField from "./Components/SecondaryInputField";

const FormDocs = () => {
    return (
        <>
            {/* Form section for doc */}
            <div className=" mb-10 flex flex-col items-end gap-y-7">
                <div className=" bg-white rounded-lg p-8 pr-12 pl-12 grid  gap-5 grid-cols-3 border">
                    <SecondaryInputField title={"Your First Name*"} placeHolderText={"Sandesh"} type={"text"} />
                    <SecondaryInputField title={"Your Last Name*"} placeHolderText={"Ghimire"} type={"text"} />
                    <SecondaryInputField title={"Your Address*"} placeHolderText={"Sainamaina"} type={"text"} />
                    <SecondaryInputField title={"Your Company Name*"} placeHolderText={"Infosys Pvt.Ltd"} type={"text"} />
                </div>
                <SecondaryButton title={"Generate"} linkTo={"/services/lekhapadhi/generate"} />
            </div>
        </>
    );
}

export default FormDocs;