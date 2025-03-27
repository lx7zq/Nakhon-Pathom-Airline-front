import React, { useState, useEffect } from "react";
import { getAllFlights } from "../services/flightService"; // import ฟังก์ชัน getAllFlights
import { Link } from "react-router";

const Home = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const flightsData = await getAllFlights(); // เรียกใช้ฟังก์ชันจาก flightService
        setFlights(flightsData); // เก็บข้อมูลเที่ยวบินที่ได้มา
      } catch (err) {
        console.error(err);
      }
    };
    fetchFlights();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-8">Available Flights</h1>
      <div className="grid grid-cols-3 gap-4">
        {flights.map((flight) => (
          <div key={flight._id} className="card border rounded-md p-4">
            <h2 className="text-xl font-semibold">{flight.flightName}</h2>
            <p>
              {flight.departureAirport} → {flight.arrivalAirport}
            </p>
            <p>Departure: {new Date(flight.departureTime).toLocaleString()}</p>
            <p>Arrival: {new Date(flight.arrivalTime).toLocaleString()}</p>
            <p>Seats Available: {flight.availableSeats}</p>
            <p>Price: ${flight.price}</p>
            <Link
              to={`/booking/${flight._id}`}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 block text-center"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
