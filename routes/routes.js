const express = require('express');
const { renderHome, renderAdmin } = require('../controllers/mapPacks');
const router = express.Router();



router.route('/')
    .get(renderHome)

router.route('/admin')
    .get(renderAdmin)    







module.exports = router; 