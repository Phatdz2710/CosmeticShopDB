/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('users').del()
  await knex('users').insert([
    {
      name: 'Admin',
      email: 'admin@gmail.com',
      phone: '0123456789',
      address: "Viet Nam",
    },

    {
      name: 'Ngọc Phát',
      email: 'ngocphatc2710@gmail.com',
      phone: '035432134',
      address: "Binh Phuoc",
    },
    
  ]);
};
