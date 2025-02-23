import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";

const ReviewModal = ({ roomId, userId, username, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating || !comment) {
      toast.error("All fields are required!");
      return;
    }

    const currentTimestamp = new Date().toLocaleString();
    setTimestamp(currentTimestamp);

    try {
      await axios.post("/api/reviews", {
        roomId,
        userId,
        username,
        rating,
        comment,
        timestamp: currentTimestamp,
      });
      toast.success("Review submitted successfully!");
      onClose(); // Close the modal
    } catch (error) {
      toast.error("Failed to submit the review!");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Write a Review</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} readOnly />
          </label>
          <label>
            Rating (1-5):
            <ReactStars
              count={5}
              value={rating}
              onChange={(newRating) => setRating(newRating)}
              size={24}
              isHalf={false}
            />
          </label>
          <label>
            Comment:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
