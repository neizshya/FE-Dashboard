import React, { useState } from "react";
import "./NavbarComp.css";
import { NavLink } from "react-router-dom";
import Icon1Expandmore from "../../assets/icons/expand_more.svg";
import Icon2Expandless from "../../assets/icons/expand_less.svg";
import Icon3Flags from "../../assets/icons/Flag.svg";
import Icon4Notification from "../../assets/icons/notifications_active.svg";
import Icon5Profilepic from "../../assets/icons/Rectangle 113.svg";
import Icon6Membership from "../../assets/icons/app membership Rectangle 112.svg";
import Icon7Offlineclass from "../../assets/icons/app Offline class Rectangle 112.svg";
import Icon8Onlineclass from "../../assets/icons/app Online class Rectangle 112.svg";
import Icon9Workout from "../../assets/icons/app Work out Rectangle 112.svg";
import Icon10Topnews from "../../assets/icons/app Top news Rectangle 112.svg";
import Icon11Facility from "../../assets/icons/app Facilities Rectangle 112.svg";

import ButtonComponent from "../../elements/Buttons/ButtonComponent";
import SearchTopBar from "../../elements/InputSearch/SearchTopBar";

const NavbarComp = ({
  isExpanded,
  setExpandState,
  isApps,
  setExpandApps,
  onChange,
  value,
  isVisible,
  setIsVisible
}) => {
  // const [isVisible, setIsVisible] = useState(false);
  const handleAppsClick = () => {
    // setExpandApps(!isApps);
  };

  return (
    <div className="top-nav-container">
      <div className="top-nav-heading col-3">
        <button
          className={
            isExpanded ? "hamburger hamburger-in" : "hamburger-NX hamburger-out"
          }
          onClick={() => setExpandState(!isExpanded)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="top-nav-search col-3">
        <SearchTopBar
          type={"search"}
          name={"searchtop"}
          id={"nav-search"}
          placeholder={"search"}
          onChange={onChange}
          value={value}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        ></SearchTopBar>
      </div>
      <div
        className={`${isVisible ? "top-nav-mid-NX" : "top-nav-mid"} btn-group col-3`}
      >
        {/* <ButtonComponent
            type={"button"}
            className={isApps ? "btn-navbar-apps" : "btn-navbar-apps-NX"}
            buttonName={isApps ? "Apps" : "Apps"}
            onClick={() => setExpandApps(!isApps)}
            imgUrlEnd={isApps ? Icon2Expandless : Icon1Expandmore}
            imgClassName={"btn-navbar-apps-icon"}
          ></ButtonComponent> */}
        <button
          className="buttonHeader fw-semibold"
          type="button"
          data-bs-toggle="dropdown"
          onClick={handleAppsClick}
        >
          Apps
          <img
            className="ms-3"
            src={isApps ? Icon2Expandless : Icon1Expandmore}
            alt=""
            width={"11vw"}
          />
        </button>
        <ul
          className="dropdown-menu pt-2 shadow"
          style={{
            backgroundColor: `var(--Neutral-White-100)`,
            borderRadius: "30px",
          }}
        >
          <li style={{ width: "38vw", margin: "8px 28px" }}>
            <div className="">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <NavLink to={"/"}>
                        <div
                          className="cardHeader rounded-3"
                          style={{ width: "15vw" }}
                        >
                          <div className="row ">
                            <div className="col-3  mt-2">
                              <img
                                className="ms-2"
                                src={Icon6Membership}
                                alt=""
                                width={"45vw"}
                              />
                            </div>
                            <div className="col-9">
                              <p className="m-0 fs-6 fw-bold text-black">
                                Membership
                              </p>
                              <p className="text-black">
                                Get limited to all features
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-6">
                      <NavLink to={"/"}>
                        <div
                          className="cardHeader rounded-3"
                          style={{ width: "15vw" }}
                        >
                          <div className="row ">
                            <div className="col-3  mt-2">
                              <img
                                className="ms-2"
                                src={Icon9Workout}
                                alt=""
                                width={"45vw"}
                              />
                            </div>
                            <div className="col-9">
                              <p className="m-0 fs-6 fw-bold text-black">
                                Work Out Video
                              </p>
                              <p className="text-black">Watch All Videos</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <NavLink to={"/"}>
                        <div
                          className="cardHeader rounded-3"
                          style={{ width: "15vw" }}
                        >
                          <div className="row ">
                            <div className="col-3  mt-2">
                              <img
                                className="ms-2"
                                src={Icon7Offlineclass}
                                alt=""
                                width={"45vw"}
                              />
                            </div>
                            <div className="col-9">
                              <p className="m-0 fs-6 fw-bold text-black">
                                Offline Class
                              </p>
                              <p className="text-black">Join class variety</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-6">
                      <NavLink to={"/"}>
                        <div
                          className="cardHeader rounded-3"
                          style={{ width: "15vw" }}
                        >
                          <div className="row ">
                            <div className="col-3  mt-2">
                              <img
                                className="ms-2"
                                src={Icon10Topnews}
                                alt=""
                                width={"45vw"}
                              />
                            </div>
                            <div className="col-9">
                              <p className="m-0 fs-6 fw-bold text-black">
                                Top News
                              </p>
                              <p className="text-black">
                                Healthy recipes & tips
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <NavLink to={"/"}>
                        <div
                          className="cardHeader rounded-3"
                          style={{ width: "15vw" }}
                        >
                          <div className="row ">
                            <div className="col-3  mt-2">
                              <img
                                className="ms-2"
                                src={Icon8Onlineclass}
                                alt=""
                                width={"45vw"}
                              />
                            </div>
                            <div className="col-9">
                              <p className="m-0 fs-6 fw-bold text-black">
                                Online Class
                              </p>
                              <p className="text-black">Keep healthy</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-6">
                      <NavLink to={"/"}>
                        <div
                          className="cardHeader rounded-3"
                          style={{ width: "15vw" }}
                        >
                          <div className="row ">
                            <div className="col-3  mt-2">
                              <img
                                className="ms-2"
                                src={Icon11Facility}
                                alt=""
                                width={"45vw"}
                              />
                            </div>
                            <div className="col-9">
                              <p className="m-0 fs-6 fw-bold text-black">
                                Facilities
                              </p>
                              <p className="text-black">Complete facilities</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="nav-end col-3">
        <ButtonComponent
          type={"button"}
          className={"btn-navbar-flag"}
          onClick={() => setExpandApps(!isApps)}
          imgUrlStart={Icon3Flags}
          imgClassName={"btn-navbar-flag-icon"}
        ></ButtonComponent>

        <ButtonComponent
          type={"button"}
          className={"btn-navbar-flag"}
          onClick={() => setExpandApps(!isApps)}
          imgUrlStart={Icon4Notification}
          imgClassName={"btn-navbar-flag-icon"}
        ></ButtonComponent>
        <NavLink to={"/"}>
          <ButtonComponent
            type={"button"}
            className={"btn-navbar-flag"}
            onClick={() => setExpandApps(!isApps)}
            imgUrlStart={Icon5Profilepic}
            imgClassName={"btn-navbar-flag-icon"}
          ></ButtonComponent>
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarComp;

//kalau mau pake navbar jangan lupa panggil atau buat di app.jsx

// buat state burgernya dipencet mbesar kecilkan sidebar. tpi disidebar jg bisa dibesar kecilkan dengan mengarahkan cursor ke sidebarnya saja.
// const [isExpanded, setExpandState] = useState(false);
// buat state tombol appsnya udh aja kayaknya males mbuat element card appsnya :v
// const [isApps, setExpandApps] = useState(false);

//catatan navbar kurang responsive css
