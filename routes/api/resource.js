const router = require("express").Router();
const resourceController = require("../../controllers/resourceController.js");

router.route("/")
  .get(resourceController.findAll)
  .post(resourceController.create);

router.route("/resources")
  .get(resourceController.findAll)
  .post(resourceController.create);




module.exports = router;