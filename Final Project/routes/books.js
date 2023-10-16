const express = require("express"),
	router = express.Router(),
	bookController = require("../controllers/book.controller");

router.get("/", bookController.getBooks);

router.post("/", bookController.storeBook);
router.get("/:id", bookController.showBook);
router.patch("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
