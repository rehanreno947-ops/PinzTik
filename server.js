
const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    app: "PinzTik",
    status: "online"
  });
});

app.get("/api/download", (req, res) => {
  res.status(501).json({
    error: "Fitur download belum dikonfigurasi.",
    message:
      "Gunakan URL file media langsung yang kamu miliki atau berhak unduh."
  });
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Halaman tidak ditemukan." });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`PinzTik berjalan pada port ${PORT}`);
});
