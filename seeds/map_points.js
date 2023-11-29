/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("map_point").del();
  await knex("map_point").insert([
    {
      id: 1,
      user_id: 1,
      label: "restaurant",
      description: "Casa do Frango, Portuguese Restaurant",
      lat: "51.524510",
      lng: "-0.078890",
    },
    {
      id: 2,
      user_id: 1,
      label: "cafe",
      description: "New York Cafe at Hampstead",
      lat: "51.557820",
      lng: "-0.178390",
    },
    {
      id: 3,
      user_id: 1,
      label: "sightseeing",
      description: "London Eye",
      lat: "51.504890",
      lng: "-0.080810",
    },
    {
      id: 4,
      user_id: 1,
      label: "entertainment",
      description: "Tottenham Hotspur Stadium",
      lat: "51.6042",
      lng: "0.0662",
    },
    {
      id: 5,
      user_id: 2,
      label: "sightseeing",
      description: "The British Museum",
      lat: "51.5194",
      lng: "0.1270",
    },
    {
      id: 6,
      user_id: 2,
      label: "entertainment",
      description: "Hyde Park Winter Wonderland",
      lat: "51.5074",
      lng: "0.1641",
    },
    {
      id: 7,
      user_id: 2,
      label: "entertainment",
      description: "Harry Potter Studios",
      lat: "51.6898",
      lng: "0.4181",
    },
  ]);
};
