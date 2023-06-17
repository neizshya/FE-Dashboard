import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import SidebarComp from "../components/SidebarComp/SidebarComp";
import NavbarComp from "../components/NavbarComp/NavbarComp";
import { routes } from "../schema/route";


function Layout() {
    const [isExpanded, setExpandState] = useState(false);
    // const [isApps, setExpandApps] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    // const handleMouse = (e) => {
    //   setIsExpanded(true)
    // }
  
      return(
          <div className="d-flex row sidebar-main-pages">
            <div 
              >
              <SidebarComp isExpanded={isExpanded} setExpandState={setExpandState}/>
            </div>
            {isExpanded ? (
                <div className="main-sidebar-margin" 
                // style={{marginLeft: "220px"}}
                >
                    <NavbarComp isExpanded={isExpanded} setExpandState={setExpandState} isVisible={isVisible} setIsVisible={setIsVisible}/>
                    <Routes>
                        {
                            routes.map((route) => (
                                <Route
                                    path={route.path}
                                    element={<route.element/>}
                                    key={route.path}
                                />
                            ))
                        }
                    </Routes>
                </div>
            )
             : (
              <div className="main-sidebar-margin-NX" 
            //   style={{marginLeft: "80px"}}
              >
                <NavbarComp isExpanded={isExpanded} setExpandState={setExpandState} isVisible={isVisible} setIsVisible={setIsVisible}/>
                <Routes>
                    {
                        routes.map((route) => (
                            <Route
                                path={route.path}
                                element={<route.element/>}
                                key={route.path}
                            />
                        ))
                    }
                </Routes>
              </div>
            )
            }
          </div>
      )
}

export default Layout