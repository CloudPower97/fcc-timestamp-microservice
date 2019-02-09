const express = require('express');
const router = express.Router();
const { getTimestamp } = require('../controllers/timestamps');

router.get('/', getTimestamp);

router.get('/:dateString', getTimestamp);

module.exports = router;
