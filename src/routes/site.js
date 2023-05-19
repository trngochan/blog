const express = require('express');

const router = express.Router();

//body
const sitecontroller = require('../app/controllers/SiteController');

router.use('/search', sitecontroller.search);
router.use('/', sitecontroller.home);

//

module.exports = router;
