const router = require('express').Router();
const userController = require('../../controllers/userController.js');


router.route('/')
    .post(userController.create); //! this will hit userController


router.route('/:id')
    .get(userController.findById)
    // .post(userController.create)
    .post(userController.update);
// .delete(userController.remove);





module.exports = router;
