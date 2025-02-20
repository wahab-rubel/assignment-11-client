import { useState } from "react";
import RoomBooking from "../components/RoomBooking"; 
import DatePicker from "../components/DatePicker";
import { Helmet } from "react-helmet-async"; // For updating tab title & metadata
import { motion } from "framer-motion"; // For animation
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // For Map

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState({ startDate: null, endDate: null });

  return (
    <div className="p-6">
      {/* Helmet for SEO & MetaData */}
      <Helmet>
        <title>Book Your Stay | Hotel Booking</title>
        <meta name="description" content="Find the perfect room and book your stay easily." />
      </Helmet>

      {/* Page Title with Framer Motion Animation */}
      <motion.h2 
        className="text-xl font-bold"
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Book Your Stay
      </motion.h2>

      {/* Date Picker Component */}
      <DatePicker
        onSelectDate={(dates) => setSelectedDate(dates)}
      />

      {selectedDate.startDate && selectedDate.endDate && (
        <motion.p 
          className="mt-2"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.3 }}
        >
          Selected: {selectedDate.startDate.toDateString()} - {selectedDate.endDate.toDateString()}
        </motion.p>
      )}

      {/* RoomBooking Component with selected dates */}
      <RoomBooking checkIn={selectedDate.startDate} checkOut={selectedDate.endDate} />

      {/* Map Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Hotel Location</h3>
        <MapContainer center={[23.8103, 90.4125]} zoom={13} className="h-64 w-full mt-2 rounded-lg">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[23.8103, 90.4125]}>
            <Popup>Our Hotel is here!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default BookingPage;
