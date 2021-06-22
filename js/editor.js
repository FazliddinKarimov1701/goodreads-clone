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
                    <input class="card-title inpVal" type="text" value="${title}" readonly>
                    <label>Country :</label>
                    <input class="inpVal" type="text" value="${country}" readonly>
                    <label>Price :</label>
                    <input class="inpVal" type="text" value="${price}" readonly>
                    <label>Year :</label>
                    <input class="inpVal" type="text" value="${year}" readonly>
                    <label>Pages :</label>
                    <input class="inpVal" type="text" value="${pages}" readonly>
                </div>
            </div>`;
}



function enableDisable(){
    var inputs = document.querySelectorAll("input");
    inputs.forEach(item => {
        if(item.readOnly === true){
            item.readOnly = false;
        }else{
            item.readOnly = true;
        }
    })
}

