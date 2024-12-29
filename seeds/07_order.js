/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  //await knex('orders').del()
  await knex('orders').insert([
    { user_id: 2, total_price: 200000, order_date: new Date(), order_status: 1, payment_method: 1, shipping_method: 1, voucher_id: 1, shipping_address: 'Thanh pho Ho Chi Minh'},
    { user_id: 2, total_price: 300000, order_date: new Date(), order_status: 0, payment_method: 1, shipping_method: 1, voucher_id: 2, shipping_address: 'Binh Duong'},
    { user_id: 3, total_price: 400000, order_date: new Date(), order_status: 1, payment_method: 1, shipping_method: 1, voucher_id: 3, shipping_address: 'Thu dau mot, Binh Duong'},
    { user_id: 3, total_price: 500000, order_date: new Date(), order_status: 1, payment_method: 1, shipping_method: 1, voucher_id: 4, shipping_address: 'China'},
    { user_id: 4, total_price: 600000, order_date: new Date(), order_status: 0, payment_method: 1, shipping_method: 1, voucher_id: 2, shipping_address: 'Paris'},
    { user_id: 4, total_price: 700000, order_date: new Date(), order_status: 2, payment_method: 1, shipping_method: 1, voucher_id: 1, shipping_address: 'Dong Xoai, Binh Phuoc'},
    { user_id: 4, total_price: 800000, order_date: new Date(), order_status: 2, payment_method: 1, shipping_method: 1, voucher_id: 1, shipping_address: 'Bu Dang, Binh Phuoc'},
  ]);
};
