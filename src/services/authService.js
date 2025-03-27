// services/authService.js
import api from "./api"; // ใช้ api ที่สร้างไว้สำหรับเชื่อมต่อกับ backend

// ฟังก์ชันสำหรับลงทะเบียนผู้ใช้
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData); // ใช้ API endpoint สำหรับการลงทะเบียน
    return response.data; // คืนค่าผลลัพธ์การลงทะเบียน
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; // ถ้ามีข้อผิดพลาดให้ throw error
  }
};

// ฟังก์ชันสำหรับเข้าสู่ระบบ
export const loginUser = async (userData) => {
  try {
    const response = await api.post("/auth/login", userData); // ใช้ API endpoint สำหรับการเข้าสู่ระบบ
    return response.data; // คืนค่าผลลัพธ์การเข้าสู่ระบบ (token และ user data)
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error; // ถ้ามีข้อผิดพลาดให้ throw error
  }
};
