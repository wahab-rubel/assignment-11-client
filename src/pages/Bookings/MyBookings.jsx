import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Dialog } from "@headlessui/react";
import { useAuthContext } from "../../contexts/AuthContext";



const MyBookings = () => {
  const { user } = useAuthContext();
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`https://assignment-11-server-green-nine.vercel.app/bookings?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user.email]);

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      fetch(`https://assignment-11-server-green-nine.vercel.app/bookings/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then(() => {
          setBookings(bookings.filter((booking) => booking.id !== id));
          toast.success("Booking canceled successfully!");
        });
    }
  };

  const handleUpdateDate = (booking) => {
    setSelectedBooking(booking);
    setIsOpen(true);
  };

  const confirmUpdate = (newDate) => {
    fetch(`https://assignment-11-server-green-nine.vercel.app/bookings/${selectedBooking.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: newDate }),
    })
      .then((res) => res.json())
      .then((updatedBooking) => {
        setBookings(
          bookings.map((booking) =>
            booking.id === updatedBooking.id ? updatedBooking : booking
          )
        );
        setIsOpen(false);
        toast.success("Booking date updated!");
      });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Room Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border">
              <td className="p-2 border">
                <img src={booking.image} alt={booking.name} className="w-16 h-16" />
              </td>
              <td className="p-2 border">{booking.name}</td>
              <td className="p-2 border">${booking.price}</td>
              <td className="p-2 border">{booking.date}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleCancel(booking.id)}
                  className="bg-red-500 text-white px-2 py-1 mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleUpdateDate(booking)}
                  className="bg-blue-500 text-white px-2 py-1 mr-2"
                >
                  Update Date
                </button>
                <button className="bg-green-500 text-white px-2 py-1">
                  Review
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isOpen && (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-lg">
              <h2 className="text-xl font-bold mb-4">Update Booking Date</h2>
              <input
                type="date"
                className="border p-2 w-full"
                onChange={(e) => confirmUpdate(e.target.value)}
              />
              <button
                className="mt-4 bg-gray-500 text-white px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default MyBookings;
