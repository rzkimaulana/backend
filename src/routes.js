const router = require("express").Router()
const express = require("express")

const{
    userRoutes,
    siswaRoutes
} = require("../api/routes")

router.use('/api/user', userRoutes);
router.use('/api/siswa', siswaRoutes);