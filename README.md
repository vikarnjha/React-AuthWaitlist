
# 🎉 EventX – Full-Stack Event Management Platform

EventX is a full-stack event management application built using **React**, **Node.js**, **Express**, and **MongoDB**. It offers a seamless user experience for browsing, subscribing, and registering for events—with secure authentication, payment processing, and email confirmations.

---

## 🚀 Features

- 🔐 **Authentication System**
  - JWT-based login and signup
  - Secure password hashing (bcrypt)
  - Protected routes for authenticated users

- 🏠 **Homepage with Event Cards**
  - Events displayed in a clean card layout
  - Each card has:
    - ✅ Subscribe
    - ✅ Register
    - ✅ Add to Cart

- 🛒 **Cart System**
  - Add multiple events to cart
  - Register or subscribe in bulk
  - Real-time cart update and checkout process

- 💳 **Payment Integration**
  - Total event price calculation
  - Payment gateway integration
  - Payment confirmation handling

- 📧 **Email Notifications**
  - Sent on event subscription and registration
  - Integrated via Nodemailer (Gmail SMTP)

- 🧾 **User Dashboard**
  - View all subscribed and registered events
  - Access payment history and past activities

- 🧠 **Future Integration Plans**
  - 💬 Real-time Chat App (event-based discussions)
  - ✍️ Blog Platform for event-related articles

---

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Nodemailer for emails

### Other Tools
- UPI or Razorpay for payments
- Postman for API testing
- MongoDB Atlas for cloud database
- Vercel (Frontend Deployment)
- Render (Backend Deployment)

---


## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/vikarnjha/React-EventX.git
cd frontend
npm install
```

### 2. Install Dependencies

```bash
# Backend
cd backend
npm install

```

### 3. Create `.env` Files

Set environment variables in both `server/.env` and `client/.env`.

**Example for `server/.env`:**
```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_gmail
EMAIL_PASS=your_app_password
```

---

## 📬 Email Configuration

- Enable **2FA** on your Gmail
- Create an **App Password** for Nodemailer
- Use this password in `EMAIL_PASS`

---

## 💡 Future Plans

- [ ] Integrate real-time chat (Socket.io)
- [ ] Build and integrate blog platform
- [ ] Admin dashboard for event management

---

## 📃 License

MIT License © 2025 Vikarn Jha

---

## 🙌 Acknowledgements

- React Documentation
- Node.js & Express Guides
- MongoDB University
- Nodemailer & Stripe Docs
