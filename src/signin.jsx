import React, { useState } from "react";
import logo from "./images/logo1.png";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSignInName,
  setSignInPassword,
  setSignInConformPassword,
} from "./Redux/slice";

function Signin() {
  
  const page = useNavigate();
  const dispatch = useDispatch();
  const signInName = useSelector((state) => state.bus.signInName);
  const signInPassword = useSelector((state) => state.bus.signInPassword);
  const signInConformPassword = useSelector(
    (state) => state.bus.signInConformPassword
  );

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    conformPassword: "",
  });

  const validateInput = (field, value) => {
    switch (field) {
      case "name":
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: value.length < 4 ? "Minimum 4 characters" : "",
        }));
        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: value.length < 6 ? "Minimum 6 characters" : "",
        }));
        break;
      case "conformPassword":
        setErrors((prevErrors) => ({
          ...prevErrors,
          conformPassword:
            value.length < 6
              ? "Minimum 6 characters"
              : signInPassword === value
              ? ""
              : "Password doesn't match",
        }));
        break;
      default:
        break;
    }
  };

  const click = () => {
    if (
    //   signInName.length >= 4 &&
    //   signInPassword.length >= 6 &&
    //   signInConformPassword.length >= 6 &&
      signInPassword === signInConformPassword 
    //   !errors.name &&
    //   !errors.password &&
    //   !errors.conformPassword
    ) {
      page("/");
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: signInName.length < 4 ? "Minimum 4 characters" : "",
        password: signInPassword.length < 6 ? "Minimum 6 characters" : "",
        conformPassword:
          signInConformPassword.length < 6
            ? "Minimum 6 characters"
            : signInPassword === signInConformPassword
            ? ""
            : "Password doesn't match",
      }));
    }
  };

  return (
    <>
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
                  height: "480px",
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
                Signup
              </div>
              <div style={{ paddingTop: "20px" }}>Username</div>
              <Input
                type="text"
                onChange={(e) => {
                  dispatch(setSignInName(e.target.value));
                  validateInput("name", e.target.value);
                }}
              />
              <div style={{ color: "red", textAlign: "center" }}>
                {errors.name}
              </div>
              <div style={{ paddingTop: "20px" }}>Password</div>
              <Input.Password
                type="password"
                onChange={(e) => {
                  dispatch(setSignInPassword(e.target.value));
                  validateInput("password", e.target.value);
                }}
              />
              <div style={{ color: "red", textAlign: "center" }}>
                {errors.password}
              </div>
              <div style={{ paddingTop: "20px" }}>Confirm Password</div>
              <Input.Password
                type="password"
                onChange={(e) => {
                  dispatch(setSignInConformPassword(e.target.value));
                  validateInput("conformPassword", e.target.value);
                }}
              />
              <div style={{ color: "red", textAlign: "center" }}>
                {errors.conformPassword}
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
                  onClick={click}
                >
                  Signup
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
    </>
  );
}

export default Signin;
