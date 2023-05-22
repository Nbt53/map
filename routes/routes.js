const express = require('express');
const { renderHome } = require('../controllers/mapPacks');
const router = express.Router();



router.route('/')
    .get(renderHome)







module.exports = router; 