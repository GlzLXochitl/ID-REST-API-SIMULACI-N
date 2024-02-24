// Type: JavaScript
// Description: These activities compared with u2-hw2.1-ArrayMethods-PT2 are the same except for the data, are requested through the terminal.

const { read } = require('fs');
const books = require('./books.json');
//console.log(books)

//Takes one book title OR ISBN and return it if exists.
function getBook(isbn) {
    const book = books.find(book => book.isbn === isbn);
    if (book) {
        console.log({
            code: 200,
            body: book,
            msg: `The book exists`
        });
        return book;
    } else {
        console.log({
            code: 400,
            body: 'False',
            msg: `No book found`
        });
        return null;
    }
}

//Return all existing books.
function getBooks() {
    const titles = books.map(book => book.title).join(', ');
    return {
        code: 200,
        body: titles,
        msg: 'All books'
    };
}

//Adds a new book and returns the new matrix, including the new book.
function addBook(newBook) {
    books.push(newBook);
    return {
        code: 200,
        body: newBook,
        msg: `${newBook.title}`,
        updatedBooks: books
    };
}

//Takes a ISBN and, if found, removes the element from the array, it returns the deleted element and the new array.
function removeBookByTitleOrISBN(isbn) {
    const index = books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
        const removedBook = books.splice(index, 1)[0];
        return {
            code: 200,
            body: removedBook,
            msg: `The book "${removedBook.title}" has been removed.`,
            updatedBooks: books
        };
    } else {
        return {
            code: 400,
            body: 'False',
            msg: `No book found with ISBN ${isbn}.`
        };
    }
}

//Filtering books by genre, author, or publisher.
function filterBy(property, value) {
    const filteredBooks = books.filter(book => book[property].toLowerCase().includes(value.toLowerCase()));
    if (filteredBooks.length > 0) {
        console.log({
            code: 200,
            body: filteredBooks,
            msg: `Books found matching the ${property}: "${value}".`
        });
        return filteredBooks;
    } else {
        console.log({
            code: 404,
            body: null,
            msg: `No books found matching the ${property}: "${value}".`
        });
        return [];
    }
}

//List of all books in the format: Title - Author - Year.
function listBooks() {
    const booksList = books.map(book => `${book.title} - ${book.author} - ${book.year}`).join('\n');
    return {
        code: 200,
        body: booksList,
        msg: 'List of all books in the format: Title - Author - Year.'
    };
}

//Get all books for a given year.
function getBooksByYear(year) {
    const booksOfYear = books.filter(book => book.year === year);
    if (booksOfYear.length > 0) {
        console.log({
            code: 200,
            body: booksOfYear,
            msg: `Books found for the year ${year}.`
        });
        return booksOfYear;
    } else {
        console.log({
            code: 404,
            body: null,
            msg: `No books found for the year ${year}.`
        });
        return [];
    }
}

//Check if all books from a given genre have stock available.
function genreFullAvailability(genre) {
    const genreBooks = books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    const allInStock = genreBooks.every(book => book.stock > 0);
    console.log({
        code: 200,
        body: allInStock,
        msg: `All books from the genre "${genre}" are ${allInStock ? 'available' : 'not available'} in stock.`
    });
    return allInStock;
}

//Check if at least ONE book from a given genre has stock availability.
function genrePartialAvailability(genre) {
    const genreBooks = books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    const anyInStock = genreBooks.some(book => book.stock > 0);
    console.log({
        code: 200,
        body: anyInStock,
        msg: `At least ONE book from the genre "${genre}" is ${anyInStock ? 'available' : 'not available'} in stock.`
    });
    return anyInStock;
}

//Counting books by genre, author, or publisher.
function getCountBy(property) {
    const countMap = books.reduce((acc, book) => {
        const value = book[property];
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, {});
    console.log({
        code: 200,
        body: countMap,
        msg: `Count of books by ${property}.`
    });
    return countMap;
}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Choose one of the following options: ', (option) => {
  switch (parseInt(option)) {
    case 1:
        console.log("Takes one book title OR ISBN and return it if exists.");
        readline.question('Enter the ISBN: ', (isbn) => {
            console.log("El ISBN introducido fue: " + isbn);
            getBook(isbn);
            readline.close();
        });
        break;
    case 2:
        console.log("Return all existing books.")
        readline.question('This option returns all the existing books, you would to continue? (y = yes, n = no) ', (continueOption) => {
            if (continueOption == 'y') {
                console.log(getBooks());
                readline.close();
            } else {
                console.log("Financed action");
                readline.close();
            }
        })    
        break;
    case 3: 
        console.log("Adds a new book and returns the new matrix, including the new book.")
        console.log("Respond to the requested information.")
        readline.question('Title: ', (title) => {
            readline.question('ISBN: ', (isbn) => {
                readline.question('Year: ', (year) => {
                    readline.question('Genre: ', (genre) => {
                        readline.question('Author: ', (author) => {
                            readline.question('Stock: ', (stock) => {
                                readline.question('Publisher: ', (publisher) => {
                                    const newBook = { 
                                        title, 
                                        isbn, 
                                        year, 
                                        year, 
                                        genre, 
                                        author, 
                                        stock, 
                                        publisher
                                    };
                                    console.log(addBook(newBook));
                                    readline.close();
                                });
                            });
                        });
                    });
                });
            });
        });
        break;
    case 4: 
        console.log("Takes a ISBN and, if found, removes the element from the array, it returns the deleted element and the new array.")
        readline.question('Enter the ISBN: ', (isbn) => {
            console.log("El ISBN introducido fue: " + isbn);
            console.log(removeBookByTitleOrISBN(isbn));
            readline.close();
        });
        break;
    case 5:
        console.log("Filtering books by genre, author, or publisher.");
        readline.question('Enter filter: (genre/author/publisher) ', (filter) => {
                readline.question('Enter category: ', (category) => {
                    console.log(filterBy(filter, category));
                    //console.log(filterBy('genre', 'fiction'));
                    readline.close();
                });
        });
        break;
    case 6:
        console.log("List of all books in the format: Title - Author - Year.");
        readline.question('This option returns all the existing books, you would to continue? (y = yes, n = no) ', (continueOption) => {
            if (continueOption == 'y') {
                console.log(listBooks());
                readline.close();
            } else {
                console.log("Financed action");
                readline.close();
            }
        })    
        break;
    case 7:
        console.log("Get all books for a given year.");
        readline.question('Enter the year for the search: ', (year) => {
            console.log(getBooksByYear(year));
            readline.close();
        });
        break;
    case 8:
        console.log("Check if all books from a given genre have stock available.");
        readline.question('Enter the gender for the search: ', (genre) => {
            console.log(genreFullAvailability(genre));
            readline.close();
        });
        break;
    case 9:
        console.log("Check if at least ONE book from a given genre has stock availability.");
        readline.question('Enter the gender for the search: ', (genre) => {
            console.log(genrePartialAvailability(genre));
            readline.close();
        });
        break;
    case 10:
        console.log("Counting books by genre, author, or publisher.");
        //console.log(getCountBy('genre'));
        readline.question('Enter filter: (genre/author/publisher) ', (filter) => {
            console.log(getCountBy(filter));
            readline.close();
        });
        break;
    default: 
        console.log("Invalid option");
        readline.close();
  }
});