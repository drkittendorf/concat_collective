const router = require('express').Router();
const userController = require('../../controllers/userController.js');


router.route('/:id')
    .get(userController.findById)
    .post(userController.create);
// .put(userController.update)
// .delete(userController.remove);

module.exports = router;