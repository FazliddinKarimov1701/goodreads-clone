var books = document.getElementById("books");
var defaultImg = '/img/defaultBook.jpg';
var defaultAuthor = 'Jeff Seid';

fetch('http://book.alitechbot.uz/api/books')
    .then(response => response.json())
    .then(json =>{

        let li = ``;
        json.forEach(item => {
            const {_id,imageLink = defaultImg,title,year} = item;
            li += `
                <a href="./book_details.html?id=${_id}">
                    <div class="card">
                        <img src="${imageLink}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <input type="text" value="${title}" disabled>
                            <input type="text" value="${year}" disabled>
                        </div>
                    </div> 
                </a>`;
            books.innerHTML = li;
        });
    })


