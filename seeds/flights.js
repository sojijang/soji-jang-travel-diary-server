/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("flight").del();
  await knex("flight").insert([
    {
      id: 1,
      user_id: 1,
      departure_location: "San Francisco",
      departure_etd: "2023-11-20 1:05PM",
      return_location: "London",
      return_eta: "2023-11-20 4:15PM",
      budget: "506",
    },
    {
      id: 2,
      user_id: 1,
      departure_location: "London",
      departure_etd: "2023-11-24 11:05AM",
      return_location: "San Francisco",
      return_eta: "2023-11-24 02:15PM",
      budget: "514",
    },
    {
      id: 3,
      user_id: 2,
      departure_location: "New York",
      departure_etd: "2023-11-05 07:35PM",
      return_location: "London",
      return_eta: "2023-11-06 07:50AM",
      budget: "477",
    },
    {
      id: 4,
      user_id: 2,
      departure_location: "London",
      departure_etd: "2023-11-08 01:05PM",
      return_location: "New York",
      return_eta: "2023-11-08 04:25PM",
      budget: "554",
    },
  ]);
};
