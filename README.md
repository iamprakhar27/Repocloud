
# ☁️ REPOCLOUD

> A cloud-based platform designed to streamline the deployment and management of applications.

![RepoCloud Banner](/frontend/public/banner.png) 

---

## 🚀 Features

- 🔐 **GitHub Authentication** – Sign in with your GitHub account (Login/Logout securely)
- 🔍 **Search Users & Repositories** – Discover any GitHub user or their repositories easily
- ❤️ **Like Repositories** – Show appreciation by liking repositories
- 🍴 **Fork & Clone Repositories** – Interact with real GitHub repos directly from the app
- 🧑‍💻 **Like User Profiles** – Appreciate user profiles within the platform
- 📊 **Tech-Based Repo Discovery** – Explore repositories by programming languages or technologies on the **Explore** page
- 🧬 **Real GitHub Integration** – Actions like forks, likes, and clones are reflected on the actual GitHub profile (via GitHub API)
- 💼 **Profile Page** – View your own GitHub profile and activity from within the app

---

## 🛠️ Tech Stack

| Frontend          | Backend        | Database     | Others              |
|-------------------|----------------|--------------|---------------------|
| React             | Node.js        | MongoDB      | Tailwind CSS        |
| React Router DOM  | Express.js     | Mongoose     | Passport js         |
| Axios             |                |              | Vite                |


---


## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/iamprakhar27/Repocloud.git
cd RepoCloud
```

### 2. Install dependencies

#### For client:

```bash
cd frontend
npm install
```

#### For server:

```bash
cd backend
npm install
```

### 3. Environment Variables

Create a \`.env\` file in the \`server\` directory and add:

```env
PORT= your port number

MONGO_URI= your_mongodb_connection_string

GITHUB_TOKEN= 

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
CLIENT_BASE_UR=
```

### 4. Run the project

#### Start backend:

```bash
npm run dev
```

#### Start frontend:

```bash
cd ../frontend
npm run dev
```

---

## 🙌 Contributing

We welcome contributions!  

---

## 🤝 Connect with Me

- [Email](prakharofficial17@gmail.com)
- [Portfolio](https://prakhar-portfolio-coral.vercel.app/)

---

⭐ If you like this project, leave a star!  
📝 Feel free to fork and contribute to make Tuneify even better!
