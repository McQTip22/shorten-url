var express = require('express');
var router = express.Router();
var helpers = require('../helpers/inputs');

router.route('/').get(helpers.getInputs).post(helpers.createInput);

router.route('/:inputId').get(helpers.getInput).put(helpers.editInput).delete(helpers.deleteInput);

module.exports = router;
