exports.up = async function(knex) {

    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name', 50).notNullable();
        table.string('email', 50).nullable();
        table.string('phone', 50).nullable();
        table.string('address', 50).nullable();
        table.datetime('create_time').notNullable();
        table.string('avatar_path', 200).nullable();
    });

    await knex.schema.createTable('accounts', (table) => {
        table.increments('id').primary();
        table.string('username', 50).notNullable();
        table.string('password', 50).notNullable();
        table.string('role', 50).notNullable().defaultTo('User');
        table.string('token', 50).notNullable();
        table.integer('user_id').notNullable().references('users.id');
    });
       

    await knex.schema.createTable('products', (table) => {
        table.increments('id').primary();
        table.string('name', 100).notNullable();
        table.integer('price').notNullable();
        table.string('brand', 50).notNullable();
        table.string('category', 50).notNullable();
        table.integer('stock').notNullable();
        table.integer('sold').notNullable().defaultTo(0);
        table.string('description', 1000).nullable();
        table.datetime('created_at').notNullable();
        table.string('image_path', 200).nullable();
        table.string('image_thumbnail_path', 200).nullable();
        table.float('average_rating').notNullable().defaultTo(0);
        table.integer('num_review').notNullable().defaultTo(0);
    });

    
    await knex.schema.createTable('vouchers', (table) => {
        table.increments('id').primary();
        table.string('code', 50).notNullable();
        table.decimal('discount_amount').notNullable();
        table.decimal('percentage_discount').notNullable();
        table.string('description', 1000).nullable();
        table.datetime('valid_from').notNullable();
        table.datetime('valid_to').notNullable();
        table.boolean('is_active').notNullable().defaultTo(true);
    });

    await knex.schema.createTable('orders', (table) => {
        table.increments('id').primary();
        table.integer('user_id').notNullable().references('users.id');
        table.integer('order_status').notNullable().defaultTo(0);
        table.datetime('order_date').notNullable();
        table.string('shipping_address', 100).notNullable();
        table.integer('payment_method').notNullable();
        table.integer('shipping_method').notNullable();
        table.integer('voucher_id').nullable().references('vouchers.id');
        table.integer('total_price').notNullable().defaultTo(0);
    });

    await knex.schema.createTable('order_items', (table) => {
        table.increments('id').primary();
        table.integer('order_id').notNullable().references('orders.id');
        table.integer('product_id').notNullable().references('products.id');
        table.integer('quantity').notNullable();
    });

    await knex.schema.createTable('carts', (table) => {
        table.increments('id').primary();
        table.integer('user_id').notNullable().references('users.id');
        table.integer('product_id').notNullable().references('products.id');
        table.integer('quantity').notNullable();
    });

    await knex.schema.createTable('payment_methods', (table) => {
        table.increments('id').primary();
        table.string('method_name', 50).notNullable();
    });

    await knex.schema.createTable('shipping_methods', (table) => {
        table.increments('id').primary();
        table.string('method_name', 50).notNullable();
        table.decimal('shipping_cost').notNullable();
    });


    await knex.schema.createTable('product_ratings', (table) => {
        table.increments('id').primary();
        table.integer('user_id').notNullable().references('users.id');
        table.integer('product_id').notNullable().references('products.id');
        table.integer('rating').notNullable().defaultTo(0);
        table.datetime('rating_date').notNullable();
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('product_ratings');
    await knex.schema.dropTableIfExists('shipping_methods');
    await knex.schema.dropTableIfExists('payment_methods');
    await knex.schema.dropTableIfExists('carts');
    await knex.schema.dropTableIfExists('order_items');
    await knex.schema.dropTableIfExists('orders');
    await knex.schema.dropTableIfExists('vouchers');
    await knex.schema.dropTableIfExists('products');
    await knex.schema.dropTableIfExists('accounts');
    await knex.schema.dropTableIfExists('users');
};