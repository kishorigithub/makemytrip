// TicketConfirmation.js
import React from 'react';
import jsPDF from 'jspdf';

const TicketConfirmation = ({ flightDetails, bookingDetails, onClose }) => {
  
  const handleDownloadTicket = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(22);
    doc.text('Flight Ticket', 20, 20);

    doc.setFontSize(16);
    doc.text(`Flight Name: ${flightDetails.flightName}`, 20, 40);
    doc.text(`Price: ${flightDetails.price}`, 20, 50);
    doc.text(`Passenger Name: ${bookingDetails.username}`, 20, 60);
    doc.text(`Contact: ${bookingDetails.contact}`, 20, 70);
    doc.text(`Seat Preference: ${bookingDetails.seatpreference}`, 20, 80);
    doc.text(`Booking Date: ${new Date().toLocaleDateString()}`, 20, 90);

    // Save the PDF
    doc.save('Flight_Ticket.pdf');
  };

  return (
    <div className="confirmation-modal">
      <h2>Booking Confirmed!</h2>
      <p>Flight Name: {flightDetails.flightName}</p>
      <p>Price: {flightDetails.price}</p>
      <p>Passenger Name: {bookingDetails.username}</p>
      <p>Contact: {bookingDetails.contact}</p>
      <p>Seat Preference: {bookingDetails.seatpreference || 'N/A'}</p>
      
      <button onClick={handleDownloadTicket}>Download Ticket as PDF</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TicketConfirmation;
