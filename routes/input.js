var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/inputs');

router.route('/').post(helpers.createInput);

module.exports = router;
