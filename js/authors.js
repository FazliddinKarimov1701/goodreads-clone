var authors = document.getElementById('authors');

fetch('http://book.alitechbot.uz/api/authors')
    .then(response => response.json())
    .then(json =>{

        let li = ``;
        json.forEach(item => {
            const {firstName, lastName, phone} = item;
            li += `
                <div class="card">
                    <img src="img/defaultBook.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h2 class="card-title">${firstName} ${lastName}</h2>
                        <h5 class="card-text">${phone}</h5>
                    </div>
                </div>`;
            authors.innerHTML = li;
        });
    })