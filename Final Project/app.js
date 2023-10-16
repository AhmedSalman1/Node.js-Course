require("dotenv").config();
const express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	booksRouter = require("./routes/books"),
	port = process.env.PORT || 8000;

(() => {
	mongoose.connect(process.env.DB_URI);
	mongoose.set("strictQuery", true);
	const db = mongoose.connection;
	db.once("open", () => console.log("Db Connected successfully"));
	db.on("error", () => console.error("Connection Failed "));
})();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware routes
app.use("/books", booksRouter);

// Handle Error
app.use((req, res, next) => {
	const error = new Error("Request not found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		errorMessage: {
			message: error.message,
			status: error.status,
		},
	});
});

app.use((req, res, next) => {
	res.status(200).json({
		message: "Server Running Successfully",
	});
	next();
});

app.listen(port, () => console.log(`Server Running on localhost ${port}`));
