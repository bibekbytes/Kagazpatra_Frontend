import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "./UserContext";

const ProtectedRoute = ({ children }) => {
    const { access } = useContext(UserContext);
    return access ? children : <Navigate to={'/register'} />;
}

export default ProtectedRoute;