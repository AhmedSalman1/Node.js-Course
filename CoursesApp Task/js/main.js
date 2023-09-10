class BookUi {
	static displayDummyBooks() {
		const books = [
			{
				name: "Javascript Book",
				price: 200,
				author: "Mark Myers",
				description: "A Smarter Way to Learn JavaScript",
			},
			{
				name: "React Book",
				price: 300,
				author: "Nate Murray",
				description: "How to Learn React",
			},
		];

		for (let book of books) {
			BookUi.displayBooksIntoTable(book);
		}
	}

	static displayBooksIntoTable(book) {
		const tbody = document.querySelector("tbody"),
			row = document.createElement("tr");
		row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.price}</td>
            <td>${book.author}</td>
            <td>${book.description}</td>
            <td>
                <a href="#" class="btn btn-danger delete-book">delete</a>
            </td>
        `;
		tbody.appendChild(row);
	}
}

document.addEventListener("DOMContentLoaded", BookUi.displayDummyBooks);
