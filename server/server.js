const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgen = require("morgan");

// dotenv
dotenv.config();

// rest
const app = express();

//middlewares
app.use(express.json());

//ROUTES
app.use("/api/v1/auth", require("./routes/userRoutes"));

// PORT
const PORT = process.env.PORT || 5000;

// liston
app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`.bgGreen.white);
});
