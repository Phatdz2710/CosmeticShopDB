/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  //await knex('orders').del()
  await knex('orders').insert([
    { user_id: 2, order_date: new Date(), order_status: 'Đang vận chuyển', is_approved: true, payment_method: 1, shipping_method: 1},
    { user_id: 2, order_date: new Date(), order_status: 'Đang vận chuyển', is_approved: true, payment_method: 1, shipping_method: 1},
    { user_id: 2, order_date: new Date(), order_status: 'Đang vận chuyển', is_approved: true, payment_method: 1, shipping_method: 1},
    { user_id: 2, order_date: new Date(), order_status: 'Đang vận chuyển', is_approved: true, payment_method: 1, shipping_method: 1},
    { user_id: 2, order_date: new Date(), order_status: 'Đang vận chuyển', is_approved: true, payment_method: 1, shipping_method: 1},
    { user_id: 2, order_date: new Date(), order_status: 'Đang vận chuyển', is_approved: true, payment_method: 1, shipping_method: 1},
    { user_id: 2, order_date: new Date(), order_status: 'Đang vận chuyển', is_approved: true, payment_method: 1, shipping_method: 1},
  ]);
};
