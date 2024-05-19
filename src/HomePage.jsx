import React from "react";
import NavigationSection from "./NavigationSection";
import LandingSection from "./LandingSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import ProfessionalsSection from "./ProfessionalsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import CopyRightSection from "./CopyRightSection";
import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Outlet />
            <NavigationSection />
            <LandingSection />
            <ServicesSection />
            <AboutSection />
            <ProfessionalsSection />
            <ContactSection />
            <FooterSection />
            <CopyRightSection />
        </>
    );
}

export default HomePage;