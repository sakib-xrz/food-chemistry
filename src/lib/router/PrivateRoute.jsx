/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { currentUser, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <Loader />;
    }

    if (currentUser) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;