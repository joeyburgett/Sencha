/**
 * Created by Joey Burgett on 3/21/2015.
 */
var express = require('express'),
    router = express.Router(),
    SSEController = require('../controllers/SSEController');

router.route('/text')
    .get(SSEController.getText);

router.route('/event')
    .get(SSEController.getEvent);

router.route('/monitor')
    .get(SSEController.getMonitor);

router.route('/event/:name')
    .get(SSEController.setEvent);

module.exports = router;