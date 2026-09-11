# 📚 Library Management System

A full-stack **Library Management System** built with:

- 🖥️ **Next.js** — Frontend
- ⚙️ **Frappe Framework** — Backend

The system helps manage books, authors, publishers, categories, members, and other library operations through a modern web application.

---

## 🚀 Tech Stack

### 🖥️ Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- Lucide React

### ⚙️ Backend

- Frappe Framework
- Python
- MariaDB
- Redis
- Node.js

---

# 📁 Project Structure

```text
library-management/
│
├── frontend/                              # Next.js Frontend
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── library-bench/                         # Frappe Backend
│   │
│   ├── apps/
│   │   ├── frappe/                        # Frappe Framework
│   │   └── library_management/            # Custom Frappe App
│   │
│   ├── config/
│   ├── sites/
│   └── Procfile
│
└── README.md
```

---

# 🖥️ Frontend Setup

## Requirements

Make sure you have installed:

- Node.js
- npm

## Navigate to Frontend

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Run Development Server

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

## Start Production Server

```bash
npm start
```

---

# ⚙️ Frappe Backend Setup

## Requirements

Make sure you have installed:

- Python
- Node.js
- Redis
- MariaDB
- Frappe Bench

## Navigate to Frappe Bench

```bash
cd library-bench
```

## Activate Virtual Environment

```bash
source env/bin/activate
```

## Start Frappe Development Server

```bash
bench start
```

The Frappe backend will typically run at:

```text
http://localhost:8000
```

---

# 🔥 Run Frontend and Backend Together

Open **two terminals**.

## Terminal 1 — Frappe Backend

```bash
cd ~/Desktop/library-management/library-bench
source env/bin/activate
bench start
```

Backend:

```text
http://localhost:8000
```

---

## Terminal 2 — Next.js Frontend

```bash
cd ~/Desktop/library-management/frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:3000
```

---

# 📦 Install Frappe Application

Navigate to the bench directory:

```bash
cd ~/Desktop/library-management/library-bench
```

Check available sites:

```bash
ls sites
```

Install the custom app:

```bash
bench --site your-site-name install-app library_management
```

Replace:

```text
your-site-name
```

with your actual Frappe site name.

---

# 🔌 Frontend and Backend Integration

The Next.js frontend communicates with the Frappe backend through API requests.

## Frontend

```text
http://localhost:3000
```

## Backend

```text
http://localhost:8000
```

Example Axios configuration:

```typescript
import axios from "axios";

const frappe = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export default frappe;
```

---

# ✨ Features

## 📚 Book Management

- Add Books
- Edit Books
- Delete Books
- View Book Details
- Search Books

## ✍️ Author Management

- Add Authors
- Manage Author Information

## 🏢 Publisher Management

- Add Publishers
- Manage Publisher Information

## 🏷️ Category Management

- Create and Manage Categories
- Organize Books by Category

## 👥 Member Management

- Register Members
- Manage Member Details

## 🔐 Authentication

- User Login
- User Logout
- Session Management
- Role-Based Access Control

---

# 🛠️ Useful Frappe Commands

## Check Installed Apps

```bash
bench --site your-site-name list-apps
```

## Run Migration

```bash
bench --site your-site-name migrate
```

## Clear Cache

```bash
bench --site your-site-name clear-cache
```

## Clear Website Cache

```bash
bench --site your-site-name clear-website-cache
```

## Build Assets

```bash
bench build
```

## Restart Bench

```bash
bench restart
```

## Open Frappe Console

```bash
bench --site your-site-name console
```

---

# 💻 Development Commands

## Start Backend

```bash
cd ~/Desktop/library-management/library-bench
source env/bin/activate
bench start
```

## Start Frontend

```bash
cd ~/Desktop/library-management/frontend
npm run dev
```

---

# 🔄 Git Commands

## 🖥️ Frontend

```bash
cd ~/Desktop/library-management/frontend

git status
git add .
git commit -m "Update frontend"
git push origin main
```

## ⚙️ Frappe Custom Application

```bash
cd ~/Desktop/library-management/library-bench/apps/library_management

git status
git add .
git commit -m "Update library management app"
git push origin main
```

> ⚠️ Do not use `sudo git add`, `sudo git commit`, or `sudo git push`.

---

# 🚫 Files That Should Not Be Uploaded

The following files and directories should generally be ignored by Git:

```text
node_modules/
.env
.env.local

library-bench/env/
library-bench/logs/

library-bench/sites/*/private/
library-bench/sites/*/site_config.json
```

---

# 👨‍💻 Author

**Nitesh Kumar Ram**

GitHub: @8FoldX

---

# 📄 License

This project is created for educational and development purposes.
