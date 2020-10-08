const router = require('express').Router();
const userController = require('../../controllers/userController.js');


router.route('/')
    .post(userController.create) //! this will hit userController
    .get(userController.findAll);

router.route('/:id')
    .get(userController.findByToken)

router.route('/boomarkCards/:id')
    .post(userController.updateUserBookmarks);

router.route('/codeCards/:id')
    .post(userController.updateUserSnippets);





module.exports = router;

// .post(userController.create)
// .delete(userController.remove);