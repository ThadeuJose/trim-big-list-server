let express = require('express');
let router = express.Router();

let controller = require('../controllers/cardController.js');


router.get('/:id(\\d+)', controller.readById);

router.get('/:name', controller.readByName);

router.get('/', controller.readAll);

router.post('/', controller.insertCard);


module.exports = router;
