// api index
const express = require('express');
const router = express.Router();
const trails = require('./trails')

router.use("/trails", trails);

module.exports = router;