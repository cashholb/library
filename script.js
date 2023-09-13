class Book {
    constructor(
        title = "",
        author = "",
        pages = '0',
        haveRead = false
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;

        
    }

    info() {
        if(haveRead) {
            return `${this.title} by ${this.author}, ${this.pages} pages, have read`;
        }else{
            return `${this.title} by ${this.author}, ${this.pages} pages, have NOT read`;
        }
    }
}

class Library {
    constructor() {
        this.bookList = []
    }

    addBook(bookToAdd) {
        this.bookList.push(bookToAdd);
    }

    removeBook(bookToRemove) {
        this.bookList = this.bookList.filter((book) => book.title !== title);
    }
}

const library = new Library();

/**
 * What to do
 * 5 remove cards
 * 6 remove all cards
 * 7 change read to "not read"
 */

// 1 Target the "+ Add book" button and display the modal on click
const modal = document.getElementById('modalNewBook');
const addBook = document.getElementById("addBook");
addBook.addEventListener('click', () => {
    modal.style.display = 'block';
});
const booksGrid = document.getElementById('bookGrid');


// 2 Fill out the form and on submit close the modal
// 3 Save the submitted form and log it to console

const newBookForm = document.getElementById('newBookForm');

function getBookFromInput() {
    const title = `"${document.getElementById('title').value}"`;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const haveRead = document.getElementById('haveRead').checked;

    return new Book(title, author, pages, haveRead);
}

const addBookOnSubmit = (event) => {
    event.preventDefault();

    const bookToAdd = getBookFromInput();
    console.log(`Book to add: ${bookToAdd.info()}`);

    library.addBook(bookToAdd);

    updateBooksGrid();
}

newBookForm.onsubmit = addBookOnSubmit;

//4 create a new card with the submitted form

function createCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const title = document.createElement('p');
    title.textContent = `${book.title}`;
    bookCard.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `${book.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `${book.pages}`;
    bookCard.appendChild(pages);

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group');

    const readBtn = document.createElement('button');
    readBtn.classList.add('have-read');
    if(book.haveRead) {
        readBtn.textContent = 'Have read'
        readBtn.style.backgroundColor = '#D1FFBD';
    }else{
        readBtn.textContent = 'Not read'
        readBtn.style.backgroundColor = '#FF474C';
    }
    buttonGroup.appendChild(readBtn);

    const delBtn = document.createElement('button')
    readBtn.classList.add('delete');
    buttonGroup.appendChild(delBtn);

    bookCard.appendChild(buttonGroup);

    return bookCard;
}

function updateBooksGrid() {
    booksGrid.innerHTML = '';
    for(let book of library.bookList) {
        booksGrid.appendChild(createCard(book));
    }
    modal.style.display = 'none';
}



function addBookToLibrary() {
    // do stuff here
}



const theHobbit = new Book('The Hobbit', 'Tolkien', 295, true);
const dogs = new Book('who let the dogs out: my life as a WW2 fighter jet pilot', 'Joe Pera', 69, false);

const myLibrary = [theHobbit, dogs];

for(let book of myLibrary)
{
    console.log(book.title);
}