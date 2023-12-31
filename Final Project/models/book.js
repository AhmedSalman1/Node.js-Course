const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		title: { type: String, required: true },
		description: { type: String, required: true },
		author: { type: String, required: true },
		price: { type: Number, required: true },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Book", bookSchema);
