import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ipofserver } from "./components/Global";
import TicketConfirmation from "./Ticketonfirmation";

const Bookingdetails = () => {
  const [bookinginfo, setbookinginfo] = useState({
    username: "",
    contact: "",
    seatpreference: "",
  });

  const { flightName, price } = useParams();

  const handelInputchange = (e) => {
    const { name, value } = e.target;
    setbookinginfo({ ...bookinginfo, [name]: value });
  };


  const [isConfirmed, setIsConfirmed] = useState(false);
  const [flightDetails, setFlightDetails] = useState({});


  const handleBooking = async () => {
    try {
      const response = await axios.post(`${ipofserver}/bookflight`, {
        flightName: flightName,
        price: price,
        username: bookinginfo.username,
        contact: bookinginfo.contact,
        seatpreference: bookinginfo.seatpreference,
      });
      if (response.data === "success") {
        setFlightDetails({ flightName, price });
        setIsConfirmed(true);
      } else {
        alert("booking Failed");
      }
    } catch (error) {
      console.error("Error Booking The Flight", error);
    }
  };

  return (
    <div>
      <h2>Booking Details for {flightName}</h2>
      <p>Price: {price}</p>
      <input
        placeholder="Your name"
        name="username"
        type="text"
        onChange={handelInputchange}
      ></input>
      <input
        placeholder="Contact Number"
        name="contact"
        type="text"
        onChange={handelInputchange}
      ></input>
      <input
        placeholder="Seat Preferance (optional)"
        name="seatpreference"
        type="text"
        onChange={handelInputchange}
      ></input>
      <button onClick={handleBooking}>Confirm Booking</button>
      {isConfirmed && (
        <TicketConfirmation
          flightDetails={flightDetails}
          bookingDetails={bookinginfo}
          onClose={() => setIsConfirmed(false)}
        />
      )}
    </div>
  );
};
export default Bookingdetails;
