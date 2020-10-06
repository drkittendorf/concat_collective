const router = require('express').Router();
const userController = require('../../controllers/userController.js');


router.route('/')
    .post(userController.create) //! this will hit userController
    .get(userController.findAll);

router.route('/:id')
    .get(userController.findById)
    .post(userController.update);






module.exports = router;

// .post(userController.create)
// .delete(userController.remove);