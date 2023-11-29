/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("calendar_activity").del();
  await knex("calendar_activity").insert([
    {
      id: 1,
      user_id: 1,
      date: "2023-11-20",
      location: "London",
      morning_task: "Go to brunch",
      afternoon_task: "Visit the British museum",
      budget: "100",
    },
    {
      id: 2,
      user_id: 1,
      date: "2023-11-21",
      location: "London",
      morning_task: "Go shopping",
      afternoon_task: "Take a picture at Big Ben and London Eye",
      budget: "300",
    },
    {
      id: 3,
      user_id: 1,
      date: "2023-11-22",
      location: "London",
      morning_task: "Get up late",
      afternoon_task: "Go to Harry Potter studio",
      budget: "250",
    },
    {
      id: 4,
      user_id: 1,
      date: "2023-11-23",
      location: "Manchester",
      morning_task: "Train to manchaster from London",
      afternoon_task: "Watch Man City game",
      budget: "270",
    },
    {
      id: 5,
      user_id: 1,
      date: "2023-11-24",
      location: "London",
      morning_task: "Train to London from manchaster",
      afternoon_task: "Go to Soho",
      budget: "180",
    },
    {
      id: 6,
      user_id: 2,
      date: "2023-11-05",
      location: "Hampstead",
      morning_task: "Hampstead heath",
      afternoon_task: "Kenwood house",
      budget: "50",
    },
    {
      id: 7,
      user_id: 2,
      date: "2023-11-06",
      location: "Soho",
      morning_task: "Liberty London",
      afternoon_task: "Hamleys",
      budget: "220",
    },
    {
      id: 8,
      user_id: 2,
      date: "2023-11-07",
      location: "Notting hill",
      morning_task: "The Notting Hill Bookshop",
      afternoon_task: "Hyde park winter wonderland",
      budget: "100",
    },
    {
      id: 9,
      user_id: 2,
      date: "2023-11-08",
      location: "Shoreditch",
      morning_task: "BOXPARK",
      afternoon_task: "Pub",
      budget: "120",
    },
  ]);
};
