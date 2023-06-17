import React, { useState } from "react";
import bgimg from "../../../assets/gif/gif-1.gif";
import forgoticons from "../../../assets/icons/forgot_password.svg";
import "./ForgotPassword.css";
import TextField from "../../../elements/TextField/TextField";
import ButtonComponent from "../../../elements/Buttons/ButtonComponent";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      alert("Please enter the right format for email");
    } else {
      // create condition if the email doesn't exist??
      alert(`email: ${email}`);
    }
  };

  const largeView = () => {
    return (
      <>
        <div
          className={`container-fluid background-image d-flex align-items-center justify-content-center `}>
          <div className="body-card container p-5 ms-5">
            <div className="row container px-5">
              <div className="col-6 d-none d-lg-block mb-5">
                <img src={forgoticons} alt="" className="w-50" />
              </div>
            </div>
            <div className="col-12 ps-3">
              <p className="fs-4 fw-semibold">Forget Password?</p>
            </div>
            <div className="col-lg-4 ps-3 col-12 ">
              <p className=" fw-semibold text-secondary">
                {/*eslint-disable-next-line react/no-unescaped-entities */}
                Don't worry it happens. Please enter the address associated with
                your account
              </p>
            </div>
            <div className="col-12 mb-5">
              <TextField
                type={"email"}
                name={"email"}
                id={"email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder={"Email Adress"}
              />
            </div>
            <div className="col-12">
              {email !== "" ? (
                <ButtonComponent
                  type={"submit"}
                  className={"btn-forgot-password fs-5"}
                  id={"submitEmail"}
                  onClick={onSubmitHandle}
                  buttonName={"Submit"}
                />
              ) : (
                //   <ButtonComponent
                //     // type={"submit"}
                //     className={"btn-disabled fs-5 w-100"}
                //     id={"login"}
                //     onClick={() => {}}
                //     buttonName={"Submit"}
                //   />
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
      </>
    );
  };
  const smToMedView = () => {
    return (
      <>
        <div className="container-fluid d-flex align-items-center justify-content-center sm-to-mid">
          <div className="body-card row">
            <div className="col-12 ps-3">
              <p className="fs-4 fw-semibold">Forget Password?</p>
            </div>
            <div className="col-lg-4 ps-3 col-12 ">
              <p className=" fw-semibold text-secondary">
                {/*eslint-disable-next-line react/no-unescaped-entities */}
                Don't worry it happens. Please enter the address associated with
                your account
              </p>
            </div>
            <div className="col-12 mb-5">
              <TextField
                type={"email"}
                name={"email"}
                id={"email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder={"Email Address"}
              />
            </div>
            <div className="col-12">
              {email !== "" ? (
                <ButtonComponent
                  type={"submit"}
                  className={"btn-forgot-password fs-5"}
                  id={"submitEmail"}
                  onClick={onSubmitHandle}
                  buttonName={"Submit"}
                />
              ) : (
                //   <ButtonComponent
                //     // type={"submit"}
                //     className={"btn-disabled fs-5 w-100"}
                //     id={"login"}
                //     onClick={() => {}}
                //     buttonName={"Submit"}
                //   />
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

export default ForgotPassword;
