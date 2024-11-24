exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE users(  
            username VARCHAR(50) NOT NULL PRIMARY KEY,
            password VARCHAR(50) NOT NULL,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            address VARCHAR(50) NOT NULL,
            role VARCHAR(50) NOT NULL,
            token VARCHAR(50) NOT NULL
        );
    `);

    await knex.raw(`
        CREATE TABLE products(
            id INT NOT NULL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            price INT NOT NULL,
            brand nvarchar(50) NOT NULL,
            category nvarchar(50) NOT NULL,
            description nvarchar(1000) NULL,
            created_at datetime NOT NULL,
            image_path nvarchar(50) NULL,
            image_thumbnail_path nvarchar(50) NULL,
            average_rating FLOAT NOT NULL DEFAULT 0,
        )
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE if exists users;
        DROP TABLE if exists products;
    `);
};