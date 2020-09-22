/* eslint-disable require-jsdoc */
const myLibrary = [];

class Book {
  constructor(title, autor, pages, read) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
  }

  addBookToLibrary() {
    myLibrary.push(this);
  }
}

addBookBtn.addEventListener('click', function(e) {
  openForm();
});

function openForm(){
  
}
