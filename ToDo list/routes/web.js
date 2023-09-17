const express = require("express"),
	router = express.Router(),
	mainController = require("../app/controllers/main.controller");

// Export router
module.exports = router;

// Define App Routes
router.get("/", mainController.index);
router.get("/todolist", mainController.ToDo);
