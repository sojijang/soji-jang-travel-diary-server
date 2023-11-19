const knex = require("knex")(require("../knexfile"));

const getActivities = async (_req, res) => {
  try {
    const data = await knex("calendar_activity").select(
      "id",
      "user_id",
      "label",
      "content",
      "budget"
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Activities: ${err}`);
  }
};

const getOneActivity = async (req, res) => {
  try {
    const activity = await knex("calendar_activity")
      .where({ id: req.params.id })
      .first();

    if (activity.length === 0) {
      return res.status(404).send({
        message: `Activity with ID ${req.params.id} not found`,
      });
    }

    res.send(activity);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: `Unable to retrieve activity data with ID ${req.params.id}`,
    });
  }
};

const postActivity = async (req, res) => {
  if (!req.body.label || !req.body.content || !req.body.budget) {
    return res.status(400).json({
      message: "Please make sure all fields are filled out.",
    });
  }

  const newActivity = {
    user_id: req.body.user_id,
    label: req.body.label,
    content: req.body.content,
    budget: req.body.budget,
  };

  try {
    const result = await knex("calendar_activity").insert(newActivity);
    const createdActicity = await knex("calendar_activity")
      .where({ id: result[0] })
      .first();
    res.status(201).send(createdActicity);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add a new activity: ${error}`,
    });
  }
};

const editActivity = async (req, res) => {
  if (!req.body.label || !req.body.content || !req.body.budget) {
    return res.status(400).json({
      message: "Please make sure all fields are filled out.",
    });
  }

  const updateActivity = {
    user_id: req.body.user_id,
    label: req.body.label,
    content: req.body.content,
    budget: req.body.budget,
  };

  try {
    const result = await knex("calendar_activity")
      .where({ id: req.params.id })
      .update(updateActivity);

    if (result === 0) {
      return res
        .status(404)
        .send(`Activity with ID ${req.params.id} cannot be found`);
    }
    const response = await knex("calendar_activity")
      .select("user_id", "label", "content", "budget")
      .where({ id: req.params.id });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: `Unable to edit an activity: ${error}`,
    });
  }
};

const deleteActivity = async (req, res) => {
  try {
    const result = await knex("calendar_activity")
      .where({ id: req.params.id })
      .del();

    if (result === 0) {
      return res.status(404).json({
        message: `Activity with ID ${req.params.id} not found`,
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete Activity: ${error}`,
    });
  }
};

module.exports = {
  getActivities,
  getOneActivity,
  postActivity,
  editActivity,
  deleteActivity,
};
