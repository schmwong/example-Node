const database = require("./database");

function get_all_products() {
    database.connection.query(`SELECT * FROM products`,  // MySQL query in string format
    (error, result) => {
        if(error){
            console.log(error);
        } else {
            console.log(result);
        }
    });
}

function get_sales_records() {
    database.connection.query(
    // mysql query in string format
    // Taken from Day 1 SQL Homework
    `SELECT
    b.ISBN,
    b.title AS Title,
    a.author_name AS "Author",
    b.unit_price AS "Unit Price",
    SUM(p.quantity) AS "Sales Volume"
    FROM
    books AS b
    LEFT JOIN purchases AS p ON b.ISBN = p.book_id
    LEFT JOIN authors AS a ON b.author_id = a.id
    GROUP BY
    b.ISBN
    ORDER BY
    SUM(p.quantity) DESC
    LIMIT
    3; `,
    (error, result) => {
        if(error){
            console.log(error);
        }
        else {
            console.log(result);
            //console.log(result[0].name);
        }
    }
)}

function get_product_by_id(id) {
    // Example: id = 5
    // SELECT * FROM products WHERE id = 5;
    database.connection.query(
        `SELECT * FROM products WHERE id = ${id}`,
        (error, result) => {
            if(error) {
                console.log(error);
            } else {
                console.log(result);
            }
        }
    );
}

function create_new_product(name, price) {
    database.connection.query(
      `insert into products (name, market_price) values ('${name}', '${price}')`,
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Created successfully!");
        }
      }
    );
}

function delete_product_by_id(id) {
    database.connection.query(`DELETE FROM products WHERE id = ${id}`,
        (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Product deleted successfully!");
        }
        }
    );
}

function update_price_by_id(id, new_price) {
    database.connection.query (
        `UPDATE products SET market_price = ${new_price} WHERE id = ${id}`,
        (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Price(s) updated successfully!");
            }
        }
    );
}

// REMEMBER TO ADD FUNCTIONS TO EXPORT LIST
// To define and enable export through Node JS
module.exports = {
    get_all_products, 
    get_sales_records, 
    get_product_by_id, 
    create_new_product, 
    delete_product_by_id, 
    update_price_by_id,
};