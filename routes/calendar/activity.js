const router = require("express").Router();
const activityController = require("../../controllers/activity-controller");

router
  .route("/")
  .get(activityController.getActivities)
  .post(activityController.postActivity);

router
  .route("/:id")
  .get(activityController.getOneActivity)
  .put(activityController.editActivity)
  .delete(activityController.deleteActivity);

module.exports = router;
