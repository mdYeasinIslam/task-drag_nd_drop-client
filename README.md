# Project Name: ToDo-Field

# Short Description.
This project is build for mantaining daily life of task. Any one can handle his daily task very smoothly by using this site. It is build on Drag-and-drop functionality. User can get better experience using drag-nd-drop on move their task

# Live links:
https://drag-nd-drop-task.netlify.app

# github link:
client: https://github.com/mdYeasinIslam/task-drag_nd_drop-client
server :https://github.com/mdYeasinIslam/task-drag_nd_drop-server

# Dependencies.

- `@hello-pangea/dnd`: ^18.0.1 - For drag-and-drop functionality.
- `@tailwindcss/vite`: ^4.0.7 - Tailwind CSS integration with Vite.
- `@tanstack/react-query`: ^5.66.9 - React Query for data fetching and caching.
- `axios`: ^1.7.9 - Promise-based HTTP client for making requests.
- `firebase`: ^11.3.1 - Firebase SDK for authentication, database, and other services.
- `lodash`: ^4.17.21 - Utility library for working with arrays, objects, and functions.
- `react`: ^19.0.0 - React library for building user interfaces.
- `react-dom`: ^19.0.0 - React DOM for rendering React components in the browser.
- `react-hot-toast`: ^2.5.2 - A tiny library for adding toast notifications to React apps.
- `react-icons`: ^5.5.0 - Icon set for React using popular icon libraries.
- `react-router-dom`: ^6.29.0 - DOM bindings for React Router, for routing and navigation.
- `socket.io`: ^4.8.1 - Socket.io server-side library for real-time communication.
- `socket.io-client`: ^4.8.1 - Socket.io client-side library for real-time communication.
- `tailwindcss`: ^4.0.7 - A utility-first CSS framework for styling.

---

# Installation steps
Follow these steps to set up and run the project on your local machine.  

### **Prerequisites**  
Ensure you have the following installed:  
- **Node.js** (Latest LTS version recommended) → [Download Node.js](https://nodejs.org/)  
- **npm** (Comes with Node.js) or **yarn**  
- **Git** (Optional, for cloning the repo)  

### **1️⃣ Clone the Repository**  
```sh
git clone <repository-url>
cd <project-folder>
```

### **2️⃣ Install Dependencies**  
Using **npm**:  
```sh
npm install
```

### **3️⃣ Setup Environment Variables**  
Create a `.env` file in the root directory and add your Firebase credentials:  
```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id

```

Make sure you replace `your_api_key` and other values with your actual Firebase config.  

### **4️⃣ Start the Development Server**  
Using **npm**:  
```sh
npm run dev
```

This will start the development server, usually on **http://localhost:5173/** (default Vite port).  

### **5️⃣ Build the Project (For Production)**  
To create an optimized production build:  
```sh
npm run build
```

The output will be in the `dist` folder.  

If you want to deploy in netlify, login netlify and deploy dist folder
---

This will ensure **anyone** can easily set up and run your project! 🚀🔥  
Let me know if you need modifications. 😊


# Technologies used
1. Project build(Client):  HTML, tailwind (Shadcn: component libary) and React + JS 
2. project (Server) : Node.js and express.js , cors 
3. Routing : React-router-dom
4. Data faching: Axios,
5. Packages:
    ( react-hot-toast, react icons etc...)















# using   
coupon-promo-9 firebase project for this project authentication

