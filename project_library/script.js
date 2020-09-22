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


function openForm() {
  document.getElementById('addBackground').style.display = 'block';
}

function closeForm() {
  document.getElementById('addBackground').style.display = 'none';
}

function submitBook() {
  const title = document.getElementById('bookTitleInput').value;
  const autor = document.getElementById('bookAutorInput').value;
  const pages = document.getElementById('bookPagesInput').value;
  const read = document.querySelector('input[name="read"]:checked').value;

  const book = new Book(title, autor, pages, read);

  book.addBookToLibrary();

  addBookTable(book);

  console.log(myLibrary);
}

function addBookTable(book) {
  let table = document.getElementById('bookTable');

  bookTitleTable(book, table);
  bookAuthorTable(book, table);
  bookPagesTable(book, table);
  bookReadTable(book, table);
  bookDeleteTable(table);
}

function bookTitleTable(book, table) {
  let paragraphTitle = document.createElement('p');
  let paragraphTitleText = document.createTextNode(book.title);

  paragraphTitle.setAttribute('class', `book${myLibrary.length}`);

  paragraphTitle.appendChild(paragraphTitleText);
  table.appendChild(paragraphTitle);
}

function bookAuthorTable(book, table) {
  let paragraphAuthor = document.createElement('p');
  let paragraphAuthorText = document.createTextNode(book.author);

  paragraphAuthor.setAttribute('class', `book${myLibrary.length}`);

  paragraphAuthor.appendChild(paragraphAuthorText);
  table.appendChild(paragraphAuthor);
}

function bookPagesTable(book, table) {
  let paragraphPages = document.createElement('p');
  let paragraphPagesText = document.createTextNode(book.pages);

  paragraphPages.setAttribute('class', `book${myLibrary.length}`);

  paragraphPages.appendChild(paragraphPagesText);
  table.appendChild(paragraphPages);
}

function bookReadTable(book, table) {
  let paragraphRead = document.createElement('p');
  let paragraphReadText = document.createTextNode(book.read);

  paragraphRead.setAttribute('class', `book${myLibrary.length}`);

  paragraphRead.appendChild(paragraphReadText);
  table.appendChild(paragraphRead);
}

function bookDeleteTable(table) {
  let paragraphDelete = document.createElement('a');
  let paragraphDeleteText = document.createTextNode(' 🗑 ');

  paragraphDelete.setAttribute('class', `book${myLibrary.length} removeBook`);
  paragraphDelete.setAttribute('href', '#');

  paragraphDelete.appendChild(paragraphDeleteText);
  table.appendChild(paragraphDelete);
}

document.addEventListener('click', (e) => {
  console.log('teste');
  if (e.target.className.includes('removeBook')) {
    console.log('teste');
    if (confirm('You want to remove this book from the library?')) {
      const bookIndex = e.target.className.split(' ');
      const paras = document.getElementsByClassName(`${bookIndex[0]}`);

      while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
      }
    }
  }
});

function clearFormInputs() {
  let title = document.getElementById('bookTitleInput');
  let autor = document.getElementById('bookAutorInput');
  let pages = document.getElementById('bookPagesInput');


  title.value = '';
  autor.value = '';
  pages.value = '';
}

addBookBtn.addEventListener('click', function(e) {
  openForm();
});

btnClose.addEventListener('click', function(e) {
  clearFormInputs();
  closeForm();
});

btnSubmit.addEventListener('click', function(e) {
  submitBook();
});
