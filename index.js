const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Horse API is working");
});

app.get("/prices", (req, res) => {
  res.json([
    {
      horse: "Morshdi",
      oldPrice: 6.5,
      newPrice: 4.2,
      movePercent: 35.38,
      signal: "HEAVILY BACKED 🔥"
    },
    {
      horse: "Talk of New York",
      oldPrice: 8.0,
      newPrice: 7.4,
      movePercent: 7.5,
      signal: "STABLE"
    }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Horse API running");
});
