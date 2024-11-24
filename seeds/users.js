/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      username: 'admin',
      password: '123',
      name: 'Admin',
      email: 'ngocphatc2710@gmail.com',
      phone: '0354302134',
      address: 'Binh Phuoc',
      role: 0,
      token: '123!@#xyhfksffsdf'
    },
    {
      username: 'ngocphat',
      password: '123',
      name: 'Ngoc Phat',
      email: 'cnppro2710@gmail.com',
      phone: '0354302134',
      address: 'Binh Phuoc',
      role: 1,
      token: '123!@#sdgdgerrgs'
    }
  ]);
};
