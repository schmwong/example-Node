// To get Node JS to import from product.js
const product = require("./product");

// To enable connection out to Postman via Express JS
const express = require("express");
server = express();
//server.use(body_parser()); //deprecated
server.use(express.json());

// Include cors library in Node JS module
// to enable Frontend and Backend to operate at the same time
const cors = require("cors");
server.use(cors());

/////////////////////////
// === DAY 3: Sending responses to Postman ===

///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Basic "Hello World" test function
router = express.Router();

router.get("/welcome", (request, response) => {
  response.status(200).send("Welcome to DevToolkit#2");
});

server.use(router); // Use router defined here
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//
server.use(product.router); // Use router API from product.js

server.listen(3000, () => {
  console.log("Server is running!");
});

///
////////////////////////
// === DAY 2: Calling Functions from product.js ===

//product.create_new_product("iPad", "1000");
//product.delete_product_by_id(9);
//product.update_price_by_id(10, 1500);
//product.get_all_products();
//product.get_sales_records();

//product.get_product_by_id(3);
