const bcrypt = require("bcryptjs");

const password = "examplePassword123";

const hashedPassword = bcrypt.hashSync(password);

const users = [
  {
    id: 1,
    name: "Soji Jang",
    password: hashedPassword,
  },
  {
    id: 2,
    name: "Esme Ayscough",
    password: hashedPassword,
  },
];

module.exports = users;
