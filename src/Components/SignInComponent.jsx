import React, { useState, useContext } from "react";
import AuthButton from "./AuthButton"
import { Cross } from "./VectorGraphics";
import PrimaryInputField from "./PrimaryInputField";
import { Link, useNavigate } from "react-router-dom";
import { register } from "./Api";
import UserContext from "../UserContext";
import { toast } from "react-toastify";

const SignInComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailAddressError, setEmailAddressError] = useState('');
    const [numberError, setNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const notify = () => toast.success('Successfully Registered!');

    const navigate = useNavigate();
    const { setAccess } = useContext(UserContext);

    const handleFnameChange = (value) => {
        setFirstName(value);
        setFirstNameError('');
    }

    const handleLnameChange = (value) => {
        setLastName(value);
        setLastNameError('');
    }

    const handleEmailChange = (value) => {
        setEmailAddress(value);
        setEmailAddressError('');
    }

    const handleNumberChange = (value) => {
        setNumber(value);
        setNumberError('');
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
        setPasswordError('');
    }

    const handleConfirmPassword = (value) => {
        setConfirmPassword(value);
        setConfirmPasswordError('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password != confirmPassword) {
            setConfirmPasswordError("Password don't match!");
            return;
        }
        try {
            const response = await register({ firstName, lastName, emailAddress, number, password });
            if (response.signInErrors) {
                setFirstNameError(response.signInErrors.firstName);
                setLastNameError(response.signInErrors.lastName);
                setNumberError(response.signInErrors.contact);
                setEmailAddressError(response.signInErrors.email);
                setPasswordError(response.signInErrors.password);
            }
            else {
                console.log("Successfully Registered");
                notify();
                setAccess(true);
                navigate('/services');
            }
        } catch (error) {
            console.log("Error sending signin");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="fixed flex justify-center items-center inset-0 backdrop-blur-sm z-40 overflow-y-auto">
                {/* Sign in section */}
                <div className="relative top-36 p-20 pt-10 pb-10 flex flex-col items-center gap-y-4 max-w-3/4 w-1/2  rounded-lg z-50 bg-white drop-shadow-md">
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
                        <div className="flex flex-row justify-between">
                            <PrimaryInputField title={"First Name"} type={"text"} placeHolderText={"Sandesh"} onDataChanged={handleFnameChange} error={firstNameError} />
                            <PrimaryInputField title={"Last Name"} type={"text"} placeHolderText={"Ghimire"} onDataChanged={handleLnameChange} error={lastNameError} />
                        </div>
                        <PrimaryInputField title={"Email Address"} type={"email"} placeHolderText={"Sandeshghimire202@gmail.com"} onDataChanged={handleEmailChange} error={emailAddressError} />
                        <PrimaryInputField title={"Mobile No."} type={"number"} placeHolderText={"+977 9846930428"} onDataChanged={handleNumberChange} error={numberError} />
                        <PrimaryInputField title={"password"} type={"password"} placeHolderText={"********"} onDataChanged={handlePasswordChange} error={passwordError} />
                        <PrimaryInputField title={"confirm password"} type={"password"} placeHolderText={"********"} onDataChanged={handleConfirmPassword} error={confirmPasswordError} />
                    </div>

                    <div className=" flex flex-col items-center gap-y-3">
                        <AuthButton title={"Sign in"} />
                        <p className=" font-poppins font-medium text-tBlue text-sm">Already have an account? <Link to='/login'><span className=" text-cPurple">Log in</span></Link></p>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SignInComponent;