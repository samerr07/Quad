import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TicketBookingForm from './TicketBookingForm';
import './showSummary.scss';
import { Link } from 'react-router-dom/dist';

const ShowSummary = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [showBookingForm, setShowBookingForm] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    const fetchSummary = async () => {
      
      fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));
    };

    fetchSummary();
  }, [id]);
  


  const handleBookTicket = () => {
    // Set showBookingForm state to true to display the ticket booking form
    setShowBookingForm(true);
  };

  const handleCancelBooking = () => {
    // Set showBookingForm state to false to hide the ticket booking form
    setShowBookingForm(false);
  };

  return (
    <div className="summary">
      <h2 style={{marginBottom:"15px",fontSize:"30px",color:"yellow"}} ><Link  to={"/"}>Home</Link></h2>
    <div className="summaryContainer">
      
      <h2 style={{textAlign:"center"}}>{details.name}</h2>
      <p>{details.summary}</p>
      </div>  
      <div className="summaryContainer1">
      {!showBookingForm && (
        <button className="button" onClick={handleBookTicket}>Book Ticket</button>
      )}
      {/* {showBookingForm && (
        <TicketBookingForm
          movieName={details.name} // Pass the movie name as a prop to the form component
          onCancel={handleCancelBooking} // Pass the onCancel function as a prop to the form component
        />
      )} */}
      {showBookingForm && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={handleCancelBooking}>&times;</span>
            <TicketBookingForm
              movieName={details.name}
              onCancel={handleCancelBooking}
            />
          </div>
        </div>
      )}
      </div>
    
    </div>
  );
};

export default ShowSummary;

