import axios from "axios";
import { useState } from "react";
import { ipofserver } from "./Global";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchdata, setsearchdata] = useState({
    destination: "",
    departuredata: "",
    returndata: "",
    
  });

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setsearchdata({ ...searchdata, [name]: value });
  };

  const [searchresult, setsearchresult] = useState([]);

  const SubmitButtonSearch = async () => {
    try {
        console.log(searchdata);
        
      const response = await axios.post(ipofserver+"/search", searchdata);
      setsearchresult(response.data);
    } catch (error) {
      console.error("Search Failed", error);
    }
  };

  const navigate=useNavigate();

  const BookFlight=(flightName, price)=>{
    navigate(`/booking/${flightName}/${price}`);


  }

  return (
    <div>
      <input
        placeholder="Destination"
        name="destination"
        type="text"
        onChange={handelInputChange}
        value={searchdata.destination}
      ></input>
      <input
        name="departuredata"
        type="date"
        onChange={handelInputChange}
        value={searchdata.departuredata}
      ></input>
      <input
        name="returndata"
        type="date"
        onChange={handelInputChange}
        value={searchdata.returndata}
      ></input>
      <button onClick={SubmitButtonSearch}>Search</button>
      <div>
        {searchresult.length > 0 ? (
          searchresult.map((result, index) => (
            <div key={index}>
              <h4>{result.flightName}</h4>
              <p>{result.price}</p>
              <div>
                <button onClick={()=> BookFlight(result.flightName, result.price)}>Book Flight</button>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};
export default Search;
