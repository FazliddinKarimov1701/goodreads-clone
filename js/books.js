var books = document.getElementById("books");
var defaultImg = '/img/defaultBook.jpg';
var defaultAuthor = 'Jeff Seid';

fetch('http://book.alitechbot.uz/api/books')
    .then(response => response.json())
    .then(json =>{

        let li = ``;
        json.forEach(item => {
            const {_id,imageLink = defaultImg,title,author,year} = item;
            li += `
                <div class="card">
                    <img src="${imageLink}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${title}</h4>
                        <p>${year}</p>
                    </div>
                </div> `;
            books.innerHTML = li;
        });
    })