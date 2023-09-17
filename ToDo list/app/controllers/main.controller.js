function index(req, res) {
	// res.send('<h1>Hello from main controller </h1>')
	const students = ["Ahmed Mazhar", "Ahmed Salman", "Ahmed Nagy"];
	res.render("pages/index.ejs", { title: "Home Page", students });
}

function ToDo(req, res) {
	const tasks = [];
	res.render("pages/todolist.ejs", { title: "ToDo", tasks });
}

module.exports = {
	index,
	ToDo,
};
