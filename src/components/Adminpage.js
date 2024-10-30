import axios from "axios";
import { useState } from "react";
import { ipofserver } from "./Global";

const Admin = () => {
  const [inputfeilds, setinputfeilds] = useState({
    username: "",
    password: "",
  });

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setinputfeilds({ ...inputfeilds, [name]: value });
  };

  const [admindata,setadmindata]=useState()

  const SubmitButtonadminSIgnin = () => {
    if (inputfeilds.username == "" || inputfeilds.password == "") {
      alert("Please fill all the details");
    } else {
      axios.post(ipofserver + "admin", {
        username: inputfeilds.username,
        password: inputfeilds.password,
      }).then(function(response){
        if (response.data=="success"){
          setadmindata(inputfeilds.username,inputfeilds.password)
          window.location.href='/flightsdata';
        }else{
          alert("Invalid username and password")
        }
        

      }).catch(function(error){
        return error;
      })
    }
  };
  return (
    <div>
      <div>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={inputfeilds.username}
          onChange={handelInputChange}
        ></input>
      </div>
      <div>
        <input
          placeholder="password"
          type="text"
          name="password"
          value={inputfeilds.password}
          onChange={handelInputChange}
        ></input>
      </div>
      <div>
        <button onClick={SubmitButtonadminSIgnin}>Sign In</button>
      </div>
    </div>
  );
};
export default Admin;
