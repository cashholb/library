

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function() {
        if(haveRead) {
            return `${title} by ${author}, ${pages} pages, have read`;
        }else{
            return `${title} by ${author}, ${pages} pages, have NOT read`;
        }
    }
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