/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    //await knex('orders').del()
    await knex('vouchers').insert([
      { code: 'VOUCHER10K', discount_amount: 10000, percentage_discount: 0, description: 'Giảm 10k', valid_from: new Date(), valid_to: '1/1/2026', is_active: true},
      { code: 'VOUCHER10P', discount_amount: 0, percentage_discount: 0.1, description: 'Giảm 10%', valid_from: new Date(), valid_to: '1/1/2026', is_active: true},
      { code: 'VOUCHER20K', discount_amount: 20000, percentage_discount: 0, description: 'Giảm 20k', valid_from: new Date(), valid_to: '1/1/2026', is_active: true},
      { code: 'VOUCHER20P', discount_amount: 0, percentage_discount: 0.2, description: 'Giảm 20%', valid_from: new Date(), valid_to: '1/1/2026', is_active: true},
    ]);
  };
  