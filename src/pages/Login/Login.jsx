import "./Login.css";

import TextField from "../../elements/TextField/TextField";

import { NavLink, useNavigate } from "react-router-dom";
import TextFieldPassword from "../../elements/TextField/TextFieldPassword";
import { useEffect, useState } from "react";
import ButtonComponent from "../../elements/Buttons/ButtonComponent";
import { adminApi } from "../../api/Api";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../redux/Slice/tokenSlice";
import { addRemember, addUser } from "../../redux/Slice/usersSlice";
import useAxios from "../../api/useAxios";
import { Modal } from "react-bootstrap";
const Login = () => {
  const users = useSelector((state) => state.users);
  const [show, setShow] = useState(false);
  const [metadata, setMetadata] = useState({
    status_code: "",
    message: "",
    error_reason: "",
  });

  const handleClose = () => {
    setMetadata({
      status_code: "",
      message: "",
      error_reason: "",
    });
    setShow(false);
  };
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState("");

  const [bodyApi, setBodyApi] = useState({
    method: "",
    url: "",
    body: null,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { response, error, fetchData } = useAxios({
    api: adminApi,
    method: bodyApi.method,
    url: bodyApi.url,
    body: bodyApi.body,
    header: JSON.stringify({
      accept: "application/json",
    }),
  });
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      setBodyApi({
        method: "post",
        url: "/login",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      fetchData();
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };
  const rememberUser = () => {
    if (users?.token_user) {
      navigate("/dashboard", { replace: true });
    }
  };
  const handleAdmin = () => {
    setMetadata({
      message: "Please login using admin account",
      error_reason: "You are not using admin account.",
      status_code: "-",
    });
    setShow(true);
    setTimeout(handleClose, 2000);
  };

  useEffect(() => {
    rememberUser();
    if (response !== null) {
      dispatch(addToken(response.token));
      dispatch(addUser(response.data));
      setMetadata({
        status_code: response.metadata.status_code,
        message: response.metadata.message,
        error_reason: response.metadata.error_reason,
      });
      if (rememberMe === true) {
        dispatch(addRemember(response.token));
      }
      let adminAuth = jwtDecode(response.token);
      adminAuth.isAdmin
        ? navigate("/dashboard", { replace: true })
        : handleAdmin();
    } else if (error) {
      const metaDataError = error?.response?.data.metadata;
      setMetadata({
        status_code: metaDataError?.status_code,
        message: metaDataError?.message,
        error_reason: metaDataError?.error_reason,
      });
      setShow(true);
      setTimeout(handleClose, 3000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, error, navigate, response]);

  return (
    <>
      <div className="overflow-hidden overflow-x-hidden">
        <Modal
          show={show}
          onHide={handleClose}
          className="position-absolute z-3"
          centered>
          <Modal.Header>
            <Modal.Title>{metadata.message}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>status: {metadata.status_code}</p>
            <p>reason: {metadata.error_reason}</p>
          </Modal.Body>
        </Modal>
        <div className="row position-relative z-2">
          <div className="col-6 d-none d-md-block">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/graphql-marketplace.appspot.com/o/Login.gif?alt=media&token=6f3a128e-2e50-494f-874a-828cd42e10b8"
              }
              alt=""
              style={{ height: "100vh", width: "55vw" }}
            />
          </div>
          <div className=" col-md-6 LoginRightSide rounded-5 d-flex justify-content-center align-items-center ">
            <div className=" w-75 ">
              <p className="fw-bold fs-1 h1-rightside">Welcome!</p>
              <p className="fw-semibold fs-5 mb-4">Log in you account</p>
              <TextField
                label={`Your Email`}
                type={"email"}
                name={"email"}
                id={"email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder={"userName@gmail.com"}
                classNameLabel={"mb-2 text-secondary"}
              />

              <div className="mt-4">
                <TextFieldPassword
                  placeholder={"******"}
                  label="Password"
                  id={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  classNameLabel={"mb-2 text-secondary"}
                />
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberme"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label
                      className="form-check-label fw-semibold"
                      htmlFor="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-6 text-end">
                  <NavLink
                    to={"/forgotpassword"}
                    style={{ textDecoration: "none" }}>
                    <p className="ForgotPasswordText">Forgot Password?</p>
                  </NavLink>
                </div>
              </div>

              <ButtonComponent
                type={"submit"}
                className={"btn-login fs-5"}
                id={"login"}
                onClick={handleLogin}
                buttonName={"Log in"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
