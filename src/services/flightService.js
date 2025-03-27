// services/flightService.js
import api from "./api"; // ใช้ service api ที่สร้างไว้

// ฟังก์ชันดึงเที่ยวบินทั้งหมด
export const getAllFlights = async () => {
  try {
    const response = await api.get("/flights");
    return response.data; // คืนค่าข้อมูลเที่ยวบินทั้งหมด
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

// ฟังก์ชันดึงเที่ยวบินตาม ID
export const getFlightById = async (id) => {
  try {
    const response = await api.get(`/flights/${id}`);
    return response.data; // คืนค่าข้อมูลเที่ยวบินตาม ID
  } catch (error) {
    console.error("Error fetching flight by ID:", error);
    throw error;
  }
};

// ฟังก์ชันเพิ่มเที่ยวบินใหม่ (สำหรับแอดมิน)
export const createFlight = async (flightData) => {
  try {
    const response = await api.post("/flights", flightData);
    return response.data; // คืนค่าข้อมูลเที่ยวบินที่สร้างใหม่
  } catch (error) {
    console.error("Error creating flight:", error);
    throw error;
  }
};

// ฟังก์ชันแก้ไขข้อมูลเที่ยวบิน (สำหรับแอดมิน)
export const updateFlight = async (id, flightData) => {
  try {
    const response = await api.put(`/flights/${id}`, flightData);
    return response.data; // คืนค่าข้อมูลเที่ยวบินที่ถูกแก้ไข
  } catch (error) {
    console.error("Error updating flight:", error);
    throw error;
  }
};

// ฟังก์ชันลบเที่ยวบิน (สำหรับแอดมิน)
export const deleteFlight = async (id) => {
  try {
    const response = await api.delete(`/flights/${id}`);
    return response.data; // คืนค่าข้อความที่แสดงว่าเที่ยวบินถูกลบ
  } catch (error) {
    console.error("Error deleting flight:", error);
    throw error;
  }
};
