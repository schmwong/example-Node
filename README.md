# example-Node
--
Repository of scripts for: 
  1. sending queries to the database (MySQL strings in JavaScript functions)
  2. CRUD operations using JavaScript 
  
Practised using Node JS on Day 2 of course:
Developers Toolkit 2 - Middleware to Backend [COMFTDEV2/11]
--



N.B.:
When working with multiple .js files, remember to export defined functions using

#  module.exports = { Function1, Function2 };

and create link on file that invokes these functions using 
  
# const name  = require("Source File URL");
  
 Invoke using
 
  name.Function1();
  name.Function2();
