import React, { useState, useContext } from "react";
import AuthButton from "./AuthButton"
import { Cross } from "./VectorGraphics";
import PrimaryInputField from "./PrimaryInputField";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./Api";
import UserContext from "../UserContext";
import { toast } from "react-toastify";
import 'react-toastify/ReactToastify.css';

const LoginComponent = () => {

    const { setAccess } = useContext(UserContext);
    const navigate = useNavigate();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [emailAddressError, setEmailAddressError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const notify = () => toast.success('Successfully Logged in!');

    const handleEmailChange = (value) => {
        setEmailAddress(value);
        setEmailAddressError('');
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
        setPasswordError('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ emailAddress, password });
            if (response.logInErrors) {
                setEmailAddressError(response.logInErrors.email);
                setPasswordError(response.logInErrors.password);
            }
            else {
                console.log("Successfully Logged in");
                notify();
                setAccess(true);
                navigate('/services');
            }
        } catch (error) {
            console.log("Error Sending login");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="fixed flex justify-center items-center inset-0 backdrop-blur-sm z-40 overflow-y-auto ">
                {/* Sign in section */}
                <div className="relative p-20 pt-10 pb-10 flex flex-col items-center gap-y-4 max-w-3/4 w-1/2  rounded-lg z-50 bg-white drop-shadow-md">
                    <div className="flex flex-col items-center justify-center w-full">
                        {/* cross button */}
                        <div className="absolute right-10 top-10 flex items-center justify-end w-full ">
                            <Link to='/'><Cross height={"20px"} width={"20px"} /></Link>
                        </div>
                        {/* company logo */}
                        <img src="/companyLogo.png" className="w-3/4" />
                        <p className="font-poppins font-semibold text-cPurple text-sm">Register New Account</p>
                    </div>

                    {/* form section */}
                    <div className="flex flex-col gap-y-3  w-full">
                        <PrimaryInputField title={"Email Address"} type={"email"} placeHolderText={"Sandeshghimire202@gmail.com"} onDataChanged={handleEmailChange} error={emailAddressError} />
                        <PrimaryInputField title={"password"} type={"password"} placeHolderText={"********"} onDataChanged={handlePasswordChange} error={passwordError} />
                        <p className=" font-poppins font-medium text-cPurple text-sm">Forgot password?</p>
                    </div>

                    <div className=" flex flex-col items-center gap-y-3">
                        <AuthButton title={"Login"} />
                        <p className=" font-poppins font-medium text-tBlue text-sm">Not Register Yet? <Link to='/register'><span className=" text-cPurple">Sign in</span></Link></p>
                    </div>

                </div>
            </form>
        </>
    );
}

export default LoginComponent;