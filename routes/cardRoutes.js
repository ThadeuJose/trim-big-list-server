let express = require('express');
let router = express.Router();

let controller = require('../controllers/cardController.js');

router.get('/setup', controller.setup);

router.get('/:id', controller.readOne);

router.get('/', controller.readAll);



module.exports = router;
