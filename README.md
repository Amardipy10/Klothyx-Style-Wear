# 👕 Klothyx – Style Wear

Klothyx – Style Wear is a full-stack E-Commerce web application built using the MERN stack, enabling users to browse fashion products, apply filters, manage carts, and place orders using Cash on Delivery (COD) or secure online payments via Stripe. The platform also includes a dedicated Admin Dashboard for managing products, inventory, and customer orders.

---

## 🚀 Live Demo

### 👤 User Panel
🔗 [https://klothyx-style-wear-git-main-amardipyadavs-projects.vercel.app/](https://klothyx-style-wear-git-main-amardipyadavs-projects.vercel.app/)

### 🛠 Admin Panel
🔗 [https://klothyx-style-wear-kkku-gyqcqvqwe-amardipyadavs-projects.vercel.app/](https://klothyx-style-wear-kkku-gyqcqvqwe-amardipyadavs-projects.vercel.app/)

---

## 🛠 Tech Stack

### Frontend
- React.js
- CSS / Tailwind CSS

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MongoDB

### Payments & Media
- Stripe (Online Payments)
- Cloudinary (Image Storage)

---

## ✨ Key Features

### 👥 User Features
- **🔍 Product Browsing & Filtering**: Browse a wide range of fashion products with filters such as category, size, and attributes.
- **🛒 Cart Management**: Add products to cart, update quantities, or remove items seamlessly.
- **📦 Order Placement**: Place orders by providing delivery details and selecting a preferred payment method.
- **💳 Secure Payments**: Supports Stripe-based online payments as well as Cash on Delivery (COD).

### 🧑‍💼 Admin Features
- **📦 Product Management**: Add, update, or delete products along with images and variants.
- **📊 Order Management**: View and manage all customer orders from a centralized dashboard.
- **🏷 Inventory Control**: Monitor available products and manage stock efficiently.

---

## 📂 Project Structure
```
Klothyx-Style-Wear/
│
├── frontend/          # User-facing React application
├── admin/             # Admin dashboard (React)
├── backend/           # Node.js + Express API
│   ├── controllers/   # Business logic
│   ├── models/        # Database schemas
│   ├── routes/        # API routes
│   ├── middleware/    # Authentication & validation
│   └── config/        # Configuration files
│
└── README.md
```

---

## 🔐 Payment Integration

- **Stripe** is used for handling secure online payments.
- **Cash on Delivery (COD)** is available as an alternative checkout option.
- Payment logic is handled on the backend to ensure security and reliability.

---

## ⚙️ Highlights

- ✅ Full-stack MERN architecture
- ✅ Secure payment handling with Stripe
- ✅ Separate user and admin panels
- ✅ Cloudinary integration for optimized media storage
- ✅ Scalable and modular backend structure
- ✅ RESTful API design
- ✅ Responsive user interface

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Stripe Account
- Cloudinary Account

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/Amardipy10/Klothyx-Style-Wear.git
   cd Klothyx-Style-Wear
```

2. **Install dependencies**
```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install

   # Install admin dependencies
   cd ../admin
   npm install
```

3. **Configure environment variables**
   
   Create `.env` files in the backend directory with the following:
```env
   MONGODB_URI=your_mongodb_connection_string
   STRIPE_SECRET_KEY=your_stripe_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   JWT_SECRET=your_jwt_secret
   PORT=5000
```

4. **Run the application**
```bash
   # Run backend
   cd backend
   npm start

   # Run frontend (in a new terminal)
   cd frontend
   npm start

   # Run admin panel (in a new terminal)
   cd admin
   npm start
```

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Amardip Yadav**

- 📧 Email: [amardipy10@gmail.com](mailto:amardipy10@gmail.com)
- 🔗 GitHub: [@Amardipy10](https://github.com/Amardipy10)
- 📦 Repository: [Klothyx-Style-Wear](https://github.com/Amardipy10/Klothyx-Style-Wear)

---

## ⭐ Support

If you find this project useful, please **star ⭐** the repository!

Contributions, issues, and feature suggestions are welcome!

---

## 🔮 Future Enhancements

- [ ] User authentication and profile management
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Advanced analytics for admin
- [ ] Email notifications
- [ ] Multiple payment gateway support
