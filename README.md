# EduTube – Full‑stack E‑Learning Platform

EduTube is an open‑source **video‑centric learning management system (LMS)** where instructors publish courses and students watch lectures, take quizzes and earn certificates.  
The project is split into a *Java Spring Boot* REST backend, an *Angular 19* SPA frontend and a *PostgreSQL* database.

> **Status:** proof‑of‑concept / work‑in‑progress – feel free to fork and extend.

---

## ✨ Key Features
| Area | Highlights |
|------|------------|
| **Authentication** | JSON Web Token (JWT) with *Spring Security* & password hashing |
| **Course Management** | CRUD for courses, videos, quizzes, certificates |
| **Video Storage** | Uploads are streamed to Google Drive via Firebase Admin SDK |
| **Multilingual UI** | 🔁 Runtime language switch with **ngx‑translate** |
| **Meetings** | Live meeting pages for virtual classrooms |
| **Responsive Design** | Angular Material + CDK, fully mobile‑friendly |
| **Testing** | SpringBootStarter‑Test & Karma/Jasmine |
| **CI‑ready** | Split Maven/Node builds for containerisation |

---

## 🏗 Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend** | Java 21 · Spring Boot 3 · Spring Data JPA · Hibernate · PostgreSQL · Firebase Admin · JJW T |
| **Frontend** | Angular 19 · RxJS · Angular Material | 
| **Auth** | JWT Bearer tokens (`Authorization: Bearer <token>`) |
| **DevOps** | Maven Wrapper · Angular CLI · Docker‑Compose (optional) |

---

## 📂 Repository Layout
```
EduTube/
├── backend-springboot/        # Maven project
│   ├── src/main/java/com/...  # Controllers, services, models
│   └── src/main/resources/    # application.properties
├── frontend-angular/          # Angular workspace
│   └── src/app/               # Pages & shared components
├── database-postgresql/
│   └── scripts/               # DDL + sample data
└── README.md
```

---

## ⚡ Quick Start

### 1. Clone
```bash
git clone https://github.com/<your‑fork>/EduTube.git
cd EduTube
```

### 2. Spin‑up PostgreSQL
```bash
# bare‑metal
psql -U postgres -c "CREATE DATABASE edutube;"
psql -U postgres edutube -f database-postgresql/scripts/tables.sql
psql -U postgres edutube -f database-postgresql/scripts/insert-to-tables.sql

# or with Docker
docker compose up -d db
```

Default connection string is `jdbc:postgresql://localhost:5433/edutube` (see `application.properties`).  
Edit the port/credentials or override with `SPRING_DATASOURCE_URL`.

### 3. Backend
```bash
cd backend-springboot
# supply env vars (dotenv is imported automatically)
export SECRET_KEY="super‑secret‑jwt‑key"
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=yourpass

./mvnw spring-boot:run         # starts on http://localhost:8080
```

> When running under Docker the container exposes port **8080**.

### 4. Frontend
```bash
cd ../frontend-angular
npm install                 # Node 20 required
npm start                   # http://localhost:4200
```
The Angular app proxies API requests to `http://localhost:8080` by default (see `proxy.conf.json`).

---

## 🔑 Environment Variables

| Name | Purpose | Default |
|------|---------|---------|
| `SECRET_KEY` | HMAC key used to sign JWT tokens | **required** |
| `SPRING_DATASOURCE_URL` | JDBC URL | `jdbc:postgresql://localhost:5433/edutube` |
| `SPRING_DATASOURCE_USERNAME` | DB user | `postgres` |
| `SPRING_DATASOURCE_PASSWORD` | DB password | `postgres` |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to Firebase service‑account JSON | – |

Place them in a `.env` file or export in your shell.

---

## 📚 API Overview

| Verb | Endpoint | Description | Auth |
|------|----------|-------------|------|
| `POST` | `/auth/register` | Create new user | ❌ |
| `POST` | `/auth/login` | Obtain JWT token | ❌ |
| `GET` | `/courses` | List all courses | ✅ |
| `POST` | `/courses` | Create course (instructor) | ✅ |
| `GET` | `/courses/{id}` | Course details | ✅ |
| `GET` | `/videos` | List videos | ✅ |
| `POST` | `/videos` | Upload video metadata & file | ✅ |
| `GET` | `/videos/{id}` | Video details | ✅ |

Full OpenAPI spec coming soon.

---

## 🧪 Testing

```bash
# backend
./mvnw test

# frontend
npm test
```

---

## 🚀 Production Build

```bash
# build backend JAR
cd backend-springboot
./mvnw -Pprod package
# build Angular static bundle
cd ../frontend-angular
ng build --configuration production
# copy dist/ to your web server
```

A `docker-compose.yml` sample is provided to orchestrate Postgres + Spring Boot + Nginx.

---

## 🤝 Contributing

1. Fork / feature branch  
2. Conventional commits (`feat:`, `fix:` …)  
3. PR with description & screenshots – CI must pass

---

## 🗒️ Roadmap
- [ ] Payment integration (Stripe)  
- [ ] SCORM / xAPI export  
- [ ] Real‑time chat with WebSockets  
- [ ] Progressive Web‑App (PWA) support

---

> _Made with ☕ & ❤️

