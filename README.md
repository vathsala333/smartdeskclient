SmartDesk AI — Intelligent Support Ticket System (Frontend)

SmartDesk AI is an intelligent customer support platform that automates ticket classification and response generation using AI.
This frontend provides a clean, modern dashboard for users to create, track, and manage support tickets efficiently.

The system reduces manual workload by using AI to classify tickets, set priorities, and generate initial replies.

🌐 Live Demo
Component	Link
Frontend (Netlify)	https://smartdeskclient.netlify.app

Backend API	https://smartdeskserver.onrender.com
🧠 AI Capabilities

SmartDesk AI uses Cloudflare AI (LLaMA 3) to:

Classify tickets automatically

Detect priority and sentiment

Generate first AI support response

Improve customer support efficiency

Reduce manual triaging work

⚙️ Tech Stack

React.js

Axios

Context API

JWT Authentication

Cloudflare AI Integration

CSS / Modern UI

Netlify Deployment

✨ Features

Secure user authentication (Login / Register)

AI-powered ticket classification

Real-time AI support replies

Ticket creation and tracking

Dashboard analytics

Token-based protected routes

Clean and responsive UI

Logout notification system

Cloud deployment

📂 Project Structure
smartdesk-frontend/
│
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AIDashboard.jsx
│   │   └── CreateTicket.jsx
│   ├── App.jsx
│   └── main.jsx

💻 Installation (Run Locally)

Clone the repository:

git clone https://github.com/vathsala333/smartdeskclient.git
cd smartdeskclient


Install dependencies:

npm install


Run the app:

npm run dev


The frontend will run at:

http://localhost:5173

🔐 Authentication Flow

User registers and logs in

JWT token stored in browser

Protected routes for dashboard and ticket system

Secure API communication

🎟️ Ticket Workflow

User creates support ticket

AI classifies ticket automatically

AI generates first support reply

User continues conversation

Ticket resolution and closure

📸 UI Preview
🔑 Login Page
<p align="center"> <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/Login.png" width="550px"> </p>
📝 Register Page
<p align="center"> <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/Register.png" width="550px"> </p>
✅ Registration Success
<p align="center"> <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/RegistrationSuccessfull.png" width="550px"> </p>
📊 Dashboard Overview
<p align="center"> <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/Dashboard.png" width="550px"> </p>
🤖 AI Dashboard
<p align="center"> <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/AIDashboard.png" width="550px"> </p>
🔔 Logout Notification
<p align="center"> <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/LoggoutNotification.png" width="550px"> </p>
🚀 Deployment

Frontend deployed using:

Netlify

Backend API hosted on Render

MongoDB Atlas for database

🎯 Why this project?

This project demonstrates:

Full-stack MERN architecture

Secure authentication

AI integration in real-world product

Clean UI and UX design

Scalable SaaS mindset

Cloud deployment

Industry-level project structure

📈 Future Improvements

Real-time chat (WebSockets)

Email notifications

Role-based access

Multi-agent support

Analytics dashboard

Knowledge base automation

📬 Contact

Feel free to connect for collaboration or feedback.



System design explanation of your project

This will help you much more than README polishing.
