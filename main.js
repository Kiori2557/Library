const display = document.querySelector(".display");
const newBook = document.querySelector(".addBook");
const form = document.querySelector(".newBookForm");
const confirmBtn = document.querySelector(".confirm");
const dialog = document.querySelector("dialog");
const closeFormBtn = document.querySelector(".closeForm");
const bookForm = document.querySelector("#bookForm");

closeFormBtn.addEventListener("click", function (e) {
  e.preventDefault();
  dialog.close();
});

const myLibrary = [];

class Book {
  constructor(author, title, pageNumber, hasRead) {
    this.author = author;
    this.title = title;
    this.pageNumber = pageNumber;
    this.hasRead = Boolean(hasRead);
  }
  addDisplay() {
    let status;
    status = this.hasRead ? "Already Read" : "Not Read Yet";
    let index = myLibrary.indexOf(this);

    display.innerHTML += `<div class='card'>
            <p>Title:  ${this.title}</p>
            <p>Author:  ${this.author}</p>
            <p>Page:  ${this.pageNumber} pages</p>
            <p>Status:  ${status}</p>
            <button data-status = '${index}'> Read</button>
            <button data-remove = '${index}'>Remove</button>
        </div>`;
    console.log(myLibrary);
    removeBook();
    changeReadStatus();
  }
}

newBook.addEventListener("click", () => {
  bookForm.reset();
  dialog.showModal();
});

confirmBtn.addEventListener("click", function () {
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#book").value;
  const pageNumber = document.querySelector("#pageNumber").value;
  const hasRead = document.querySelector("#hasRead").checked;
  if (!author || !title || !pageNumber) return;
  const newBook = new Book(author, title, pageNumber, hasRead);
  myLibrary.push(newBook);
  newBook.addDisplay();
  dialog.close();
});
// Remove Book
function removeBook() {
  let removeBtns = document.querySelectorAll("[data-remove]");
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener("click", function () {
      let key = removeBtn.getAttribute("data-remove");
      myLibrary.splice(key, 1);
      display.innerHTML = "";
      myLibrary.forEach((item) => item.addDisplay());
    });
  });
}
function changeReadStatus() {
  let readBtns = document.querySelectorAll("[data-status]");
  readBtns.forEach((readBtn) => {
    readBtn.addEventListener("click", function () {
      let key = readBtn.getAttribute("data-status");
      myLibrary[key].hasRead = !myLibrary[key].hasRead;
      display.innerHTML = "";
      myLibrary.forEach((item) => item.addDisplay());
    });
  });
}
