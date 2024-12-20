const express = require("express");
const cors = require("cors");
const routers = require("./routes");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001; // Menggunakan PORT dari environment atau 3005 jika lokal

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // Menggunakan morgan untuk logging request

// Routes
app.use(routers);

// Rute utama
app.get('/', (req, res) => {
  res.send({
    message: 'Hello 👋',
    status: 'Server ready 🚀',
  });
});

// Menangani server untuk lokal development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
}

// Export app untuk Vercel (akan dijalankan oleh Vercel)
module.exports = app;
