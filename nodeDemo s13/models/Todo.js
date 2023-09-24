const mongoose = require("mongoose");

// Event Schema
const TodoSchema = new mongoose.Schema({
	todo: {
		type: String,
		required: true,
	},
});

// Create Our Model
const Todo = mongoose.model("Todo", TodoSchema);

// Export Model
module.exports = Todo;
