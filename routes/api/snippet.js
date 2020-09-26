const router = require('express').Router();
const snippetController = require('../../controllers/snippetsController.js');

router.route('/')
  .get(snippetController.findAll)
  .post(snippetController.create);

router.route('/:id')
  .get(snippetController.findById)
  .put(snippetController.update)
  .delete(snippetController.remove);

module.exports = router;