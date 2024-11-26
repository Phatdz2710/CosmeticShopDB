/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  //await knex('order_items').del();

  // Inserts seed entries
  await knex('order_items').insert([
    // Order 1
    {  order_id: 1, product_id: 1, quantity: 2 },
    {  order_id: 1, product_id: 2, quantity: 1 },

    // Order 2
    {  order_id: 2, product_id: 3, quantity: 1 },

    // Order 3
    {  order_id: 3, product_id: 4, quantity: 2 },
    {  order_id: 3, product_id: 1, quantity: 1 },

    // Order 4
    {  order_id: 4, product_id: 2, quantity: 3 },

    // Order 5
    {  order_id: 5, product_id: 5, quantity: 1 },

    // Order 6
    {  order_id: 6, product_id: 1, quantity: 4 },

    // Order 7
    {  order_id: 7, product_id: 3, quantity: 2 },
    {  order_id: 7, product_id: 4, quantity: 1 },
  ]);
};
