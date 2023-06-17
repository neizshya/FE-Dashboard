import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import SidebarComp from "../components/SidebarComp/SidebarComp";
import NavbarComp from "../components/NavbarComp/NavbarComp";

const PrivateRoute = () => {
  const [isExpanded, setExpandState] = useState(false);
  // const [isApps, setExpandApps] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const token = useSelector((state) => state.tokenAuth.token_jwt);

  let user;
  token ? (user = true) : (user = false);

  if (!user) {
    return <Navigate to={"/"} replace />;
  } else {
    return (
      <>
        <div className="d-flex row sidebar-main-pages">
          <div>
            <SidebarComp
              isExpanded={isExpanded}
              setExpandState={setExpandState}
            />
          </div>
          {isExpanded ? (
            <div
              className="main-sidebar-margin"
              // style={{marginLeft: "220px"}}
            >
              <NavbarComp
                isExpanded={isExpanded}
                setExpandState={setExpandState}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
              />
              <Outlet/>
            </div>
          ) : (
            <div
              className="main-sidebar-margin-NX"
              //   style={{marginLeft: "80px"}}
            >
              <NavbarComp
                isExpanded={isExpanded}
                setExpandState={setExpandState}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
              />
              <Outlet/>
            </div>
          )}
        </div>
      </>
    );
  }
};
export default PrivateRoute;
