import React, { useState } from 'react';
import "./ticketBooking.scss"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TicketBookingForm = ({ movieName, onCancel }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // alert()
      toast.success(`${name} ,Your Booking is Sucessfull !!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        
        });
     
      setName('');
      setEmail('');
      navigate("/")
    };
  
    return (
      <div className="ticket-booking-form-container">
        <h2>Book Ticket</h2>
        <p>Movie: {movieName}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
          <button className='canBtn' onClick={onCancel}>Cancel</button>
        </form>
      </div>
    );
  };
  
  export default TicketBookingForm;