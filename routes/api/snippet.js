const router = require('express').Router();
const snippetController = require('../../controllers/snippetController.js');

router.route('/')
  .get(snippetController.findAll)
  .post(snippetController.create);

router.route('/:id')
  .get(snippetController.findById)
  .put(snippetController.update)
  .delete(snippetController.remove);

router.route('/snippets')
  .get(snippetController.findAll)
  .post(snippetController.create);

module.exports = router;