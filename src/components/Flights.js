import axios from "axios";
import { useState } from "react";
import { ipofserver } from "./Global";

const Flights = () => {
  const [flightinput, setflightinput] = useState({
    name: "",
    destination: "",
    departure_date: "",
    return_date: "",
    price: "",
  });

  const handelInputChange=(e)=>{
    const {name,value}=e.target
    setflightinput({...flightinput,[name]:value});

  }

  const UploadDataFlight=()=>{
    if(flightinput.name ==''|| flightinput.destination ==''|| flightinput.departure_date =='' ||flightinput.return_date ==''||flightinput.price ==''){
        alert("Please Fill All the Details")
    }else{
        axios.post(ipofserver+'uploadflight',{
            name:flightinput.name,
            destination:flightinput.destination,
            departuredate:flightinput.departure_date,
            returndate:flightinput.return_date,
            price:flightinput.price,

        }).then(function(response){
            if(response.data=='success'){
                alert('register Successfully')
                window.location.href='/flightsdata'
            }else{
                alert('something wrong')
            }
        }).catch(function(error){
            return error;
        })
    }

  }

  return (
    <div>
      <div>
        <input placeholder="Flights Name" type="text" onChange={handelInputChange} name="name" value={flightinput.name}></input>
      </div>
      <div>
        <input placeholder="Destination" type="text" onChange={handelInputChange} name="destination" value={flightinput.destination}></input>
      </div>
      <div>
        <input placeholder="Departure date" type="date" onChange={handelInputChange} name="departure_date" value={flightinput.departure_date}></input>
      </div>
      <div>
        <input placeholder="Return date" type="date" onChange={handelInputChange} name="return_date" value={flightinput.return_date}></input>
      </div>
      <div>
        <input placeholder="Price" type="text" onChange={handelInputChange} name="price" value={flightinput.price}></input>
      </div>
      <div>
        <button onClick={UploadDataFlight}>Upload</button>
      </div>
    </div>
  );
};
export default Flights;
