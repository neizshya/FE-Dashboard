import "./Login.css";
import LoginImg from "../../assets/gif/Login.gif";

import TextField from "../../elements/TextField/TextField";

import { NavLink, useNavigate } from "react-router-dom";
import TextFieldPassword from "../../elements/TextField/TextFieldPassword";
import { useEffect, useState } from "react";
import ButtonComponent from "../../elements/Buttons/ButtonComponent";
import { adminApi } from "../../api/Api";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../redux/Slice/tokenSlice";
import useAxios from "../../api/UseAxios";
import { addUser } from "../../redux/Slice/usersSlice";
const Login = () => {
  const users = useSelector((state) => state.users);

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

  const { response, isLoading, error, fetchData } = useAxios({
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

  useEffect(() => {
    rememberUser();
    if (response !== null) {
      dispatch(addToken(response.token));
      if (rememberMe === true) {
        dispatch(addUser(response.token));
      }
      let adminAuth = jwtDecode(response.token);
      adminAuth.isAdmin
        ? navigate("/dashboard", { replace: true })
        : alert("You are not admin, please login using admin account");
    } else if (error) {
      const metaDataError = error?.response?.data.metadata;
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      alert(
        `status code : ${metaDataError?.status_code} \n message : ${metaDataError?.message} \n reason : ${metaDataError?.error_reason}`
      );
    }
  }, [dispatch, error, navigate, response]);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="overflow-hidden overflow-x-hidden">
        <div className="row">
          <div className="col-6 d-none d-md-block">
            <img
              src={LoginImg}
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
