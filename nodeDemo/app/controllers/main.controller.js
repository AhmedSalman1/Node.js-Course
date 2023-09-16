function index(req, res) {
	// res.send('<h1>Hello from main controller </h1>')
	const students = ["Ahmed Mazhar", "Ahmed Salman", "Ahmed Nagy"];
	res.render("pages/index.ejs", { title: "Home Page", students });
}

function about(req, res) {
	res.render("pages/about.ejs", { title: "About Page" });
}

function sample_post(req, res) {
	res.render("pages/sample_post.ejs", { title: "Sample Post page" });
}

function contact(req, res) {
	res.render("pages/contact.ejs", {
		title: "Contact Page",
	});
}

module.exports = {
	index,
	about,
	sample_post,
	contact,
};
