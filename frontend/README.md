# R B Packers & Movers

A professional and responsive website developed for **R B Packers & Movers**, providing packing and moving services for home, office, and company shifting across India.

## 🚚 Project Overview

This project provides R B Packers & Movers with a modern online presence where customers can:

* View the company's services
* Learn about the business
* Submit a free shifting enquiry
* Upload photos and videos with their enquiry
* Contact the business through phone, WhatsApp, and email
* Access social media links
* Find the business location through Google Maps

The project includes a **React.js frontend** and a **Django REST Framework backend** with a Django Admin Panel for managing customer enquiries.

## ✨ Features

### Frontend

* Responsive design for desktop, tablet, and mobile
* Professional Midnight Black & Lime theme
* Home page
* About section
* Services section
* Why Choose Us section
* How It Works section
* Free Quote / Enquiry form
* Contact section
* WhatsApp integration
* Google Maps integration
* Social media links
* Responsive footer
* React Router navigation

### Customer Enquiry System

Customers can submit:

* Name
* Phone number
* Pickup location
* Drop location
* Pickup floor
* Drop floor
* Lift availability
* Items/details
* Photos
* Videos

The enquiry form uses **Axios and FormData** to send the enquiry and uploaded files to the Django backend.

### Backend & Admin Panel

* Django REST Framework API
* Customer enquiry management
* Uploaded file management
* Django Admin Panel
* Enquiry status management
* Search and filtering
* Database storage for enquiries and uploaded files

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* Bootstrap
* React Router
* Axios
* React Icons

### Backend

* Python
* Django
* Django REST Framework
* django-cors-headers

### Database

* SQLite for development

### Tools

* Git
* GitHub
* VS Code
* Postman

## 📁 Project Structure

```text
RB-Packers-Movers/
│
├── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── rb_backend/
    ├── enquiries/
    ├── manage.py
    └── requirements.txt
```

## 🔄 Enquiry Flow

```text
Customer
   ↓
React Enquiry Form
   ↓
Axios + FormData
   ↓
Django REST API
   ↓
Database
   ↓
Django Admin Panel
   ↓
Business Owner
```

Uploaded photos and videos are stored with the corresponding customer enquiry.

## 🎨 Design

The website uses a professional **Midnight Black & Lime** design.

```text
Midnight Black: #0d0f0e
Lime:           #b7d63a
```

The design focuses on:

* Professional appearance
* Clear navigation
* Strong call-to-action sections
* Mobile responsiveness
* Easy customer communication

## 📱 Services

R B Packers & Movers provides:

* Home Shifting
* Full Packing
* Labour & Transportation
* Office Shifting
* Company Shifting

**Service Area:** All India

## 💻 Local Setup

### Backend

Navigate to the backend folder:

```powershell
cd backend
```

Create a virtual environment:

```powershell
python -m venv venv
```

Activate it:

```powershell
venv\Scripts\activate
```

Install dependencies:

```powershell
pip install -r requirements.txt
```

Run migrations:

```powershell
python manage.py migrate
```

Start the Django server:

```powershell
python manage.py runserver
```

Backend:

```text
http://127.0.0.1:8000/
```

### Frontend

Open another terminal and navigate to the frontend:

```powershell
cd frontend
```

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Frontend:

```text
http://localhost:5173/
```

## 📦 Production Build

To create a production build:

```powershell
cd frontend
npm run build
```

The production files are generated inside:

```text
frontend/dist/
```

## 📞 Business Contact

**R B Packers & Movers**

* Phone: 9730730292
* Email: [rbenterprises8171@gmail.com](mailto:rbenterprises8171@gmail.com)
* Service Area: All India

Customers can contact the business through the phone, WhatsApp, email, Google Maps, and social media links available on the website.

## 🔮 Future Enhancements

* Production deployment
* Custom domain
* Production database
* WhatsApp enquiry automation
* SEO optimization
* Google Search Console
* Sitemap and robots.txt
* Google Business Profile optimization
* Additional service pages

## 👩‍💻 Developer

**Fija Khan**

Developed using React.js, Django REST Framework, and modern web development technologies.

## 📄 License

This project was developed as a website project for **R B Packers & Movers**.
