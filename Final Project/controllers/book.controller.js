const Book = require("../models/book");
const mongoose = require("mongoose");

function getBooks(req, res) {
	Book.find({})
		.select("title price author description _id")
		.then((books) => {
			if (books.length > 0) {
				res.json({
					method: "GET",
					url: "http://localhost:8000/books",
					books: books,
					message: "Books Retrieved Successfully !",
				});
			} else {
				res.status(404).json({ message: "No Books Yet " });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
}

// Add New Book
function storeBook(req, res) {
	const book = new Book({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		description: req.body.description,
		price: req.body.price,
		author: req.body.author,
	});
	book
		.save()
		.then((book) => {
			console.log(book);
			res.status(201).json({
				method: "POST",
				url: "http://localhost:8000/books",
				book: book,
				message: "Book Added Successfully ",
			});
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
}

//Show Book
function showBook(req, res) {
	const id = req.params.id;
	Book.findById(id)
		.select("_id title price author description")
		.then((book) => {
			if (book) {
				res.status(200).json({
					method: "GET",
					url: `http://localhost:8000/books/${id}`,
					book: book,
					message: "Book Showed Successfully !",
				});
			} else {
				res.status(404).json({ message: "Error 404 Book Not Found" });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
}

// Update Book
function updateBook(req, res) {
	const id = req.params.id;
	Book.findByIdAndUpdate(id, { $set: req.body })
		.then((result) => {
			if (result) {
				res.status(200).json(result);
			} else {
				res.status(404).json({ message: "Book Not Found" });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
}

// Delete Book
function deleteBook(req, res) {
	const id = req.params.id;
	Book.deleteOne({ _id: id })
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
}

module.exports = {
	getBooks,
	storeBook,
	showBook,
	updateBook,
	deleteBook,
};
