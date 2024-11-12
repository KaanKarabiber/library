const myLibrary = [{name: "mambo", author: "cino", page:112, read:true}, {name: "mambo", author: "cino", page:112, read:false}];
function Book(name, author, page, read){
    this.name = name;
    this.author = author;
    this.page = page;
    this.read = read;
}

const dialog = document.querySelector("dialog");
const form = document.querySelector("#book-form");
const newBookButton = document.querySelector("#add-book");
const submitButton = document.querySelector("#submit-button");

newBookButton.addEventListener('click', () =>{
    dialog.showModal();
});

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
function displayBooks(library){
    const container = document.querySelector(".container");
    container.innerHTML = "";
    library.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        const name = document.createElement("p");
        name.textContent = `Name: ${book.name}`;
        
        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.page}`;

        const readStatus = document.createElement("p");
        readStatus.textContent = `Read: ${book.read ? "Yes" : "No"}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeBook(index));

        const readCheckbox = document.createElement("input");
        readCheckbox.type = "checkbox";
        readCheckbox.checked = book.read;
        readCheckbox.addEventListener("change", () => toggleReadStatus(index)); 

        const readLabel = document.createElement("label");
        readLabel.textContent = "Read: ";
        readLabel.appendChild(readCheckbox);
        
        card.append(name, author, pages, readStatus, readLabel, removeButton);
        container.append(card);
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


