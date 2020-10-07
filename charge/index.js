const {chargeSchema} = require('./validations/schema');
const {doValidation} = require('../utils/middlewares/validation');
const express = require('express');
const router = express.Router();
const base = require('./base');

router.post('/', doValidation(chargeSchema), async (req, res, next) => {
    res.send(base.post(req));
});

module.exports = router;
