const express = require("express");
const router = express.Router();

const movieRoutes = require("./movieRouters");

router.use('/movies', movieRoutes);

module.exports = router;