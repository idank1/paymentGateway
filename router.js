const express = require('express');
const router = express.Router();
const chargeRouter = require('./charge/index');

router.use('/charge', chargeRouter);

module.exports = router;
