const router = require("express").Router();
const currencyController = require("../../controllers/currency-controller");

router.route("/").get(currencyController.getCurrency);

module.exports = router;
