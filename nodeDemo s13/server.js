//! Load environment Variables
require("dotenv").config();

//! Load Our Dependencies
const express = require("express"),
	app = express(),
	expressLayout = require("express-ejs-layouts"),
	mongoose = require("mongoose"),
	port = process.env.PORT;

//! Add Static Middleware   ((public)بيشاور علي فولدر ال)
app.use(express.static(__dirname + "/public"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

//! Add View Engine
app.set("view engine", "ejs"); // work by partials  // (فولدر ال views لازم يكون اسمه views)
app.use(expressLayout); // work by layout

//! Database Connection
(() => {
	mongoose.connect(process.env.DB_URI);
	const db = mongoose.connection;
	db.on("error", console.error.bind(console, "Connection Failed"));
	db.once("open", () => {
		console.log("Database Connected Successfully");
	});
})();

//! Set Express URL Encoded
app.use(express.urlencoded({ extended: false }));

//! Set Application Router
app.use(require("./routes/router"));

//! Running Server
app.listen(port, () => {
	console.log(`Server running on localhost:${port}`);
});

/*
// Load environment Variables
require("dotenv").config();
// Load Our Dependencies
const express = require("express"),
	app = express(),
	port = process.env.PORT;

//Static Middleware
app.use(express.static(__dirname + "/public"));
// Set view engine
app.set("view engine", "ejs");
// Set Application Routes
app.use(require("./routes/web"));
// Running App Server
app.listen(port, () => {
	console.log(`Server running on localhost:${port}`);
});
*/
