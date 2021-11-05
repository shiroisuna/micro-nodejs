const router = require('express-promise-router')();
const controller = require('./controller');

router.get('/vehicle/:lot', controller.getByLot);

module.exports = router;
