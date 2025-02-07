import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';

const RoomDetails = ({ roomId }) => {
  const [room, setRoom] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingDate, setBookingDate] = useState(new Date());

  useEffect(() => {
    // Fetch room details and reviews
    axios.get(`/api/rooms/${roomId}`)
      .then(response => {
        setRoom(response.data.room);
        setReviews(response.data.reviews);
      })
      .catch(error => console.error(error));
  }, [roomId]);

  const handleBookNow = () => {
    setShowBookingModal(true);
  };

  const handleConfirmBooking = () => {
    axios.post(`/api/rooms/${roomId}/book`, { userId: 'currentUserId', bookingDate })
      .then(response => {
        alert(response.data.message);
        setShowBookingModal(false);
        // Update room availability
        setRoom({ ...room, isAvailable: false });
      })
      .catch(error => console.error(error));
  };

  if (!room) return <div>Loading...</div>;

  return (
    <div>
      <h1>{room.name}</h1>
      <p>{room.description}</p>
      <p>Price: ${room.price} per night</p>
      <p>Capacity: {room.capacity} guests</p>
      <img src={room.images[0]} alt={room.name} />

      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <div key={review._id}>
            <p>Rating: {review.rating}/5</p>
            <p>{review.comment}</p>
            <p>By User on {new Date(review.createdAt).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first to review!</p>
      )}

      <button onClick={handleBookNow} disabled={!room.isAvailable}>
        {room.isAvailable ? 'Book Now' : 'Unavailable'}
      </button>

      {showBookingModal && (
        <div className="modal">
          <h2>Confirm Booking</h2>
          <p>Room: {room.name}</p>
          <p>Price: ${room.price}</p>
          <p>Description: {room.description}</p>
          <DatePicker selected={bookingDate} onChange={date => setBookingDate(date)} />
          <button onClick={handleConfirmBooking}>Confirm</button>
          <button onClick={() => setShowBookingModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;