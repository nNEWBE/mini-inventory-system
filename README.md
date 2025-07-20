# 🛒 [Mini Inventory Management System (MERN)](https://interview-task-weld.vercel.app/)

A simple inventory management system built using **MongoDB**, **Express.js**, **React.js**, and **Node.js**. It includes modules for authentication, customer & product management, sales, and reporting.

---

## 🚀 Features

- User authentication (JWT with refresh token strategy)
- Customer CRUD operations
- Product CRUD operations
- Sales tracking
- Sales report generation (date-wise)
- Pagination, filtering, and soft deletion
- Modular route & controller structure

---

## 🛠️ Tech Stack

| Technology     | Use                                      |
|----------------|-------------------------------------------|
| Node.js        | Backend runtime                          |
| Express.js     | Backend web framework                    |
| MongoDB        | NoSQL database                           |
| Mongoose       | MongoDB ORM                              |
| React.js       | Frontend framework (Optional)            |
| TypeScript     | Type safety                              |
| JWT            | User authentication                     |
| Dotenv         | Environment variable management          |

---

## 📦 Environment Setup

### 1. Clone & Install

```bash
git clone https://github.com/nNEWBE/mini-inventory-system.git
cd mini-inventory-system
yarn
````

### 2. Create `.env` File

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=your_mongodb_connection_string
JWT_ACCESS_SECRET=your_jwt_access_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=30d
COOKIES_MAX_AGE=86400000
```

### 3. Start the Server

```bash
yarn start:dev
```

---

## 🔐 Authentication Endpoints

| Method | Route                        | Description             |
| ------ | ---------------------------- | ----------------------- |
| POST   | `/api/v1/auth/register`      | Register new user       |
| POST   | `/api/v1/auth/login`         | Log in with credentials |
| POST   | `/api/v1/auth/refresh-token` | Get new access token    |
| POST   | `/api/v1/auth/logout`        | Logout                  |

---

## 👥 Customer Routes

| Method | Route                          | Description          |
| ------ | ------------------------------ | -------------------- |
| POST   | `/api/v1/customers/create`     | Add a new customer   |
| PATCH  | `/api/v1/customers/update/:id` | Update customer info |
| DELETE | `/api/v1/customers/delete/:id` | Soft delete customer |
| GET    | `/api/v1/customers`            | Get all customers    |

---

## 📦 Product Routes

| Method | Route                         | Description                  |
| ------ | ----------------------------- | ---------------------------- |
| POST   | `/api/v1/products/create`     | Create a new product         |
| PATCH  | `/api/v1/products/update/:id` | Update product               |
| DELETE | `/api/v1/products/delete/:id` | Soft delete product          |
| GET    | `/api/v1/products`            | Get all products (paginated) |

---

## 💸 Sales Routes

| Method | Route                  | Description       |
| ------ | ---------------------- | ----------------- |
| POST   | `/api/v1/sales/create` | Create a new sale |

---

## 📊 Report Routes

| Method | Route             | Description                    |
| ------ | ----------------- | ------------------------------ |
| POST   | `/api/v1/reports` | Get sales report by date range |

---

## 📁 Project Structure

```
📦 backend/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── modules/
│   │   ├── auth/
│   │   ├── customers/
│   │   ├── products/
│   │   ├── sales/
│   │   └── reports/
│   └── config/
│   └── middleware/
├── .env
└── package.json
```

---

## 🙌 Acknowledgments

Built as part of a learning journey and backend architecture practice.

```

---

Let me know if you'd like this:

- converted to `.md` file
- with **Postman Collection**
- auto-generated **Swagger/OpenAPI Docs**

Or if you're using **Next.js**, I can help integrate this into the frontend too.
```
