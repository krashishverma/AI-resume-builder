# 🚀 AI-Powered Resume Builder

A full-stack MERN (MongoDB, Express, React, Node.js) application with AI capabilities to help users create professional resumes with multiple templates and PDF export functionality.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Docker](https://img.shields.io/badge/docker-ready-blue.svg)
![Node](https://img.shields.io/badge/node-18.x-green.svg)
![React](https://img.shields.io/badge/react-18.x-blue.svg)

## ✨ Features

### 🎨 Resume Building
- **Multi-section Editor**: Personal Info, Experience, Education, Skills, Projects
- **5 Professional Templates**: Modern, Professional, Creative, Minimal, Elegant
- **Live Preview**: Real-time resume preview with drawer
- **PDF Export**: High-quality PDF download (A4 format, print-ready)
- **Template Selector**: Switch between templates instantly

### 🤖 AI-Powered Features
- **AI Summary Generation**: Google Gemini AI creates professional summaries
- **Smart Suggestions**: AI-powered skill recommendations
- **Job Description Improvement**: Transform descriptions into achievements
- **Resume Analysis**: Get feedback and improvement suggestions

### 🔐 User Management
- **Authentication**: JWT-based secure login/registration
- **Personal Dashboard**: Manage multiple resumes
- **CRUD Operations**: Create, read, update, delete resumes
- **Protected Routes**: Secure API endpoints

### 🐳 DevOps Ready
- **Docker Compose**: Full containerization (3 services)
- **Kubernetes Configs**: Ready for K8s deployment
- **Health Checks**: Container health monitoring
- **Volume Persistence**: MongoDB data persistence

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js 18 (Alpine)
- **Framework**: Express.js 4.18.2
- **Database**: MongoDB 7
- **ODM**: Mongoose 8.0.3
- **AI**: Google Gemini API (@google/generative-ai 0.21.0)
- **Auth**: JWT (jsonwebtoken + bcryptjs)

### Frontend
- **Library**: React 18.2.0
- **UI Framework**: Material-UI 5.14.20
- **Routing**: React Router 6.20.0
- **HTTP Client**: Axios 1.6.2
- **PDF Export**: jsPDF 2.5.1 + html2canvas 1.4.1

### DevOps
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx (Alpine)
- **Orchestration**: Kubernetes (configs included)

---

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose installed
- Google Gemini API key ([Get it free](https://aistudio.google.com/app/apikey))

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/mern-docker-k8s.git
cd mern-docker-k8s
\`\`\`

### 2. Set Up Environment Variables
\`\`\`bash
# Copy example env file
cp backend/.env.example backend/.env

# Edit backend/.env and add your Gemini API key
nano backend/.env
\`\`\`

Add your Gemini API key:
\`\`\`env
GEMINI_API_KEY=your_actual_api_key_here
\`\`\`

### 3. Start with Docker Compose
\`\`\`bash
docker-compose up -d
\`\`\`

### 4. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **MongoDB**: localhost:27017

---

## 📦 Installation (Without Docker)

### Backend Setup
\`\`\`bash
cd backend
npm install
cp .env.example .env
# Edit .env with your values
npm start
\`\`\`

### Frontend Setup
\`\`\`bash
cd frontend
npm install
npm start
\`\`\`

### MongoDB Setup
\`\`\`bash
# Install MongoDB locally or use MongoDB Atlas
# Update MONGO_URI in backend/.env
\`\`\`

---

## 🐳 Docker Commands

\`\`\`bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild containers
docker-compose up -d --build

# Check container status
docker-compose ps

# Access backend container
docker exec -it mern-backend sh

# Access MongoDB shell
docker exec -it mern-mongodb mongosh
\`\`\`

---

## 📂 Project Structure

\`\`\`
mern-docker-k8s/
├── backend/                    # Node.js + Express API
│   ├── routes/
│   │   ├── auth.js            # Authentication routes
│   │   ├── resumes.js         # Resume CRUD routes
│   │   └── ai.js              # AI generation routes
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── Resume.js          # Resume schema
│   ├── middleware/
│   │   └── auth.js            # JWT authentication
│   ├── services/
│   │   └── aiService.js       # Gemini AI integration
│   ├── server.js              # Main server file
│   ├── Dockerfile             # Backend container config
│   └── package.json
│
├── frontend/                   # React Application
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   │   └── ResumeEditor.js
│   │   ├── components/
│   │   │   └── ResumeTemplate.js  # 5 template components
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   └── services/
│   │       └── api.js
│   ├── Dockerfile             # Frontend container config
│   ├── nginx.conf             # Nginx configuration
│   └── package.json
│
├── k8s/                       # Kubernetes configs
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
│   ├── mongodb-deployment.yaml
│   └── configmap.yaml
│
├── docker-compose.yml         # Docker orchestration
├── .gitignore
└── README.md
\`\`\`

---

## 🎯 Usage Guide

### 1. Register/Login
- Visit http://localhost:3000
- Create a new account
- Login with your credentials

### 2. Create Resume
- Click "Create New Resume"
- Fill in all sections:
  - **Personal Info**: Name, email, phone, location
  - **Experience**: Add jobs with descriptions
  - **Education**: Add degrees and institutions
  - **Skills**: Technical and soft skills
  - **Projects**: Add projects with URLs and tech stack

### 3. Use AI Features
- Click **"Generate AI Summary"** for professional summary
- AI will create optimized content based on your data

### 4. Choose Template
- Select from dropdown: Modern/Professional/Creative/Minimal/Elegant
- See live preview

### 5. Download PDF
- Click **"PDF"** button
- High-quality PDF downloads as `[YourName].pdf`

---

## 🎨 Resume Templates

| Template | Style | Best For |
|----------|-------|----------|
| **Modern** | Purple gradient, tech-focused | Startups, Tech companies |
| **Professional** | Navy & blue, corporate | Finance, Consulting |
| **Creative** | Colorful sidebar, vibrant | Design, Marketing |
| **Minimal** | Clean grayscale, spacious | Modern companies |
| **Elegant** | Serif fonts, navy & gold | Executive, Law firms |

---

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Resumes
- `GET /api/resumes` - Get all user's resumes (protected)
- `GET /api/resumes/:id` - Get single resume (protected)
- `POST /api/resumes` - Create resume (protected)
- `PUT /api/resumes/:id` - Update resume (protected)
- `DELETE /api/resumes/:id` - Delete resume (protected)

### AI Features
- `POST /api/ai/generate-summary` - Generate AI summary (protected)

---

## 🔐 Environment Variables

### Backend (.env)
\`\`\`env
PORT=5000
MONGO_URI=mongodb://mongodb:27017/resumebuilder
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
\`\`\`

### Get Gemini API Key
1. Visit: https://aistudio.google.com/app/apikey
2. Sign in with Google
3. Click "Create API Key"
4. Copy and paste into `.env`

**Free Tier**: 60 requests/min, 1,500 requests/day

---

## 🚢 Deployment

### Docker Compose (Production)
\`\`\`bash
docker-compose -f docker-compose.yml up -d
\`\`\`

### Kubernetes
\`\`\`bash
kubectl apply -f k8s/
\`\`\`

### Environment Setup
- Set production environment variables
- Use MongoDB Atlas for production database
- Configure domain and SSL certificates
- Set up CI/CD pipeline

---

## 🧪 Testing

### Test Gemini AI
\`\`\`bash
docker exec -i mern-backend node test-gemini.js
\`\`\`

### Check Container Health
\`\`\`bash
docker-compose ps
\`\`\`

### View Logs
\`\`\`bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
\`\`\`

---

## 🐛 Troubleshooting

### Gemini API Not Working
1. Check API key is valid
2. Ensure API is enabled: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com
3. Restart backend: `docker-compose restart backend`

### MongoDB Connection Failed
1. Check if MongoDB container is healthy: `docker-compose ps`
2. Verify MONGO_URI in `.env`
3. Restart: `docker-compose down && docker-compose up -d`

### PDF Download Not Working
1. Ensure preview is visible
2. Check browser console for errors
3. Try different browser (Chrome recommended)

### Frontend Not Loading
1. Clear browser cache
2. Check frontend logs: `docker-compose logs frontend`
3. Rebuild: `docker-compose up -d --build frontend`

---

## 📚 Documentation

- [Docker Setup Guide](./DOCKER-RUN-GUIDE.md)
- [Gemini API Setup](./GEMINI-API-KEY-SETUP.md)
- [Template Guide](./TEMPLATES-AND-PDF-GUIDE.md)
- [PDF Download Guide](./PDF-DOWNLOAD-FIXED.md)
- [Project Complete Summary](./FINAL-PROJECT-COMPLETE.md)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google Gemini AI** - AI-powered content generation
- **Material-UI** - Beautiful React components
- **MongoDB** - Flexible database
- **Docker** - Containerization platform
- **React** - Frontend framework
- **Express.js** - Backend framework

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/YOUR_USERNAME/mern-docker-k8s/issues)
- **Discussions**: [GitHub Discussions](https://github.com/YOUR_USERNAME/mern-docker-k8s/discussions)

---

## 🌟 Features Roadmap

- [ ] Email resume as PDF
- [ ] Share resume via link
- [ ] Import from LinkedIn
- [ ] Cover letter generator
- [ ] Multiple resume versions
- [ ] Custom color themes
- [ ] Template preview gallery
- [ ] Resume analytics

---

## 📊 Stats

- **Templates**: 5 professional designs
- **AI Models**: Google Gemini 2.0
- **Containers**: 3 (MongoDB, Backend, Frontend)
- **API Endpoints**: 8
- **Supported Formats**: PDF export

---

**Built with ❤️ using MERN Stack + Docker + Google Gemini AI**

⭐ **Star this repo if you find it helpful!**
