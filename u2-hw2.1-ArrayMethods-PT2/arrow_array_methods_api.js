const books = require('./books.json');

console.log("Takes one book title OR ISBN and return it if exists.");
const getBook = (isbn) => {
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
};
getBook("0000780062315018");
console.log("-----------------------------------------------------------------");

console.log("Return all existing books.");
const getBooks = () => {
    const titles = books.map(book => book.title).join(', ');
    return {
        code: 200,
        body: titles,
        msg: 'All books'
    };
};
console.log(getBooks());
console.log("-----------------------------------------------------------------");

console.log("Adds a new book and returns the new matrix, including the new book.");
const addBook = (newBook) => {
    books.push(newBook);
    return {
        code: 200,
        body: newBook,
        msg: `${newBook.title}`,
        updatedBooks: books
    };
};
const newBook = { 
    title: "Correr o Morir", 
    isbn: '789',
    year: 2014,
    genre: "Science Fiction",
    author: "James Dashner",
    stock: 10,
    publisher: "Delacorte Press"
};
console.log(addBook(newBook));
console.log("-----------------------------------------------------------------");

console.log("Takes a ISBN and, if found, removes the element from the array, it returns the deleted element and the new array.");
const removeBookByTitleOrISBN = (isbn) => {
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
};

console.log(removeBookByTitleOrISBN('789'));
console.log("-----------------------------------------------------------------");

console.log("Filtering books by genre, author, or publisher.");
const filterBy = (property, value) => {
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
};
console.log(filterBy('genre', 'fiction'));
console.log("-----------------------------------------------------------------");

console.log("List of all books in the format: Title - Author - Year.");
const listBooks = () => {
    const booksList = books.map(book => `${book.title} - ${book.author} - ${book.year}`).join('\n');
    return {
        code: 200,
        body: booksList,
        msg: 'List of all books in the format: Title - Author - Year.'
    };
};
console.log(listBooks());
console.log("-----------------------------------------------------------------");

console.log("Get all books for a given year.");
const getBooksByYear = (year) => {
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
};
console.log(getBooksByYear(2020));
console.log("-----------------------------------------------------------------");

console.log("Check if all books from a given genre have stock available.");
const genreFullAvailability = (genre) => {
    const genreBooks = books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    const allInStock = genreBooks.every(book => book.stock > 0);
    console.log({
        code: 200,
        body: allInStock,
        msg: `All books from the genre "${genre}" are ${allInStock ? 'available' : 'not available'} in stock.`
    });
    return allInStock;
};
console.log(genreFullAvailability('fiction'));
console.log("-----------------------------------------------------------------");

console.log("Check if at least ONE book from a given genre has stock availability.");
const genrePartialAvailability = (genre) => {
    const genreBooks = books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    const anyInStock = genreBooks.some(book => book.stock > 0);
    console.log({
        code: 200,
        body: anyInStock,
        msg: `At least ONE book from the genre "${genre}" is ${anyInStock ? 'available' : 'not available'} in stock.`
    });
    return anyInStock;
};
console.log(genrePartialAvailability('mystery'));
console.log("-----------------------------------------------------------------");

console.log("Counting books by genre, author, or publisher.");
const getCountBy = (property) => {
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
};
console.log(getCountBy('genre'));
console.log("-----------------------------------------------------------------");
