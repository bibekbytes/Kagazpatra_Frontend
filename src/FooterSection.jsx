import React from "react";
import FooterItems from "./Components/FooterItems";

const CompanyItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/" },
]

const ProductsItems = [
    { name: "Kuruwa", path: "/" },
    { name: "Book Your Lawyer", path: "/" },
]

const SupportItems = [
    { name: "Help Topics", path: "/" },
    { name: "FAQ's", path: "/" },
]

const TrustItems = [
    { name: "Terms and conditions", path: "/" },
    { name: "Privacy Policy", path: "/" },
    { name: "Cookies Prefrences", path: "/" },
    { name: "Licenses", path: "/" },
    { name: "Security", path: "/" },
]
const FooterSection = () => {
    return (
        <>
            <div className=" bg-white w-full flex flex-row pt-10 pb-10 justify-between">
                {/* company logo */}
                <img src="/companyLogo.png" className=" h-[100px]" />
                {/* Footer Items */}
                <div className=" flex flex-row justify-evenly w-full items-start pt-8">
                    <FooterItems title={"Company"} Items={CompanyItems} />
                    <FooterItems title={"Products"} Items={ProductsItems} />
                    <FooterItems title={"Supports"} Items={SupportItems} />
                    <FooterItems title={"Trust and issues"} Items={TrustItems} />
                </div>
            </div>
        </>
    );
}

export default FooterSection;