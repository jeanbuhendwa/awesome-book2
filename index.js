import Book from './modules/books.js';
import navigation from './modules/navMenu.js';
import newDate from './modules/date.js';
// import { DateTime } from "luxon";

const bookList = document.querySelector('.books');
const addBtn = document.getElementById('addButton');

const newBook = new Book();

if (!localStorage.getItem('book_list')) {
  newBook.updateLocalStorage();
  newBook.restoreLocalStorage();
} else {
  newBook.restoreLocalStorage();
}

addBtn.addEventListener('click', () => {
  newBook.addBook();
});

bookList.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    newBook.removeBook(e);
  }
});
navigation();
newDate();
