// services/bookingService.js
import api from "./api"; // เรียกใช้ api ที่สร้างไว้

// ฟังก์ชันสำหรับการจองเที่ยวบิน
export const createBooking = async (bookingData) => {
  try {
    const response = await api.post("/bookings", bookingData);
    return response.data; // คืนค่าการจองที่สร้างใหม่
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

// ฟังก์ชันดึงรายการจองทั้งหมด (สำหรับแอดมิน)
export const getAllBookings = async () => {
  try {
    const response = await api.get("/bookings");
    return response.data; // คืนค่ารายการจองทั้งหมด
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    throw error;
  }
};

// ฟังก์ชันดึงรายการจองของผู้ใช้
export const getUserBookings = async (userId) => {
  try {
    const response = await api.get(`/bookings/user/${userId}`);
    return response.data; // คืนค่ารายการจองของผู้ใช้
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    throw error;
  }
};

// ฟังก์ชันดึงรายละเอียดการจองตาม ID
export const getBookingById = async (id) => {
  try {
    const response = await api.get(`/bookings/${id}`);
    return response.data; // คืนค่ารายละเอียดการจอง
  } catch (error) {
    console.error("Error fetching booking by ID:", error);
    throw error;
  }
};

// ฟังก์ชันยกเลิกการจอง
export const cancelBooking = async (id) => {
  try {
    const response = await api.delete(`/bookings/${id}`);
    return response.data; // คืนค่าข้อความที่แสดงว่าได้ยกเลิกการจองแล้ว
  } catch (error) {
    console.error("Error canceling booking:", error);
    throw error;
  }
};
