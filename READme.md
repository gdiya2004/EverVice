# 🚀 EverVice – Service Marketplace Platform

EverVice is a full-stack web application where users can discover and book services, vendors can offer their services, and admins manage the platform.

---

## 🧠 Features

### 👤 User

* Browse services with filters (location, category, price)
* View service details
* Contact vendors / make bookings
* Authentication (Signup/Login)

---

### 🧑‍💼 Vendor

* Request to become a vendor
* Get approved by admin
* Access vendor dashboard
* Add / delete services
* View booking requests

---

### 🛡️ Admin

* Approve / reject vendor requests
* View all bookings
* Manage platform users indirectly

---

## 🏗️ Tech Stack

### Frontend

* Next.js (React)
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* Password hashing (bcrypt)

---

## 📂 Folder Structure

```
EverVice/
│
├── frontend/        # Next.js app
├── backend/         # Express server
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
```

---

## 🔐 Environment Variables

### Backend (.env)

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```
git clone https://github.com/your-username/evervice.git
cd evervice
```

---

### 2️⃣ Install dependencies

#### Backend

```
cd backend
npm install
```

#### Frontend

```
cd frontend
npm install
```

---

### 3️⃣ Run the project

#### Start backend

```
npm run dev
```

#### Start frontend

```
npm run dev
```

---

## 🔄 Application Flow

```
User Signup/Login
        ↓
User requests vendor access
        ↓
Admin approves request
        ↓
User becomes Vendor
        ↓
Vendor adds services
        ↓
Services appear on homepage
        ↓
Users book services
        ↓
Bookings visible to Admin & Vendor
```

---

## 🔐 Security Features

* JWT-based authentication
* Role-based access control (user / vendor / admin)
* Protected backend routes
* Secure password storage using bcrypt

---

## 🌐 Deployment

* Frontend: Vercel
* Backend: Render / Railway
* Database: MongoDB Atlas

---

## 📌 Future Improvements

* Booking status (accept/reject by vendor)
* Notifications system
* Image upload for services
* Payment integration
* Ratings & reviews system

---

## 👨‍💻 Author

**Your Name**

---

## ⭐ Conclusion

EverVice is a scalable service marketplace platform demonstrating:

* Full-stack development
* Authentication & authorization
* Real-world workflow (admin approval system)

---
