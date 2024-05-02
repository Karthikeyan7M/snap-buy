import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth); //if we have userInfo it means we have logged in currently
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />; //replace->remember the past history when we comeback after login
};
export default PrivateRoute;
