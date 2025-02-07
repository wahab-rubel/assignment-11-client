import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ReviewModal = ({ roomId, username, userId, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating || !comment) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("/api/reviews", {
        roomId,
        userId,
        username,
        rating,
        comment,
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
            Rating (1-5):
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
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
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
