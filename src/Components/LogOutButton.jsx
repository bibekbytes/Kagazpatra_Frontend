import React, { useContext } from "react";
import { LogoutIcoon } from "./VectorGraphics";
import { logout } from "./Api";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import { toast } from "react-toastify";

const LogOutButton = ({ title }) => {

    const { setAccess } = useContext(UserContext);

    const notify = () => toast("See you again!");

    const navigate = useNavigate();
    const handleLogOut = async () => {

        console.log('Logging out');
        try {
            await logout();
            navigate('/');
            notify();
            setAccess(false);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <button className=" border h-[39px] flex flex-row items-center w-full pl-10 gap-x-4 " onClick={handleLogOut}>
                {/* Title */}
                <p className=" font-poppins font-medium text-tBlue text-sm">{title}</p>
                {/* icon */}
                <div>
                    <LogoutIcoon />
                </div>
            </button>
        </>
    );
}

export default LogOutButton;