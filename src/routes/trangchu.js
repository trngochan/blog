const express = require('express');
const router = express.Router();

//
const trangchucontroller = require('../app/controllers/TrangchuController');

router.use('/', trangchucontroller.index);
//

module.exports = router;
