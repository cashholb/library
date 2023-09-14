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

    toggleHaveRead() {
        this.haveRead = this.haveRead ? false : true;
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

    removeBook(title) {
        this.bookList = this.bookList.filter((book) => book.title !== title);
    }

    removeAllBooks() {
        this.bookList.length = 0;
    }
}

const library = new Library();

/**
 * What left to do:
 * ----------------
 * click out of overlay by clicking to the side
 * error handle multiple titles of the same book
 */

// 6 remove all cards
const removeAllBtn = document.getElementById("removeAllBooks");
removeAllBtn.addEventListener('click', () => {
    library.removeAllBooks();
    updateBooksGrid();
});

const sampleLibraryBtn = document.getElementById("sampleLibrary");
sampleLibraryBtn.addEventListener('click', () => {
    library.removeAllBooks();
    library.addBook(new Book("The Hobbit", "J. R. R. Tolkien", "310", false));
    library.addBook(new Book("The Hitchhiker's Guide To The Galaxy", "Douglas Adams", "216", true));
    updateBooksGrid();
});

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

function addBookOnSubmit(event) {
    event.preventDefault();

    // check for title error
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const haveRead = document.getElementById('haveRead').checked;
    const bookToAdd = new Book(title, author, pages, haveRead);
    
    newBookForm.reset();
    
    library.addBook(bookToAdd);

    updateBooksGrid();

}

newBookForm.onsubmit = addBookOnSubmit;

//4 create a new card with the submitted form

function createCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = `"${book.title}"`;
    bookCard.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `${book.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;
    bookCard.appendChild(pages);

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group');

    const readBtn = document.createElement('button');
    readBtn.classList.add('have-read');
    readBtn.onclick = toggleRead;
    if(book.haveRead) {
        readBtn.textContent = 'Have read'
        readBtn.style.backgroundColor = '#D1FFBD';
    }else{
        readBtn.textContent = 'Not read'
        readBtn.style.backgroundColor = '#FF8488';
    }
    buttonGroup.appendChild(readBtn);

    const delBtn = document.createElement('button')
    delBtn.classList.add('delete');
    delBtn.textContent = 'Delete';
    delBtn.onclick = removeCard;
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


// 5 remove cards
function removeCard(e) {
    const titleToRemove = e.target.parentNode.parentNode.firstChild.textContent.replaceAll('"', '');
    library.removeBook(titleToRemove);
    updateBooksGrid();
}

// 7 change read to "not read"
function toggleRead(e) {
    const titleToToggleRead = e.target.parentNode.parentNode.firstChild.textContent.replaceAll('"', '');

    library.bookList.find((book) => book.title == titleToToggleRead).toggleHaveRead();
    updateBooksGrid();
    return;
}




