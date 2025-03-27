import React, { useState, useEffect } from "react";
import { getFlightById } from "../services/flightService"; // import ฟังก์ชัน getFlightById จาก flightService
import { createBooking } from "../services/bookingService"; // import ฟังก์ชัน createBooking จาก bookingService
import { useParams, useNavigate } from "react-router-dom"; // ใช้ useNavigate แทน useHistory
import toast from "react-hot-toast"; // import react-hot-toast

const Booking = () => {
  const [flight, setFlight] = useState(null);
  const [seatNumber, setSeatNumber] = useState("");
  const [userId, setUserId] = useState(""); // ควรดึงจากการเข้าสู่ระบบ
  const [error, setError] = useState("");
  const { id } = useParams(); // ใช้ id ของเที่ยวบินจาก URL
  const navigate = useNavigate(); // ใช้ useNavigate แทน useHistory

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const flightData = await getFlightById(id); // เรียกใช้ฟังก์ชันจาก flightService
        setFlight(flightData); // เก็บข้อมูลเที่ยวบินที่ได้มา
      } catch (err) {
        console.error(err);
      }
    };
    fetchFlight();
  }, [id]);

  const handleBooking = async () => {
    // ตรวจสอบการกรอกข้อมูลที่จำเป็น
    if (!seatNumber || !userId) {
      setError("Please provide seat number and user ID");
      return;
    }

    // ข้อมูลการจอง
    const bookingData = {
      flightId: id,
      userId: userId,
      seatNumber: seatNumber,
    };

    try {
      // เรียกใช้ฟังก์ชัน createBooking จาก bookingService
      const booking = await createBooking(bookingData);
      toast.success(
        `Booking successful! Ticket Number: ${booking.ticketNumber}`
      ); // ใช้ react-hot-toast
      navigate("/user-bookings"); // ใช้ navigate แทน history.push
    } catch (err) {
      setError("Failed to create booking. Please try again.");
      toast.error("Failed to create booking. Please try again."); // ใช้ react-hot-toast
      console.error(err);
    }
  };

  if (!flight) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-8">Book Flight</h1>
      <div className="card border rounded-md p-4">
        <h2 className="text-xl font-semibold">{flight.flightName}</h2>
        <p>
          {flight.departureAirport} → {flight.arrivalAirport}
        </p>
        <p>Departure: {new Date(flight.departureTime).toLocaleString()}</p>
        <p>Arrival: {new Date(flight.arrivalTime).toLocaleString()}</p>
        <p>Seats Available: {flight.availableSeats}</p>
        <p>Price: ${flight.price}</p>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Seat Number"
          value={seatNumber}
          onChange={(e) => setSeatNumber(e.target.value)}
          className="border p-2 rounded mt-4 w-full"
        />
        <button
          onClick={handleBooking}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;
