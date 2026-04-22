import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import authRoutes from "./routes/authRoutes";
import cartRoutes from "./routes/cartRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    credentials: false,
  }),
);
app.use(express.json());

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);

app.get("/", (req, res) => {
  res.json({ message: "DRIP API is running! 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on this http://localhost:${PORT}`);
});
