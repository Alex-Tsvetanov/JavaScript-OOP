/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [];
		var categories = [];

		function listBooks(option) {
			if (!option)
			{
				return books.slice (0);
			}
			else if (option.category)
			{
				return books.filter (x => x.category == option.category);
			}
			else if (option.author)
			{
				return books.filter (x => x.author == option.author);
			}
			else
			{
				return books.slice (0);
			}
		}

		function addBook(book) {
			if (
				2 > book.category.length ||
				100 < book.category.length ||
				2 > book.title.length ||
				100 < book.title.length ||
				book.author === "" ||
				10 > book.isbn.length ||
				13 < book.isbn.length ||
				books.filter (x => x.isbn == book.isbn).length != 0 ||
				books.filter (x => x.title == book.title).length != 0// ||
			   )
			{
				throw "";
			}
			book.ID = books.length + 1;
			books.push (book);
			if (categories.indexOf(book.category) === -1)
			{
				categories.push (book.category);
				console.log (categories);
			}
			return book;
		}

		function listCategories() {
			return categories.slice (0);
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}
module.exports = solve;
