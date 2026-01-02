const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const userRoutes = require("./routes/userRoutes");


const authRoutes = require("./routes/authRoutes");

const app = express();

// DB connect
connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);



// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
