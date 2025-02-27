const { Token } = require("tedious/lib/token/token");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('accounts').del()
  await knex('accounts').insert([
    {username: 'admin', password: '123', role: 'Admin', token: 'fhsdkfhsjfhsfkshf', user_id: 1},
    {username: 'ngocphat', password: '123', role: 'User', token: 'fhsf87fshbsbfufs', user_id: 2},
    {username: 'cnp', password: '123', role: 'User', token: 'fhsf87fshbsbfufs', user_id: 3},
    {username: 'thanh', password: '123', role: 'User', token: 'fhsf87fshbsbfufs', user_id: 4},
  ]);
};
