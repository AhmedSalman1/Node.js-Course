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

// array to store tasks
let tasks = [];

// Render the to-do list
app.get("/", (req, res) => {
	res.render("todolist", { tasks });
});

// Add a new task
app.post("/add", (req, res) => {
	const newTask = req.body.task;
	tasks.push(newTask);
	res.redirect("/todolist");
});

// Running App Server
app.listen(port, () => {
	console.log(`Server running on localhost:${port}`);
});
