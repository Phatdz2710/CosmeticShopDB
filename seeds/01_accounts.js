const { Token } = require("tedious/lib/token/token");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('accounts').del()
  await knex('accounts').insert([
    {username: 'admin', password: '123', role: 'Admin', token: 'fhsdkfhsjfhsfkshf'},
    {username: 'ngocphat', password: '123', role: 'User', token: 'fhsf87fshbsbfufs'},
  ]);
};
