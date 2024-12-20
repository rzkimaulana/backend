const express = require("express");
const cors = require("cors");

const router = require("./routes");

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(router);

// Rute untuk testing
app.get('/', (req, res) => {
  res.send({
    message: 'Hello 👋',
    status: 'Server ready 🚀',
  });
});


module.exports = app;
