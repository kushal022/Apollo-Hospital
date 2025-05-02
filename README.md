# 🏥 Apollo Hospital App

A full-stack hospital management application built with **React**, **Node.js**, **Express**, and **MongoDB**, designed to manage and display doctor data efficiently. This app includes robust features like filters, pagination, and the ability to add new doctors.

---

## 📦 Tech Stack

**Frontend:**
- React
- Axios
- ContextApi
- Tailwind CSS
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose ODM)

---

## ✨ Features

### 🔍 Doctor Filtering
- Filter doctors by:
  - Mode of consult (Online / Hospital)
  - Years of experience
  - Fees
  - Language
  - Hospital facility
- Real-time update on filter change.

### 📄 Doctor List
- Dynamic doctor listing pulled from backend API.
- Pagination support for improved usability on large datasets.

### ➕ Add Doctor
- Full form to add new doctors including:
  - Basic Information
  - Contact Details
  - Professional Info
  - Employment & Education
  - Availability & Services
  - Ratings, Language, and Consult Mode
- Responsive UI built with Tailwind CSS.
- Axios-powered submission to backend API.

---

## 🚀 API Endpoints

### `POST /api/v1/doctors/createDoc`
### `POST /api/v1/doctors/getAllDoc`
### `POST /api/v1/doctors/getAllFilterDoc`

👨‍💻 Author
Built by Kushal Jangid – Backend & Frontend Developer