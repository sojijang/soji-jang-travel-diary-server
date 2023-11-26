const knex = require("knex")(require("../knexfile"));

const postPoint = async (req, res) => {
  const { user_id, label, description, lat, lng } = req.body;

  const newPoint = {
    user_id,
    label,
    description,
    lat,
    lng,
  };

  try {
    const result = await knex("map_point").insert(newPoint);
    const createdPoint = await knex("map_point")
      .where({ id: result[0] })
      .first();
    res.status(201).send(createdPoint);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add a new point: ${error}`,
    });
  }
};

const getPoints = async (_req, res) => {
  try {
    const points = await knex("map_point");
    res.status(200).json(points);
  } catch (err) {
    res.status(400).send(`Error retrieving Activities: ${err}`);
  }
};

const getOnePoint = async (req, res) => {
  try {
    const point = await knex("map_point").where({ id: req.params.id }).first();

    if (!point) {
      return res.status(404).send({
        message: `Map point with ID ${req.params.id} not found`,
      });
    }

    res.send(point);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: `Unable to retrieve map point with ID ${req.params.id}`,
    });
  }
};

const editPoint = async (req, res) => {
  const { user_id, label, description } = req.body;

  const updatePoint = {
    user_id,
    label,
    description,
  };

  try {
    const result = await knex("map_point")
      .where({ id: req.params.id })
      .update(updatePoint);

    if (result === 0) {
      return res
        .status(404)
        .send(`Map point with ID ${req.params.id} cannot be found`);
    }
    const response = await knex("map_point")
      .select("label", "description")
      .where({ id: req.params.id });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: `Unable to edit a map point: ${error}`,
    });
  }
};

const deletePoint = async (req, res) => {
  try {
    const result = await knex("map_point").where({ id: req.params.id }).del();

    if (result === 0) {
      return res.status(404).json({
        message: `Map point with ID ${req.params.id} not found`,
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete map point: ${error}`,
    });
  }
};

module.exports = {
  postPoint,
  getPoints,
  getOnePoint,
  editPoint,
  deletePoint,
};
