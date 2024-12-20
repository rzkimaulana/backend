const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
// Import routes
const userRoutes = require("../api/routes/userroutes");
const siswaRoutes = require("../api/routes/siswaroutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Routes
app.use('/api/user', userRoutes);
app.use('/api/siswa', siswaRoutes);

app.get('/', (req, res) => {
  res.send({
    message: 'Hello 👋',
    status: 'Server ready 🚀',
  });
});

// Export aplikasi Express sebagai modul
module.exports = app;
