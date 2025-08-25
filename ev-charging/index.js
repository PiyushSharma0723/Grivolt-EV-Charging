const express = require("express");
const app = express();
const PORT = 8080;

// Home route
app.get("/", (req, res) => {
  res.send("🚗 Welcome to GRIVOLT");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// Booking endpoint
app.post("/book", (req, res) => {
  const { user, station, time } = req.body;

  if (!user || !station || !time) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  res.json({
    message: "Booking successful!",
    booking: {
      user,
      station,
      time
    }
  });
});
