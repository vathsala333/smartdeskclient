# SmartDesk AI — Intelligent Support Ticket System (Frontend)

SmartDesk AI is an intelligent customer support platform that automates ticket classification and response generation using AI.
This frontend provides a clean and modern dashboard for users to create, track, and manage support tickets efficiently.

The system reduces manual workload by using AI to classify tickets, set priorities, and generate initial responses.

---

## 🌐 Live Demo

| Component          | Link                                 |
| ------------------ | ------------------------------------ |
| Frontend (Netlify) | https://smartdeskclient.netlify.app  |
| Backend API        | https://smartdeskserver.onrender.com |

---

## 🚀 Features

* Secure authentication system
* Create and manage support tickets
* AI-powered ticket classification
* Automated AI support replies
* Real-time ticket updates
* Logout and session handling
* Clean and responsive dashboard UI
* Token-based authentication with refresh flow
* Deployed production frontend

---

## 🤖 AI Capabilities

SmartDesk AI uses Cloudflare AI (LLaMA 3) to:

* Automatically classify support tickets
* Detect priority and sentiment
* Generate first AI-based support response
* Improve customer support efficiency
* Reduce manual triaging workload

---

## 🛠 Tech Stack

* React.js
* Axios
* Context API
* JWT Authentication
* Cloudflare AI Integration
* CSS / Responsive UI
* Netlify Deployment

---

## 📂 Project Structure

```
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
│   │  
│   ├── App.jsx
│   └── main.jsx
```

---

## 📸 UI Preview

### 🔐 Login Page

<p align="center">
  <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/Login.png" width="550px">
</p>

---

### 📝 Register Page

<p align="center">
  <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/Register.png" width="550px">
</p>

---

### ✅ Registration Success Notification

<p align="center">
  <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/RegistrationSuccessfull.png" width="550px">
</p>

---

### 📊 Dashboard

<p align="center">
  <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/Dashboard.png" width="550px">
</p>

---

### 🤖 AI Ticket Dashboard

<p align="center">
  <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/AIDashboard.png" width="550px">
</p>

---

### 🔔 Logout Notification

<p align="center">
  <img src="https://raw.githubusercontent.com/vathsala333/smartdeskclient/main/screenshot/LoggoutNotification.png" width="550px">
</p>

---

## ⚙️ Installation (Run Locally)

Clone the repository:

```bash
git clone https://github.com/vathsala333/smartdeskclient.git
cd smartdeskclient
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

1. User registers and logs in
2. JWT token stored in browser
3. Token used in API calls
4. Refresh token ensures secure session
5. Auto logout on token expiry

---

## 📌 Why this project?

This project demonstrates:

* Full-stack MERN architecture
* Secure authentication practices
* AI integration in real-world SaaS
* Production deployment
* Modern frontend design
* API communication and state management
* Real-world product thinking

---

## 📬 Contact

Feel free to connect for collaboration or feedback.
