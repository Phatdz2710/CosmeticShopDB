// filepath: /E:/Nam hoc 24-25/WP/CosmeticShopDB/cometic_shopdatabase/seeds/initial_seed.js
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('accounts').del();
  
    // Inserts seed entries
    await knex('users').insert([
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', address: '123 Main St', avatar_path: 'path/to/avatar1.jpg' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '0987654321', address: '456 Elm St', avatar_path: 'path/to/avatar2.jpg' }
    ]);
  
    await knex('accounts').insert([
      { id: 1, username: 'john_doe', password: 'password123', role: 'User', token: 'token123', user_id: 1 },
      { id: 2, username: 'jane_doe', password: 'password456', role: 'Admin', token: 'token456', user_id: 2 }
    ]);
  };