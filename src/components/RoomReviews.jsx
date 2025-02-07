import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoomReviews = ({ roomId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews/${roomId}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchReviews();
  }, [roomId]);

  return (
    <div className="reviews-section">
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review this room!</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id} className="review-card">
            <p><strong>{review.username}</strong> ({new Date(review.timestamp).toLocaleString()})</p>
            <p>Rating: {review.rating} / 5</p>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RoomReviews;
