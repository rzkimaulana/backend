const express = require("express");
const { loginUser, buatuser } = require("../controller/usercontroller");

const router = express.Router();

router.post("/register", buatuser);
router.post("/login", loginUser);

module.exports = router; 
