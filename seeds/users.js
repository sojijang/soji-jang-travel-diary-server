/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
  await knex('user').del()
  await knex('user').insert([
    {
      id: 1,
      first_name: 'Soji',
      last_name: 'Jang',
      email: 'soji0114@gmail.com',
      password: bcrypt.hashSync("12345"),
    },
    {
      id: 2,
      first_name: 'Hailey',
      last_name: 'Jang',
      email: 'hailey9214@gmail.com',
      password: bcrypt.hashSync("67890"),
    },
  ]);
};
