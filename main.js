const display = document.querySelector(".display");
const newBook = document.querySelector(".addBook");
const form = document.querySelector(".newBookForm");
const confirmBtn = document.querySelector(".confirm");
const myLibrary = [];
function Book(author, title, pageNumber, hasRead) {
  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.hasRead = Boolean(hasRead);
}

const book1 = new Book("May", "The Sun Before The Dusk", 87, false);
const book2 = new Book("Joe", "On The Bus", 79, true);
myLibrary.push(book1);
myLibrary.push(book2);
function addDisplay(item) {
  display.innerHTML += `<div>
            <p>${item.author}</p>
            <p>${item.title}</p>
            <p>${item.pageNumber}</p>
            <p>${item.hasRead}</p>
        </div>`;
}
newBook.addEventListener("click", function () {
  form.classList.toggle("visible");
});

confirmBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#book").value;
  const pageNumber = document.querySelector("#pageNumber").value;
  const hasRead = document.querySelector("#hasRead");
  let read;
  if (hasRead.checked) {
    read = true;
  } else {
    read = false;
  }
  const newBook = new Book(author, title, pageNumber, read);
  myLibrary.push(newBook);
  display.innerHTML = "";
  myLibrary.forEach((item) => addDisplay(item));
});
myLibrary.forEach((item) => addDisplay(item));
