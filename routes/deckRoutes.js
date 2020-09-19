let express = require('express');
let router = express.Router();

let controller = require('../controllers/deckController.js');

router.post('/', controller.insert);

module.exports = router;
