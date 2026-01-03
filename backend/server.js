import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.set("trust proxy", 1);

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://klothyx-style-wear-c4e1kzpm2-amardipyadavs-projects.vercel.app",
      "https://klothyx-style-wear-kkku-gyqcqvqwe-amardipyadavs-projects.vercel.app",
      "https://klothyx-style-wear-git-main-amardipyadavs-projects.vercel.app",
      "https://klothyx-style-wear.vercel.app",
      "klothyx-style-wear-kkku.vercel.app"
      
    ],
    credentials: true
  })
);

// routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () =>
  console.log("Server started on PORT : " + port)
);
