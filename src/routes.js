const express = require("express")
const router = express.Router()

const{
    userRoutes,
    siswaRoutes
} = require("../api/routes")

router.use('/api/user', userRoutes);
router.use('/api/siswa', siswaRoutes);

module.exports= router