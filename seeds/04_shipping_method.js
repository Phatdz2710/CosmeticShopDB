/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  //await knex('shipping_methods').del()
  await knex('shipping_methods').insert([
    {method_name: 'Giao hàng tiết kiệm', shipping_cost: 0},
    {method_name: 'Giao hàng nhanh', shipping_cost: 10000},
    {method_name: 'Giao hàng siêu tốc', shipping_cost: 20000},
  ]);
};
