const knex = require("knex")(require("../knexfile"));

const postFlight = async (req, res) => {
  const {
    user_id,
    depature_location,
    departure_etd,
    departure_eta,
    return_location,
    return_etd,
    return_eta,
    budget,
  } = req.body;

  const newFlight = {
    user_id,
    depature_location,
    departure_etd,
    departure_eta,
    return_location,
    return_etd,
    return_eta,
    budget,
  };

  try {
    const result = await knex("flight").insert(newFlight);
    const createdFlight = await knex("flight").where({ id: result[0] }).first();
    res.status(201).send(createdFlight);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add a flight: ${error}`,
    });
  }
};

const getFlights = async (_req, res) => {
  try {
    const flights = await knex("flight");
    res.status(200).json(flights);
  } catch (err) {
    res.status(400).send(`Error retrieving flights: ${err}`);
  }
};

const getOneFlight = async (req, res) => {
  try {
    const flight = await knex("flight").where({ id: req.params.id }).first();

    if (!flight) {
      return res.status(404).send({
        message: `Flight with ID ${req.params.id} not found`,
      });
    }

    res.send(flight);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: `Unable to retrieve flight with ID ${req.params.id}`,
    });
  }
};

const editFlight = async (req, res) => {
  const {
    user_id,
    depature_location,
    departure_etd,
    departure_eta,
    return_location,
    return_etd,
    return_eta,
    budget,
  } = req.body;

  const updatedFlight = {
    user_id,
    depature_location,
    departure_etd,
    departure_eta,
    return_location,
    return_etd,
    return_eta,
    budget,
  };

  try {
    const result = await knex("flight")
      .where({ id: req.params.id })
      .update(updatedFlight);

    if (result === 0) {
      return res
        .status(404)
        .send(`Flight with ID ${req.params.id} cannot be found`);
    }
    const response = await knex("flight")
      .select(
        "depature_location",
        "departure_etd",
        "departure_eta",
        "return_location",
        "return_etd",
        "return_eta",
        "budget"
      )
      .where({ id: req.params.id });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: `Unable to edit a flight: ${error}`,
    });
  }
};

const deleteFlight = async (req, res) => {
  try {
    const result = await knex("flight").where({ id: req.params.id }).del();

    if (result === 0) {
      return res.status(404).json({
        message: `Flight with ID ${req.params.id} not found`,
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete flight: ${error}`,
    });
  }
};

module.exports = {
  postFlight,
  getFlights,
  getOneFlight,
  editFlight,
  deleteFlight,
};
