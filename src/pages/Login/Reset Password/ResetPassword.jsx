/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import bgimg from "../../../assets/gif/gif-1.gif";
import forgoticons from "../../../assets/icons/forgot_password.svg";
import "./ResetPassword.css";
import TextField from "../../../elements/TextField/TextField";
import ButtonComponent from "../../../elements/Buttons/ButtonComponent";
import TextFieldPassword from "../../../elements/TextField/TextFieldPassword";
import success from "../../../assets/icons/Check.svg";
import fail from "../../../assets/icons/Fail.svg";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
const ResetPassword = () => {
  const { id_user } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responses, setResponses] = useState(404);
  const [Error, setError] = useState("error blablabla");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowSuccess(false);
    setShowFail(false);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (responses === 200) {
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setShowFail(true);
    }
  };
  const ModalRespons = ({ image, title, subtitle, show }) => {
    return (
      <>
        <Modal show={show} onHide={handleCloseModal} centered>
          <Modal.Body>
            <div className="col-12 text-center">
              <img src={image} alt="" />
              <p className="fs-4 fw-semibold">{title}</p>
              <p className="fs-5 fw-normal">{subtitle}</p>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  const largeView = () => {
    return (
      <>
        <div
          className={`container-fluid background-image d-flex align-items-center justify-content-center `}>
          <div className="body-card container p-5 ms-5">
            <div className="col-12">
              <p className="fs-4 fw-semibold">Reset Your Password</p>
            </div>
            <div className="col-lg-4 col-12 ">
              <p className=" fw-semibold text-secondary">
                {/*eslint-disable-next-line react/no-unescaped-entities */}
                To reset your password please confirm here
              </p>
            </div>
            <div className="col-12 mb-4">
              <TextFieldPassword
                placeholder={"******"}
                label="New Password"
                id={"newpassword"}
                name={"newpassword"}
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                classNameLabel={"mb-2 text-secondary"}
              />
            </div>
            <div className="col-12 mb-5">
              <TextFieldPassword
                placeholder={"******"}
                label="Confirm Password"
                id={"confirmpassword"}
                name={"confirmpassword"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                classNameLabel={"mb-2 text-secondary"}
              />
              {newPassword !== confirmPassword ? (
                <p className="mt-3">
                  New password and confirm password does not match
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="col-12">
              {newPassword !== "" &&
              confirmPassword !== "" &&
              newPassword === confirmPassword ? (
                <ButtonComponent
                  type={"submit"}
                  className={"btn-forgot-password fs-5"}
                  id={"submitEmail"}
                  onClick={onSubmitHandle}
                  buttonName={"Submit"}
                />
              ) : (
                <button
                  id="disabledbutton"
                  className="btn w-100 fw-semibold fs-5"
                  style={{ backgroundColor: "#DFDFDF" }}
                  disabled>
                  Submit
                </button>
              )}
            </div>
            <div></div>
          </div>
        </div>
        {/* Modal Success*/}
        {
          <ModalRespons
            image={success}
            title={"Password has been changed"}
            subtitle={"Log back in to log in"}
            show={showSuccess}
          />
        }
        {/* Modal Fail*/}
        {
          <ModalRespons
            image={fail}
            title={`Error : ${Error}`}
            subtitle={"Please try again"}
            show={showFail}
          />
        }
      </>
    );
  };
  const smToMedView = () => {
    return (
      <>
        <div className="container-fluid d-flex align-items-center justify-content-center sm-to-mid">
          <div className="body-card container p-5 ">
            <div className="col-12">
              <p className="fs-4 fw-semibold">Reset Your Password</p>
            </div>
            <div className="col-lg-4 col-12 ">
              <p className=" fw-semibold text-secondary">
                {/*eslint-disable-next-line react/no-unescaped-entities */}
                To reset your password please confirm here
              </p>
            </div>
            <div className="col-12 mb-4">
              <TextFieldPassword
                placeholder={"******"}
                label="New Password"
                id={"newpassword"}
                name={"newpassword"}
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                classNameLabel={"mb-2 text-secondary"}
              />
            </div>
            <div className="col-12 mb-5">
              <TextFieldPassword
                placeholder={"******"}
                label="Confirm Password"
                id={"confirmpassword"}
                name={"confirmpassword"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                classNameLabel={"mb-2 text-secondary"}
              />
              {newPassword !== confirmPassword ? (
                <p className="mt-3">
                  New password and confirm password does not match
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="col-12">
              {newPassword !== "" &&
              confirmPassword !== "" &&
              newPassword === confirmPassword ? (
                <ButtonComponent
                  type={"submit"}
                  className={"btn-forgot-password fs-5"}
                  id={"submitEmail"}
                  onClick={onSubmitHandle}
                  buttonName={"Submit"}
                />
              ) : (
                <button
                  id="disabledbutton"
                  className="btn w-100 fw-semibold fs-5"
                  style={{ backgroundColor: "#DFDFDF" }}
                  disabled>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Modal */}
        {
          <ModalRespons
            image={success}
            title={"Password has been changed"}
            subtitle={"Log back in to log in"}
            show={showSuccess}
          />
        }
        {
          <ModalRespons
            image={fail}
            title={`Error : ${Error}`}
            subtitle={"Please try again"}
            show={showFail}
          />
        }
      </>
    );
  };
  return (
    <>
      <div className="d-none d-lg-block">{largeView()}</div>
      <div className="d-block d-lg-none">{smToMedView()}</div>
      {/* <img src={bgimg} alt="" /> */}
    </>
  );
};

export default ResetPassword;
