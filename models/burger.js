// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
  selectAll: (cb) => {
    orm.selectAll('burgers', (res) => cb(res));

  },
  // The variables cols and vals are arrays.
  insertOne: (cols, vals, cb) => {
    orm.selectAll("burgers", cols, vals, (res) => cb(res));

  },
  updateOne: (objColVals, condition, cb) => {
    orm.selectAll("burgers", objColVals, condition, (res) => cb(res));
  },
  deleteOne: (condition, cb) => {
    orm.selectAll("burgers", condition, (res) => cb(res));
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
