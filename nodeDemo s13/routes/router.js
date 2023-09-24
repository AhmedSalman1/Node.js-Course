const { events } = require("../models/event");

const express = require("express"),
	router = express.Router(),
	pagesController = require("../controllers/pages.controller"),
	eventsController = require("../controllers/events.controller");
// mainController = require("../app/controllers/main.controller");

//* Export router
module.exports = router;

router.get("/", pagesController.showHome);
router.get("/contact", pagesController.showContact);

//* Events Route
router.get("/events", eventsController.showEvents);

//* Create Events Route
router.get("/create", eventsController.create); // show page
router.post("/store", eventsController.store); // save data

//* Updeate Event
router.get("/edit/:id", eventsController.edit); // render edit
router.post("/update/:id", eventsController.update); // save update

//* Show Single Event
router.get("/events/:id", eventsController.showSingleEvent);

//* Delete Event
router.get("/events/:id/delete", eventsController.deleteEvent);

//! For Task
