const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running for EV Charging project 🚗⚡");
});

// Example booking route
app.post("/book", (req, res) => {
  const { stationId, time } = req.body;
  if (!stationId || !time) {
    return res.status(400).json({ error: "Station ID and time are required" });
  }
  res.json({ message: "Booking confirmed ✅", stationId, time });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
