import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // const token = sessionStorage.getItem("token");
  const token = useSelector((state => state.tokenAuth) )

  if (!token) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute