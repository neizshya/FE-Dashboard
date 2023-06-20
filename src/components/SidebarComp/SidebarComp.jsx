import React, { useState } from "react";
import "../../elements/Buttons/ButtonComponent.css";
import "./SidebarComp.css";
import "./SidebarDropdown.css";
import { NavLink } from "react-router-dom";
import Icon1Gym from "../../assets/icons/exercise.svg";
import Icon2Invoices from "../../assets/icons/receipt_long (1).svg";
import Icon3Transactions from "../../assets/icons/monetization_on.svg";
import Icon4Membership from "../../assets/icons/remember_me.svg";
import Icon5Bookingclass from "../../assets/icons/sports_gymnastics.svg";
import Icon6Newsletter from "../../assets/icons/explore.svg";
import Icon7Users from "../../assets/icons/person.svg";
import Icon8Admin from "../../assets/icons/manage_accounts.svg";
import Icon9Feedback from "../../assets/icons/help.svg";
import Icon10LandingPages from "../../assets/icons/gallery_thumbnail.svg";
import Icon11Logout from "../../assets/icons/logout_red.svg";
import Icon12Expandmore from "../../assets/icons/expand_more.svg";
import Icon13Expandless from "../../assets/icons/expand_less.svg";
import Icon14Dotblack from "../../assets/icons/Offline_dot.svg";
import ButtonComponent from "../../elements/Buttons/ButtonComponent";
import { useDispatch } from "react-redux";
import { addToken } from "../../redux/Slice/tokenSlice";
import { addUser } from "../../redux/Slice/usersSlice";

const SidebarComp = ({ isExpanded, setExpandState }) => {
  const [isClassDropdown, setClassDropdown] = useState(false);
  const [isItemDropdown, setItemDropdown] = useState(false);
  const dispatch = useDispatch();
  const handleClassDropdown = () => {
    setClassDropdown(!isClassDropdown);
  };

  const handleItemDropdown = () => {
    setItemDropdown(!isItemDropdown);
  };

  const handleMouseEnter = () => {
    setExpandState(true);
  };

  const handleMouseLeave = () => {
    setExpandState(false);
  };
  const handleLogout = () => {
    dispatch(addToken(""));
    dispatch(addUser(""));
  };
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded ? (
            <div className="nav-brand">GoFit</div>
          ) : (
            <div className="nav-brand-NX">
              GoFit
              {/* <img alt="brand logo" src="" className="rounded-circle" />{" "} */}
            </div>
          )}
        </div>
        <div className="nav-menu">
          <h1 className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}>
            HOME
          </h1>
          <NavLink to={"/dashboard"}>
            <ButtonComponent
              type={"button"}
              className={isExpanded ? "btn-sidebar" : "btn-sidebar-NX"}
              buttonName={isExpanded ? "Gym" : ""}
              imgUrlStart={Icon1Gym}
              imgClassName={
                isExpanded ? "btn-sidebar-icon" : "btn-sidebar-icon-NX"
              }></ButtonComponent>
          </NavLink>
          <NavLink to={"/invoices"}>
            <ButtonComponent
              type={"button"}
              className={isExpanded ? "btn-sidebar" : "btn-sidebar-NX"}
              buttonName={isExpanded ? "Invoices" : ""}
              imgUrlStart={Icon2Invoices}
              imgClassName={
                isExpanded ? "btn-sidebar-icon" : "btn-sidebar-icon-NX"
              }></ButtonComponent>
          </NavLink>
          <NavLink to={"/transaction"}>
            <ButtonComponent
              type={"button"}
              className={isExpanded ? "btn-sidebar" : "btn-sidebar-NX"}
              buttonName={isExpanded ? "Transactions" : ""}
              imgUrlStart={Icon3Transactions}
              imgClassName={
                isExpanded ? "btn-sidebar-icon" : "btn-sidebar-icon-NX"
              }></ButtonComponent>
          </NavLink>

          <h1 className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}>
            Apps
          </h1>

          <NavLink to={"/membership"}>
            <ButtonComponent
              type={"button"}
              className={isExpanded ? "btn-sidebar" : "btn-sidebar-NX"}
              buttonName={isExpanded ? "Membership" : ""}
              imgUrlStart={Icon4Membership}
              imgClassName={
                isExpanded ? "btn-sidebar-icon" : "btn-sidebar-icon-NX"
              }></ButtonComponent>
          </NavLink>
          <div className={isClassDropdown ? "dropdown-sidebar" : ""}>
            <ButtonComponent
              type={"button"}
              // className={isExpanded ? "btn-sidebar" : "btn-sidebar-NX"}
              className={
                isExpanded
                  ? isClassDropdown
                    ? "btn-sidebar dropbuttonmenu-class active-menu-button-class"
                    : "btn-sidebar"
                  : isClassDropdown
                  ? "btn-sidebar-NX active-menu-button-class"
                  : "btn-sidebar-NX"
              }
              buttonName={isExpanded ? "Class" : ""}
              imgUrlStart={Icon5Bookingclass}
              imgClassName={
                isExpanded ? "btn-sidebar-icon" : "btn-sidebar-icon-NX"
              }
              imgUrlEnd={
                isClassDropdown
                  ? isExpanded
                    ? Icon13Expandless
                    : null
                  : isExpanded
                  ? Icon12Expandmore
                  : null
              }
              onClick={handleClassDropdown}></ButtonComponent>
            {isExpanded && isClassDropdown ? (
              <div className="dropdown-sidebar-menu-one">
                <li className="menu-item sidebar-drop-menu-option">
                  <NavLink to={"/booking"}>
                    <ButtonComponent
                      type={"button"}
                      className={"btn-sidebar-drop-menu"}
                      buttonName={"Manage Booking"}
                    />
                  </NavLink>
                  <NavLink to={"onlineClass"}>
                    <ButtonComponent
                      type={"button"}
                      className={"btn-sidebar-drop-menu"}
                      buttonName={"Manage Class"}
                    />
                  </NavLink>
                </li>
              </div>
            ) : null}
            {!isExpanded && isClassDropdown ? (
              <div
                className={
                  isExpanded
                    ? "dropdown-sidebar-menu-one"
                    : "dropdown-sidebar-menu-one-NX"
                }>
                <li
                  className={
                    isExpanded
                      ? "menu-item sidebar-drop-menu-option"
                      : "sidebar-drop-menu-option-NX"
                  }>
                  <NavLink to={"/booking"}>
                    <ButtonComponent
                      type={"button"}
                      className={
                        isExpanded
                          ? "btn-sidebar-drop-menu"
                          : "btn-sidebar-drop-menu-NX"
                      }
                      buttonName={isExpanded ? "Manage Booking" : ""}
                      imgUrlStart={isExpanded ? "" : Icon14Dotblack}
                    />
                  </NavLink>
                  <NavLink to={"onlineClass"}>
                    <ButtonComponent
                      type={"button"}
                      className={
                        isExpanded
                          ? "btn-sidebar-drop-menu"
                          : "btn-sidebar-drop-menu-NX"
                      }
                      buttonName={isExpanded ? "Manage Class" : ""}
                      imgUrlStart={isExpanded ? "" : Icon14Dotblack}
                    />
                  </NavLink>
                </li>
              </div>
            ) : null}
          </div>

          <div className={isItemDropdown ? "dropdown-sidebar" : ""}>
            <ButtonComponent
              type={"button"}
              // className={isExpanded ? "btn-sidebar" : "btn-sidebar-NX"}
              className={
                isExpanded
                  ? isItemDropdown
                    ? "btn-sidebar dropbuttonmenu-item active-menu-button-item"
                    : "btn-sidebar"
                  : isItemDropdown
                  ? "btn-sidebar-NX active-menu-button-class"
                  : "btn-sidebar-NX"
              }
              buttonName={isExpanded ? "New Item" : ""}
              imgUrlStart={Icon6Newsletter}
              imgClassName={
                isExpanded ? "btn-sidebar-icon" : "btn-sidebar-icon-NX"
              }
              imgUrlEnd={
                isItemDropdown
                  ? isExpanded
                    ? Icon13Expandless
                    : null
                  : isExpanded
                  ? Icon12Expandmore
                  : null
              }
              onClick={handleItemDropdown}></ButtonComponent>
            {isExpanded && isItemDropdown ? (
              <div className="dropdown-sidebar-menu-two">
                <li className="menu-item sidebar-drop-menu-option">
                  <NavLink to={"/articles"}>
                    <ButtonComponent
                      type={"button"}
                      className={"btn-sidebar-drop-menu"}
                      buttonName={"Articles"}
                    />
                  </NavLink>
                  <NavLink to={"/training"}>
                    <ButtonComponent
                      type={"button"}
                      className={"btn-sidebar-drop-menu"}
                      buttonName={"Training"}
                    />
                  </NavLink>
                </li>
              </div>
            ) : null}
            {!isExpanded && isItemDropdown ? (
              <div
                className={
                  isExpanded
                    ? "dropdown-sidebar-menu-one"
                    : "dropdown-sidebar-menu-one-NX"
                }>
                <li
                  className={
                    isExpanded
                      ? "menu-item sidebar-drop-menu-option"
                      : "sidebar-drop-menu-option-NX"
                  }>
                  <NavLink to={"/articles"}>
                    <ButtonComponent
                      type={"button"}
                      className={
                        isExpanded
                          ? "btn-sidebar-drop-menu"
                          : "btn-sidebar-drop-menu-NX"
                      }
                      buttonName={isExpanded ? "Articles" : ""}
                      imgUrlStart={isExpanded ? "" : Icon14Dotblack}
                    />
                  </NavLink>
                  <NavLink to={"/training"}>
                    <ButtonComponent
                      type={"button"}
                      className={
                        isExpanded
                          ? "btn-sidebar-drop-menu"
                          : "btn-sidebar-drop-menu-NX"
                      }
                      buttonName={isExpanded ? "Training" : ""}
                      imgUrlStart={isExpanded ? "" : Icon14Dotblack}
                    />
                  </NavLink>
                </li>
              </div>
            ) : null}
          </div>
          <NavLink to={"/managecustomer"}>
            <ButtonComponent
              type={"button"}
              className={isExpanded ? "btn-sidebar" : "btn-sidebar-NX"}
              buttonName={isExpanded ? "Users" : ""}
              imgUrlStart={Icon7Users}
              imgClassName={
                isExpanded ? "btn-sidebar-icon" : "btn-sidebar-icon-NX"
              }></ButtonComponent>
          </NavLink>

          <h1 className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}>
            Pages
          </h1>
          <NavLink to={"/manageadmin"}>
            <ButtonComponent
              type={"button"}
              className={isExpanded ? "btn-sidebar" : "btn-sidebar-NX"}
              buttonName={isExpanded ? "Admin Setting" : ""}
              imgUrlStart={Icon8Admin}
              imgClassName={
                isExpanded ? "btn-sidebar-icon" : "btn-sidebar-icon-NX"
              }></ButtonComponent>
          </NavLink>
          <NavLink to={"/managesfeedback"}>
            <ButtonComponent
              type={"button"}
              className={isExpanded ? "btn-sidebar" : "btn-sidebar-NX"}
              buttonName={isExpanded ? "Feedback" : ""}
              imgUrlStart={Icon9Feedback}
              imgClassName={
                isExpanded ? "btn-sidebar-icon" : "btn-sidebar-icon-NX"
              }></ButtonComponent>
          </NavLink>
          <NavLink to={"https://develop--vocal-wisp-91820f.netlify.app/"}>
            <ButtonComponent
              type={"button"}
              className={isExpanded ? "btn-sidebar" : "btn-sidebar-NX"}
              buttonName={isExpanded ? "Landing Pages" : ""}
              imgUrlStart={Icon10LandingPages}
              imgClassName={
                isExpanded ? "btn-sidebar-icon" : "btn-sidebar-icon-NX"
              }></ButtonComponent>
          </NavLink>

          <h1 className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}>
            Auth
          </h1>
          <NavLink to={"/"} onClick={handleLogout}>
            <ButtonComponent
              type={"button"}
              className={isExpanded ? "btn-logout" : "btn-sidebar-NX"}
              buttonName={isExpanded ? "Log out" : ""}
              imgUrlStart={Icon11Logout}
              imgClassName={
                isExpanded ? "btn-sidebar-icon" : "btn-sidebar-icon-NX"
              }></ButtonComponent>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SidebarComp;

//kalau mau pake sidebar jangan lupa panggil atau buat di app.jsx

// buat state state membesar kecilkan sidebar. bisa dibesar kecilkan dengan mengarahkan cursor ke sidebarnya saja.
// const [isExpanded, setExpandState] = useState(false);
// ga tau cara ngehilangkan underline dari navlink

//catatan sidebar sudah sama css responsivenya kurang underline aja
