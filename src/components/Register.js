import axios from "axios";
import { useState } from "react";
import { ipofserver } from "./Global";

const Register = () => {
  const [inputfeilds, setinputfeilds] = useState({
    username: "kishori",
    Email: "salvikishori96@gmail.com",
    number: "9372914050",
    address: "sanpada",
    password: "kishori1",
    cpassword: "kishori1",
  });

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setinputfeilds({ ...inputfeilds, [name]: value });
  };

  const SubmitButtonSignUp = () => {
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (
      inputfeilds.username == "" ||
      inputfeilds.Email == "" ||
      inputfeilds.number == "" ||
      inputfeilds.address == "" ||
      inputfeilds.password == "" ||
      inputfeilds.cpassword == ""
    ) {
      alert("Please fill all the feilds");
    } else if (!filter.test(inputfeilds.Email)) {
      alert("Email Address is not valid");
    } else if (inputfeilds.number.length != 10) {
      alert("Please Enter 10 Digit mobile number");
    } else if (inputfeilds.password.length < 8) {
      alert("Password Should Be minimum 8 Character");
    } else if (inputfeilds.password !== inputfeilds.cpassword) {
      alert("password and confirm password not match");
    } else {
        axios.post(ipofserver+'registration',{
            username:inputfeilds.username,
            Email:inputfeilds.Email,
            number:inputfeilds.number,
            address:inputfeilds.address,
            password:inputfeilds.password,
            cpassword:inputfeilds.cpassword,

        }).then(function(response){
            if(response.data === "success"){
                alert("Register Successful")
                window.location.href ='/components/Login'
            }
            else{
                alert("Somthing Wrong")
            }
        })
        .catch(function(error){
            return error;
        })
      
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder="username"
          onChange={handelInputChange}
          name="username"
          value={inputfeilds.username}
        ></input>
      </div>
      <div>
        <input
          placeholder="Email"
          onChange={handelInputChange}
          name="Email"
          value={inputfeilds.Email}
        ></input>
      </div>
      <div>
        <input
          placeholder="number"
          onChange={handelInputChange}
          name="number"
          value={inputfeilds.number}
        ></input>
      </div>
      <div>
        <input
          placeholder="address"
          onChange={handelInputChange}
          name="address"
          value={inputfeilds.address}
        ></input>
      </div>
      <div>
        <input
          placeholder="password"
          onChange={handelInputChange}
          name="password"
          value={inputfeilds.password}
        ></input>
      </div>
      <div>
        <input
          placeholder="cpassword"
          onChange={handelInputChange}
          name="cpassword"
          value={inputfeilds.cpassword}
        ></input>
      </div>
      <div>
        <button onClick={SubmitButtonSignUp}>Sign Up</button>
      </div>
    </div>
  );
};
export default Register;
