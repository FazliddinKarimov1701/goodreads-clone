// ------------------ Fetching book by id -------------------------


var query = new URLSearchParams(location.search);
const id = query.get('id');

fetch(`http://book.alitechbot.uz/api/books/${id}`)
    .then(res => res.json())
    .then(data => {
        displayBook(data,'#full_info');
    })
    
function displayBook(data = [], element){
    const newEl = document.querySelector(element);
    const {title, pages, country, year, imageLink, price} = data;
    newEl.innerHTML += `
            <div class="book_card">
                <img src="${imageLink}" class="card-img-top" alt="...">
                <div class="card-body">
                    <label for="card-title">Title :</label>
                    <input class="card-title" type="text" value="${title}" disabled>
                    <label>Country :</label>
                    <input type="text" value="${country}" disabled>
                    <label>Price :</label>
                    <input type="text" value="${price}" disabled>
                    <label>Year :</label>
                    <input type="text" value="${year}" disabled>
                    <label>Pages :</label>
                    <input type="text" value="${pages}" disabled>
                </div>
            </div>`;
}

var btn = document.getElementById("editorBtn");
var input = document.querySelectorAll('input');
console.log(input)