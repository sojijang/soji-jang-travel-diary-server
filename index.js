require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const authRoutes = require("./routes/user/auth");
const profileRoutes = require("./routes/user/profile");
const currencyRateRoutes = require("./routes/currency/rate");
const calendarActivityRoutes = require("./routes/calendar/activity");
const mapRoutes = require("./routes/map/map");

const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.use("/auth", authRoutes);
app.use("/my-profile", profileRoutes);
app.use("/currency-rate", currencyRateRoutes);
app.use("/calendar-activity", calendarActivityRoutes);
app.use("/map", mapRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
