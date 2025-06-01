const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});