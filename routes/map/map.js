const router = require("express").Router();
const mapController = require("../../controllers/map-controller");

router.route("/").post(mapController.postPoint).get(mapController.getPoints);

router
  .route("/:id")
  .get(mapController.getOnePoint)
  .put(mapController.editPoint)
  .delete(mapController.deletePoint);

module.exports = router;
