/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    //await knex('orders').del()
    await knex('carts').insert([
      { user_id: 2, product_id: 15, quantity: 3 },
      { user_id: 2, product_id: 16, quantity: 2 },
      { user_id: 2, product_id: 17, quantity: 1 },
    ]);
  };
  