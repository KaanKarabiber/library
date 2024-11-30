class Book {
    constructor(name, author, page, read) {
    this.name = name;
    this.author = author;
    this.page = page;
    this.read = read;
    }
}
const book1 = new Book("Don Quixote", "Miguel de Cervantes", 433, true);
const book2 = new Book("Frankenstein", "Mary Shelley", 331, false);
const book3 = new Book("Brave New World", "Aldous Huxley", 577, true);
const myLibrary = [book1, book2, book3];

const dialog = document.querySelector("dialog");
const form = document.querySelector("#book-form");
const newBookButton = document.querySelector("#add-book");
const submitButton = document.querySelector("#submit-button");

newBookButton.addEventListener('click', () =>{
    dialog.showModal();
});
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener('click', () => dialog.close());
form.addEventListener('submit', addBookToLibrary);

function addBookToLibrary(event){
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const author = document.querySelector("#author").value;
    const pages = parseInt(document.querySelector("#pages").value);
    const read = document.querySelector("#read").checked;
    const newBook = new Book(name, author, pages, read);

    myLibrary.push(newBook);
    displayBooks(myLibrary);
    form.reset();
    dialog.close();
}
function displayBooks(library) {
    const container = document.querySelector(".container");

    // Remove all dynamically created book cards first
    container.querySelectorAll(".book-card").forEach(card => card.remove());

    // Re-create book cards based on the updated library
    library.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("book-card", "card");
        card.setAttribute("data-id", index);

        const name = document.createElement("p");
        name.textContent = `Title: "${book.name}"`;

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.page}`;

        const readCheckbox = document.createElement("input");
        readCheckbox.type = "checkbox";
        readCheckbox.checked = book.read;
        readCheckbox.addEventListener("change", () => toggleReadStatus(index));

        const readLabel = document.createElement("label");
        readLabel.textContent = "Read: ";
        readLabel.appendChild(readCheckbox);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", () => {
            removeBook(index);
        });
        
        card.append(name, author, pages, readLabel, removeButton);
        container.append(card);
        book.read ? card.style.boxShadow = "0px 0px 5px #4ade80" : card.style.boxShadow = "0px 0px 5px #ef4444";
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks(myLibrary);  
}
function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;  
    displayBooks(myLibrary); 
}
displayBooks(myLibrary);


