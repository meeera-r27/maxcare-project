# MaxCare – Hospital Management System

<p align="center">
  <img src="screenshots/home.png" alt="MaxCare Home Page" width="100%">
</p>

<h3 align="center">
  A Modern Full-Stack Healthcare & Hospital Management Platform
</h3>

<p align="center">
  Connecting patients, doctors, and administrators through one integrated healthcare platform.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/Stripe-Payments-635BFF?style=for-the-badge&logo=stripe&logoColor=white">
</p>

---

## Overview

**MaxCare** is a full-stack hospital management system designed to simplify and digitize healthcare operations.

The platform provides separate experiences for:

- Patients
- Doctors
- Administrators

Patients can explore doctors, view doctor profiles, book appointments, access diagnostic services, and make online payments.

Doctors can manage appointments and monitor their professional dashboard, while administrators can manage doctors, services, appointments, and overall hospital operations.

---

## Key Features

### Patient Portal

- Browse available doctors
- View doctor specializations and profiles
- View qualifications, experience and consultation fees
- Check doctor availability
- Book medical appointments
- Select available dates and time slots
- Enter patient information
- Choose Cash or Online payment
- Secure online payment through Stripe
- Explore diagnostic services
- Responsive healthcare interface

### Doctor Dashboard

- Doctor-specific dashboard
- View total appointments
- Monitor earnings
- Track completed appointments
- Track cancelled appointments
- View patient information
- Manage appointment status
- Reschedule appointments
- Refresh appointment data

### Admin Panel

- Admin dashboard
- View total doctors
- View registered users
- Monitor appointments
- Track total earnings
- Monitor completed and cancelled appointments
- Add doctors
- Manage doctors
- Manage medical services
- View service appointments
- Search doctors
- Manage hospital operations from one dashboard

### Diagnostic Services

MaxCare provides a dedicated diagnostic services section containing services such as:

- Allergy Test
- Mammography
- MRI Scan
- X-Ray
- Vitamin D Test
- Kidney Function Test
- Liver Function Test
- Blood Sugar Test
- Full Blood Count
- Other healthcare services

---

# Application Screenshots

## Home Page

<p align="center">
  <img src="screenshots/home.png" alt="MaxCare Home Page" width="95%">
</p>

The MaxCare landing page provides quick access to doctors, services, appointments and contact information while highlighting the platform's healthcare features.

---

## Medical Team

<p align="center">
  <img src="screenshots/doctors.png" alt="MaxCare Medical Team" width="95%">
</p>

The medical team section allows patients to explore verified specialists along with their specialization, experience and appointment availability.

---

## Doctor Profile

<p align="center">
  <img src="screenshots/doctor-profile.png" alt="Doctor Profile" width="95%">
</p>

Each doctor has a dedicated profile containing:

- Doctor name
- Specialization
- Qualifications
- Location
- Consultation fee
- Availability
- Experience
- Patient statistics
- About section

---

## Appointment Booking

<p align="center">
  <img src="screenshots/appointment.png" alt="Appointment Booking" width="95%">
</p>

The appointment system allows patients to select a date, check available time slots and enter their personal details before confirming an appointment.

Patients can choose between:

- Cash payment
- Online payment

---

## Diagnostic Services

<p align="center">
  <img src="screenshots/services.png" alt="Diagnostic Services" width="95%">
</p>

The diagnostic services section provides an organized interface for browsing and booking healthcare tests and medical services.

---

## Online Payment

<p align="center">
  <img src="screenshots/payment.png" alt="Stripe Payment" width="90%">
</p>

MaxCare integrates **Stripe Checkout** for secure online appointment payments.

The payment workflow includes:

1. Patient selects an appointment
2. Patient chooses online payment
3. MaxCare creates a Stripe checkout session
4. Patient is redirected to Stripe
5. Payment is processed securely
6. Appointment information is updated

---

# Doctor Dashboard

<p align="center">
  <img src="screenshots/doctor-dashboard.png" alt="Doctor Dashboard" width="95%">
</p>

The doctor dashboard provides an overview of appointment activity and patient information.

### Dashboard Statistics

- Total Appointments
- Total Earnings
- Completed Appointments
- Cancelled Appointments

Doctors can also view appointment details including:

- Patient name
- Patient age
- Gender
- Doctor
- Appointment date
- Appointment time
- Payment amount
- Appointment status

---

# Admin Dashboard

<p align="center">
  <img src="screenshots/admin-dashboard.png" alt="Admin Dashboard" width="95%">
</p>

The admin dashboard provides centralized management of the healthcare platform.

### Admin Features

- Dashboard
- Add Doctor
- List Doctors
- Appointments
- Service Dashboard
- Add Service
- List Services
- Service Appointments

The dashboard also provides quick statistics for doctors, registered users, appointments, earnings and completed appointments.

---

# System Architecture

```text
                    ┌─────────────────────┐
                    │      MaxCare        │
                    │   Healthcare App    │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
      ┌────────────┐    ┌────────────┐    ┌────────────┐
      │  Patient   │    │   Doctor   │    │   Admin    │
      │   Portal   │    │  Dashboard │    │    Panel   │
      └─────┬──────┘    └─────┬──────┘    └─────┬──────┘
            │                 │                  │
            └─────────────────┼──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Express / Node  │
                    │    REST API      │
                    └────────┬─────────┘
                             │
                 ┌───────────┼───────────┐
                 │           │           │
                 ▼           ▼           ▼
             MongoDB      Stripe      Cloudinary
             Database     Payments     Image Storage
Technology Stack
Frontend
React.js
Vite
Tailwind CSS
React Router
Axios
Lucide React
Backend
Node.js
Express.js
MongoDB
Mongoose
REST APIs
Authentication & Security
Clerk Authentication
JWT
Bcrypt
Role-based access
Payment
Stripe Checkout
File & Image Management
Cloudinary
Multer
Development Tools
VS Code
Git
GitHub
Postman
MongoDB Atlas
Project Structure
MaxCare
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── assets
│   │   ├── context
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── admin
│   ├── src
│   └── package.json
│
├── doctor
│   ├── src
│   └── package.json
│
├── screenshots
│   ├── home.png
│   ├── doctors.png
│   ├── doctor-profile.png
│   ├── appointment.png
│   ├── services.png
│   ├── payment.png
│   ├── doctor-dashboard.png
│   └── admin-dashboard.png
│
└── README.md
Core Modules
1. User Management

Patients can register and authenticate securely before accessing healthcare services.

2. Doctor Management

Administrators can add and manage doctors along with their:

Name
Specialization
Qualification
Experience
Consultation fee
Availability
Profile image
3. Appointment Management

The appointment module handles:

Doctor Selection
       ↓
Doctor Profile
       ↓
Select Date
       ↓
Select Time Slot
       ↓
Patient Details
       ↓
Payment Method
       ↓
Appointment Confirmation
4. Payment Management

Online appointment payments are handled through Stripe.

Appointment
     ↓
Payment Selection
     ↓
Stripe Checkout
     ↓
Payment Processing
     ↓
Appointment Confirmation
5. Medical Services

Administrators can add and manage diagnostic and healthcare services.

6. Doctor Dashboard

Doctors can monitor their appointments, patients and earnings through a dedicated dashboard.

7. Admin Dashboard

Administrators can monitor and manage the complete healthcare system from a centralized dashboard.

Database Entities

The application uses MongoDB with Mongoose for database management.

Major entities include:

Users
Doctors
Patients
Prescriptions
Health Tips
Services
Appointments
Payments

Relationships between these entities allow MaxCare to manage users, doctors, appointments, services and payments efficiently.

Appointment Workflow
Patient
   │
   ▼
Browse Doctors
   │
   ▼
Select Doctor
   │
   ▼
View Doctor Profile
   │
   ▼
Select Date & Time
   │
   ▼
Enter Patient Details
   │
   ▼
Select Payment Method
   │
   ├───────────────┐
   │               │
   ▼               ▼
  Cash          Stripe
   │               │
   │               ▼
   │        Online Payment
   │               │
   └───────┬───────┘
           ▼
    Confirm Appointment
           │
           ▼
      Doctor Dashboard
Installation & Setup
1. Clone the Repository
git clone https://github.com/YOUR_USERNAME/maxcare.git
cd maxcare
2. Install Frontend Dependencies
cd frontend
npm install
3. Install Backend Dependencies
cd ../backend
npm install
4. Configure Environment Variables

Create a .env file inside the backend directory.

MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

STRIPE_SECRET_KEY=your_stripe_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Never commit your .env file or expose secret API keys publicly.

5. Start the Backend
cd backend
npm run server

The backend will run on the configured local port.

6. Start the Frontend

Open another terminal:

cd frontend
npm run dev

Open the local development URL shown by Vite.

API Communication

The frontend communicates with the backend through REST APIs.

Example structure:

React Frontend
      │
      │ Axios
      ▼
Express REST API
      │
      ▼
MongoDB

Authentication and protected operations are handled through middleware and role-based access.

Security

MaxCare implements several security practices including:

Authentication
Protected API routes
Role-based access
Password hashing
Environment variables for secrets
Secure payment processing through Stripe
Server-side validation
Protected doctor/admin functionality
Responsive Design

The application is designed to provide a consistent experience across:

Desktop
Laptop
Tablet
Mobile devices

The UI uses responsive layouts, reusable components and Tailwind CSS utilities.

Future Enhancements

Potential improvements for future versions include:

Video consultation
Prescription management
Patient medical history
Health records
Email notifications
SMS appointment reminders
Advanced analytics
Doctor availability calendar
Hospital departments
Multiple hospital branches
AI-assisted healthcare recommendations
Digital prescription generation
Project Highlights
✓ Full-Stack MERN Architecture
✓ Patient Portal
✓ Doctor Dashboard
✓ Admin Panel
✓ Doctor Management
✓ Appointment Booking
✓ Real-Time Availability
✓ Diagnostic Services
✓ Stripe Payment Integration
✓ Cloudinary Image Management
✓ Authentication & Authorization
✓ Responsive UI
✓ REST API Architecture
✓ MongoDB Database
Learning Outcomes

Developing MaxCare provided practical experience in:

Full-stack web development
React application architecture
REST API development
MongoDB database design
Authentication and authorization
Role-based access control
Appointment management systems
Payment gateway integration
Cloud image management
Dashboard development
Responsive UI design
API integration
Git and GitHub workflow
Screenshots
Patient Portal	Doctor Profile
<img src="screenshots/home.png" width="450">	<img src="screenshots/doctor-profile.png" width="450">
Appointment Booking	Diagnostic Services
<img src="screenshots/appointment.png" width="450">	<img src="screenshots/services.png" width="450">
Doctor Dashboard	Admin Dashboard
<img src="screenshots/doctor-dashboard.png" width="450">	<img src="screenshots/admin-dashboard.png" width="450">
Author
Meera R

B.Tech Computer Science & Engineering

Interested in Full-Stack Development, Data Science and building practical software solutions.
