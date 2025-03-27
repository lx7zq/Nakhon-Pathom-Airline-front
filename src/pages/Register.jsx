import React, { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstNameTH, setFirstNameTH] = useState("");
  const [lastNameTH, setLastNameTH] = useState("");
  const [firstNameEN, setFirstNameEN] = useState("");
  const [lastNameEN, setLastNameEN] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ใช้ navigate แทน history

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      firstNameTH,
      lastNameTH,
      firstNameEN,
      lastNameEN,
      email,
      phone,
      password,
    };

    try {
      const result = await registerUser(userData);
      alert(result.message); // แสดงข้อความจาก API response
      navigate("/login"); // เปลี่ยนหน้าไปยังหน้า Login
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-8">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 border rounded-lg"
      >
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label
            htmlFor="firstNameTH"
            className="block text-lg font-medium mb-2"
          >
            First Name (TH)
          </label>
          <input
            type="text"
            id="firstNameTH"
            value={firstNameTH}
            onChange={(e) => setFirstNameTH(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastNameTH"
            className="block text-lg font-medium mb-2"
          >
            Last Name (TH)
          </label>
          <input
            type="text"
            id="lastNameTH"
            value={lastNameTH}
            onChange={(e) => setLastNameTH(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="firstNameEN"
            className="block text-lg font-medium mb-2"
          >
            First Name (EN)
          </label>
          <input
            type="text"
            id="firstNameEN"
            value={firstNameEN}
            onChange={(e) => setFirstNameEN(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastNameEN"
            className="block text-lg font-medium mb-2"
          >
            Last Name (EN)
          </label>
          <input
            type="text"
            id="lastNameEN"
            value={lastNameEN}
            onChange={(e) => setLastNameEN(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-medium mb-2">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
