import React, { useState } from 'react';
import { toast } from 'react-toastify';

const RoomBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.checkInDate ||
      !formData.checkOutDate ||
      !formData.roomType
    ) {
      toast.error('Please fill in all fields!');
      return;
    }

    // Check if the user is authenticated
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      toast.error('User is not authenticated. Please log in.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/book-room', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Room booked successfully!');

        // Save the new booking to localStorage
        const newBooking = { ...formData, bookingId: new Date().getTime() }; // Add a unique bookingId for easy identification
        const existingBookings = JSON.parse(localStorage.getItem('myBookings')) || [];
        localStorage.setItem('myBookings', JSON.stringify([...existingBookings, newBooking]));

        // Reset form data after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkInDate: '',
          checkOutDate: '',
          roomType: '',
        });
      } else {
        toast.error('Failed to book the room. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  const handleCancel = () => {
    // Reset the form data when the Cancel button is clicked
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkInDate: '',
      checkOutDate: '',
      roomType: '',
    });
    toast.info('Booking form reset!');
  };

  return (
    <div className="max-w-lg mx-auto bg-teal-600 p-8 shadow-lg rounded-lg mt-10 mb-10">
      <h1 className="text-2xl font-extrabold mb-6 text-center">Please Submit Your Information!</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
            Check-In Date
          </label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">
            Check-Out Date
          </label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="roomType" className="block text-sm font-medium text-gray-700">
            Room Type
          </label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            required
          >
            <option value="">Select Room Type</option>
            <option value="Single">Single Room</option>
            <option value="Double">Double Room</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomBookingForm;
