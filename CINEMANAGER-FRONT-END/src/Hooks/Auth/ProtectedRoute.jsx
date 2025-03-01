import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const role = localStorage.getItem("role");
    const location = useLocation();

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/signIn" replace state={{ from: location }} />;
    }

    return children;
};

export default ProtectedRoute;