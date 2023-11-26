const router = require("express").Router();
const flightController = require("../../controllers/flight-controller");

router
  .route("/")
  .post(flightController.postFlight)
  .get(flightController.getFlights);

router
  .route("/:id")
  .get(flightController.getOneFlight)
  .put(flightController.editFlight)
  .delete(flightController.deleteFlight);

module.exports = router;
