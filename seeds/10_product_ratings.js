/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    //await knex('orders').del()
    await knex('product_ratings').insert([
        {user_id: 2, product_id: 1, rating: 5, rating_date: new Date()},
        {user_id: 2, product_id: 2, rating: 4, rating_date: new Date()},
        {user_id: 2, product_id: 3, rating: 3, rating_date: new Date()},
        {user_id: 3, product_id: 1, rating: 2, rating_date: new Date()},
        {user_id: 3, product_id: 2, rating: 2, rating_date: new Date()},
        {user_id: 3, product_id: 4, rating: 2, rating_date: new Date()},
        {user_id: 4, product_id: 1, rating: 1, rating_date: new Date()},
        {user_id: 4, product_id: 3, rating: 3, rating_date: new Date()},
        {user_id: 4, product_id: 4, rating: 5, rating_date: new Date()},
        {user_id: 4, product_id: 5, rating: 5, rating_date: new Date()},
    ]);
  };