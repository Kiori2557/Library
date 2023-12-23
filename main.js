const display = document.querySelector(".display");
const newBook = document.querySelector(".addBook");
const form = document.querySelector(".newBookForm");
const confirmBtn = document.querySelector(".confirm");
const dialog = document.querySelector("dialog");
const closeFormBtn = document.querySelector(".closeForm");

closeFormBtn.addEventListener("click", function (e) {
  e.preventDefault();
  dialog.close();
});

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
  let status;
  if (item.hasRead) {
    status = "Already Read";
  } else {
    status = "Not Read Yet";
  }
  let index = myLibrary.indexOf(item);
  console.log(index);
  display.innerHTML += `<div class='card'>
            <p>Author:  ${item.author}</p>
            <p>Title:  ${item.title}</p>
            <p>Page:  ${item.pageNumber} pages</p>
            <p>Status:  ${status}</p>
            <button data-index = '${index}' >Remove</button>
        </div>`;
  removeBook();
}

newBook.addEventListener("click", () => dialog.showModal());
myLibrary.forEach((item) => addDisplay(item));

confirmBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#book").value;
  const pageNumber = document.querySelector("#pageNumber").value;
  const hasRead = document.querySelector("#hasRead");
  if (!author || !title || !pageNumber) return;
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
  dialog.close();
});
// Remove Book
function removeBook() {
  let removeBtns = document.querySelectorAll("[data-index]");
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener("click", function () {
      let key = removeBtn.getAttribute("data-index");
      myLibrary.splice(key, 1);
      display.innerHTML = "";
      myLibrary.forEach((item) => addDisplay(item));
    });
  });
}
