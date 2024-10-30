import { GoogleLogin } from "@react-oauth/google";
import GoogleLoginButton from "./GoogleLoginButton";
import { useState } from "react";
import axios from "axios";
import { ipofserver } from "./Global";

const Login = () => {
  const [inputfeilds, setinputfeilds] = useState({
    username: "kishori",
    password: "kishori1",
  });

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setinputfeilds({ ...inputfeilds, [name]: value });
  };

  function setData(sessionname, standard) {
    localStorage.setItem("LoginUsername", sessionname);
    localStorage.setItem("LoginUserstd", standard);
  }

  const SubmitButtonSignIn = () => {
    if (inputfeilds.username === "" || inputfeilds.password === "") {
      alert("Please fill all feilds");
    } else {
      axios
        .post(ipofserver + "login", {
          username: inputfeilds.username,
          password: inputfeilds.password,
        })
        .then(function (response) {
          if (response.data == "success") {
            setData(inputfeilds.username, inputfeilds.password);
            window.location.href = "/Main";
          } else {
            alert("Invalid username and password");
          }
        })
        .catch(function (error) {
          return error;
        });
    }
  };

  return (
    <div>
      <h2>Please Login Here </h2>
      <form>
        <div>
          <input
            placeholder="Please Enter username"
            onChange={handelInputChange}
            name="username"
            value={inputfeilds.username}
          ></input>
        </div>
        <div>
          <input
            placeholder="Please Enter Password"
            onChange={handelInputChange}
            name="password"
            value={inputfeilds.password}
          ></input>
        </div>
        <button onClick={SubmitButtonSignIn}>Sign In</button>
        <div>
          <a>
            <a href="/register">Link Text</a>
          </a>
        </div>
        <GoogleLogin />
      </form>
    </div>
  );
};
export default Login;
