/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  //await knex('orders').del()
  await knex('orders').insert([
    { user_id: 2, order_date: new Date(), order_status: 1, payment_method: 1, shipping_method: 1, voucher_id: 1},
    { user_id: 2, order_date: new Date(), order_status: 0, payment_method: 1, shipping_method: 1, voucher_id: 2},
    { user_id: 3, order_date: new Date(), order_status: 1, payment_method: 1, shipping_method: 1, voucher_id: 3},
    { user_id: 3, order_date: new Date(), order_status: 1, payment_method: 1, shipping_method: 1, voucher_id: 4},
    { user_id: 4, order_date: new Date(), order_status: 0, payment_method: 1, shipping_method: 1, voucher_id: 2},
    { user_id: 4, order_date: new Date(), order_status: 2, payment_method: 1, shipping_method: 1, voucher_id: 1},
    { user_id: 4, order_date: new Date(), order_status: 2, payment_method: 1, shipping_method: 1, voucher_id: 1},
  ]);
};
