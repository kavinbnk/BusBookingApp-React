import React from "react";
import logo from "./images/logo1.png";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogInName, setLogInPassword } from "./Redux/slice";

function Login() {
  const page = useNavigate();
  const dispatch = useDispatch();
  const logInName = useSelector((i) => i.bus.logInName);
  const logInPassword = useSelector((i) => i.bus.logInPassword);
  const signInName = useSelector((i) => i.bus.signInName);
  const signInConformPassword = useSelector(
    (i) => i.bus.signInConformPassword
  );

  const validateInput = (inputField) => {
    switch (inputField) {
      case "username":
        return signInName !== logInName && logInName.length > 0
          ? "Username does not match"
          : "";
      case "password":
        return signInConformPassword !== logInPassword && logInPassword.length > 0
          ? "Password does not match"
          : "";
      default:
        return "";
    }
  };

  const click = () => {
    const usernameError = validateInput("username");
    const passwordError = validateInput("password");

    if (usernameError || passwordError) {
        
    } else {
      page("/home");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://cdn-assets0-cf-r5in.ticketsimply.net/assets/essaar_v1/images/bus_1-94b36a0bd8d4ca6881a7c7d1c249c9b154b413d44224a9ea5d8ad9ebe6f16e36.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "78%",
          border: "2px solid black",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "10px",
            paddingTop: "10px",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
          }}
        >
          <img src={logo} alt="logo" />
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "rgb(255,255,255)",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <div>
            <img
              style={{
                width: "800px",
                height: "510px",
                borderBottomLeftRadius: "20px",
              }}
              src="https://c1.staticflickr.com/5/4850/31335022617_abea9f72b5_b.jpg"
              alt="img"
            />
          </div>
          <div
            style={{
              border: "2px solid black",
              margin: "16px",
              width: "100vw",
              backgroundColor: "whitesmoke",
              padding: "20px",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                fontWeight: "700",
                textAlign: "center",
                fontFamily: "cursive",
              }}
            >
              Login
            </div>
            <div
              style={{
                fontWeight: "500",
                textAlign: "center",
                fontFamily: "cursive",
                color: "green",
                fontSize: "22px",
                paddingTop: "20px",
              }}
            >
              Welcome Back To All
            </div>
            <div
              style={{
                fontWeight: "500",
                textAlign: "center",
                fontFamily: "cursive",
                fontSize: "20px",
              }}
            >
              " Essaar "
            </div>
            <div style={{ paddingTop: "20px" }}>Username</div>
            <Input
              type="text"
              onChange={(e) => dispatch(setLogInName(e.target.value))}
              onBlur={() => validateInput("username")}
            />
            <div style={{ color: "red", textAlign: "center" }}>
              {validateInput("username")}
            </div>
            <div style={{ paddingTop: "20px" }}>Password</div>
            <Input.Password
              type="password"
              onChange={(e) => dispatch(setLogInPassword(e.target.value))}
              onBlur={() => validateInput("password")}
            />
            <div style={{ color: "red", textAlign: "center" }}>
              {validateInput("password")}
            </div>
            <div
              style={{
                paddingLeft: "198px",
                color: "blue",
                cursor: "pointer",
                paddingTop: "10px",
              }}
              onClick={() => page("/signin")}
            >
              Create new user?
            </div>
            <hr></hr>
            <div style={{ textAlign: "center" }}>
              <Button
                style={{
                  marginTop: "20px",
                  backgroundColor: "lightblue",
                  fontWeight: "700",
                  width: "100px",
                }}
                onClick={() => {
                  click();
                }}
              >
                Login
              </Button>
            </div>
            <small
              style={{
                position: "relative",
                bottom: "-16px",
                right: "-220px",
              }}
            >
              Powered by <b>Kavin</b>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
