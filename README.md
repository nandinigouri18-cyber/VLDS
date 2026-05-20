# VLDS - Modern Healthcare Web Application 🏥

A complete full-stack healthcare web application built with modern technologies. VLDS provides comprehensive healthcare services including medicine delivery, blood donation, lab tests, doctor consultation, and AI health chatbot.

## ✨ Features

### 1. Medicine Delivery System
- Search medicines with advanced filters
- Categories: Fever, Cold & Cough, Diabetes, BP, Vitamins, Skin Care, Baby Care
- Add to cart and wishlist
- Quick checkout with 10-15 minute delivery
- Order confirmation and history

### 2. Live Order Tracking
- Real-time delivery tracking
- Delivery stages visualization
- Delivery partner information
- Animated progress tracking

### 3. Blood Donation & Emergency Finder
- Search by blood group and location
- Find nearby hospitals and blood banks
- Available donor directory
- Emergency blood request system
- Donor and hospital registration

### 4. Prescription Upload System
- Drag and drop prescription upload
- Image and PDF support
- Prescription history management
- Order medicines from prescription

### 5. Lab Test Booking
- Browse diagnostic tests
- Home sample collection booking
- Schedule appointments
- View lab reports
- Ratings and reviews

### 6. Online Doctor Consultation
- Browse verified doctors
- Filter by specialization
- Video and chat consultations
- Appointment booking
- Consultation history

### 7. AI Health Chatbot
- Healthcare-specific AI assistant
- Symptom guidance
- Voice input support
- Chat history management

### 8. User Authentication
- Secure signup/login
- OTP verification
- Password recovery
- User profile management

### 9. Admin Dashboard
- Manage medicines, users, orders
- Blood request management
- Hospital and doctor management
- Lab test administration
- Analytics and statistics

## 🛠️ Tech Stack

### Frontend
- React.js 18+ with Hooks
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls
- Framer Motion for animations
- React Icons
- Zustand for state management

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT authentication
- Bcrypt for password hashing
- Nodemailer for emails
- Multer for file uploads

## 📁 Project Structure

```
VLDS/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── medicine/
│   │   │   ├── blood/
│   │   │   ├── doctor/
│   │   │   ├── lab/
│   │   │   ├── auth/
│   │   │   └── chatbot/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── .env.example
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── config/
│   │   └── server.js
│   ├── .env.example
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- MongoDB (local or cloud)

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Visit: http://localhost:5173

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Server runs on: http://localhost:5000

## 🎨 Design System

- **Primary Color**: Medical Red (#DC2626)
- **Secondary Color**: Healthcare Blue (#0369A1)
- **Background**: Clean White
- **Font**: Poppins, Inter
- **Animations**: Smooth transitions with Framer Motion
- **Dark Mode**: Full support

## 📝 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=VLDS
```

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/vlds
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
NODE_ENV=development
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-otp` - OTP verification
- `POST /api/auth/forgot-password` - Password reset
- `GET /api/auth/profile` - Get user profile

### Medicine Delivery
- `GET /api/medicines` - Get all medicines
- `GET /api/medicines/:id` - Get medicine details
- `GET /api/medicines/search` - Search medicines
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details

### Blood Donation
- `GET /api/blood/availability` - Get blood availability
- `GET /api/blood/hospitals` - Get nearby hospitals
- `POST /api/blood/request` - Request blood
- `POST /api/blood/donor/register` - Register as donor

### Lab Tests
- `GET /api/tests` - Get all lab tests
- `POST /api/tests/book` - Book a test
- `GET /api/tests/reports/:id` - Get lab report

### Doctor Consultation
- `GET /api/doctors` - Get all doctors
- `POST /api/appointments` - Book appointment
- `GET /api/consultations` - Get consultation history

### Chatbot
- `POST /api/chat` - Send message to chatbot
- `GET /api/chat/history` - Get chat history

## 🔐 Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Input validation and sanitization
- ✅ CORS protection
- ✅ Rate limiting
- ✅ Secure HTTP headers
- ✅ Environment variable protection

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet optimization
- ✅ Desktop views
- ✅ Touch-friendly UI elements
- ✅ Dark mode support

## 🎯 Performance

- ✅ Code splitting
- ✅ Lazy loading
- ✅ Image optimization
- ✅ Caching strategies
- ✅ API optimization

## 🧪 Testing

Run frontend tests:
```bash
cd frontend
npm run test
```

Run backend tests:
```bash
cd backend
npm run test
```

## 📦 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
vercel deploy
```

### Backend (Render/Railway)
```bash
cd backend
npm run build
# Deploy to platform
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - See LICENSE file for details

## 📞 Support & Contact

- Email: support@vlds.com
- Phone: 1-800-VLDS-HELP
- Website: www.vlds.com

---

**Built with ❤️ for Healthcare Innovation**

**Last Updated**: May 2026
**Version**: 1.0.0
