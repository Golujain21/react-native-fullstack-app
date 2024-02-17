// dotenv
require("dotenv").config();
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/db");

// rest
const app = express();

// MONGODB CONNECTION
connectDb();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//ROUTES
app.use("/api/v1/auth", require("./routes/userRoutes"));
app.use("/api/v1/post", require("./routes/postRoutes"));

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "welcome to react native app",
  });
});

// PORT
const PORT = process.env.PORT || 5000;

// liston
app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`.bgGreen.white);
});
