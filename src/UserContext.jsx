// UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { verifyUser } from './Components/Api.jsx';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
    });
    const [access, setAccess] = useState(false);

    async function initialize() {
        console.log("Initialized");
        try {
            const response = await verifyUser();
            if (response.userData != null) {
                const userInfo = {
                    firstName: response.userData._firstName,
                    lastName: response.userData._lastName,
                    email: response.userData._email,
                    mobileNumber: response.userData._mobileNumber,
                };
                setUser(userInfo);
                setAccess(true);
                console.log("Token verified");
            } else {
                setAccess(false);
                console.log("Bad token");
            }
        } catch (error) {
            console.log("Error verifying user");
        }
    }

    useEffect(() => {
        initialize();
    }, []);

    return (
        <UserContext.Provider value={{ user, access, setUser, setAccess }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
