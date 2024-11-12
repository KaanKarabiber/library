const myLibrary = [{name: "mambo", author: "cino", page:112, read:true}, {name: "mambo", author: "cino", page:112, read:false}];
const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#add-book");
    newBookButton.addEventListener('click', () =>{
        dialog.showModal();
    });

function Book(name, author, page, read){
    this.name = name;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(book){
    
    // myLibrary.push(book);
}
function displayBooks(library){
    const container = document.querySelector(".container");
    library.forEach(book => {
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
        
        card.append(name, author, pages, readStatus);
        container.append(card);
    });  
}

displayBooks(myLibrary);


