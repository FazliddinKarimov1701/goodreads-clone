// --------------- Add Book Form ------------------


function addBookForm() {
    const form = `
    <div class="modal" tabindex="-1" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add new book</h5>
                </div>
                <div class="modal-body">
                    <form id="new-book-form">
                        <input type="text" name="title" placeholder="Title">
                        <input type="number" name="pages" placeholder="Pages">
                        <input type="number" name="price" placeholder="Price">
                        <input type="url" name="imageLink" placeholder="Image">
                        <input type="text" name="country" placeholder="Country">
                        <input type="number" name="year" placeholder="Year">
                        <select name="author" id="select">
                            <option value="60c227bd93aa306e2bf12ecb">Azamat</option>
                            <option value="60c2282393aa306e2bf12ecc">Abdulhamid</option>
                        </select>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="createBook()">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    `;

    document.body.innerHTML += form;
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
        keyboard: false
    })
    myModal.show();
}


// -------------------- Add Author Form --------------------


function addAuthorForm() {
    const form = `
    <div class="modal" tabindex="-1" id="myAuthorModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add new book</h5>
                </div>
                <div class="modal-body">
                    <form id="new-author-form">
                        <input type="text" name="firstName" placeholder="First name">
                        <input type="text" name="lastName" placeholder="Last name">
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="createAuthor()">Save changes</button>
                </div>
            </div>
        </div>
    </div>
`;

    document.body.innerHTML += form;
    var myModal = new bootstrap.Modal(document.getElementById('myAuthorModal'), {
        keyboard: false
    })
    myModal.show();
}


// -------------------- Create Book ------------------


function createBook() {
    const bookForm = document.getElementById('new-book-form');
    const { title, pages, imageLink, author, year, country, price } = bookForm;
    const book = {
        title: title.value,
        pages: pages.value,
        imageLink: imageLink.value,
        author: author.value,
        year: year.value,
        country: country.value,
        price: price.value
    };
    console.log(book);
    const token = localStorage.token;
    var requestOptions = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(book),
        redirect: 'follow'
    };

    fetch("http://book.alitechbot.uz/api/books", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (typeof result === 'object') {
                window.Swal.fire({
                title: 'Kitob yuklandi',
                text: 'Siz taqdim qilgan kitob yaratildi',
                icon: 'success',
                showCancelButton: true,
                showCloseButton: true,
                timer: 3000
            });

            // fetchBooks()

            } else {
                Swal.fire({
                title: 'Hatolik',
                text: result,
                icon: 'error',
                showCancelButton: true,
                showCloseButton: true,
                timer: 5000
                })
            }
        })
        .catch(error => console.log('error', error));
}


// -------------------- Create Author ----------------


function createAuthor() {
    const bookForm = document.getElementById('new-author-form');
    const { lastName, firstName } = bookForm;
    const author = {
        firstName: firstName.value,
        lastName: lastName.value,
    };
    console.log(author);

    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(author),
    };

    fetch("http://book.alitechbot.uz/api/authors", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


// ---------------- Checking Token -------------------


function checkTokenExist(redirectToSignUpPage = false) {
    var authBlock = document.getElementById('auth_block')
    console.log('Loading auth checker')
    if (window.localStorage.token) {
        if (!authBlock.classList.contains('logged-in')) {
            authBlock.classList.add('logged-in');
            authBlock.innerHTML = `
                <button class="btn btn-outline-primary" onclick="addBookForm()">Add Book</button>
                <button class="btn btn-outline-success" onclick="addAuthorForm()">Add Author</button>
                `;
        }
  
    } else {
        if (redirectToSignUpPage) {
            window.location.pathname = '/sign-up.html'
        }
        authBlock.classList.remove('logged-in');
        authBlock.innerHTML = `
            <button class="btn btn-outline-primary" onclick="addLoginForm()">Sign In</button>
            <button class="btn btn-outline-success" onclick="addSignUpForm()">Sign Up</button>
        `
    }
};


// ---------------- Add Login Form -------------------


function addLoginForm() {
    const form = `
    <div class="modal" tabindex="-1" id="login-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add new book</h5>
                </div>
                <div class="modal-body">
                    <form id="login" onsubmit="login(event)">
                        <a href="./index.html" class="form__back">Back</a>
                        <h2 class="form__title">Sign Up</h2>
                        <input class="form__inp" type="text" name="email" id="form__email" placeholder="Your email">
                        <input class="form__inp" type="password" name="password" id="form__password" placeholder="Your password">
                        <button id="form__btn" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
  
    document.body.innerHTML += form;
    var myModal = new bootstrap.Modal(document.getElementById('login-modal'), {
        keyboard: false
    })
    myModal.show();
}


// ------------------- Add Sign Up Form -------------------


function addSignUpForm() {
    const form = `
    <div class="modal" tabindex="-1" id="signup-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add new book</h5>
                </div>
                <div class="modal-body">
                    <form id="sign-up" onsubmit="signUp(event)">
                        <a href="./index.html" class="form__back">Back</a>
                        <h2 class="form__title">Sign Up</h2>
                        <input required class="form__inp" type="text" name="firstName" id="form__fname" placeholder="First Name">
                        <input required class="form__inp" type="text" name="lastName" id="form__lname" placeholder="Last Name">
                        <input required class="form__inp" type="text" name="email" id="form__email" placeholder="Your email">
                        <input required class="form__inp" type="text" name="phone" id="form__phone" placeholder="Your email">
                        <input required class="form__inp" type="password" name="password" id="form__password" placeholder="Your password">
                        <button id="form__btn" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
  
    document.body.innerHTML += form;
    var myModal = new bootstrap.Modal(document.getElementById('signup-modal'), {
        keyboard: false
    })
    myModal.show();
}


// -------------------- Signed Up ------------------


function signUp(event) {
    event.preventDefault();
  
    const bookForm = document.getElementById('sign-up');
    const { email, password, phone, firstName, lastName } = bookForm;
    const user = {
        email: email.value,
        password: password.value,
        phone: phone.value,
        firstName: firstName.value,
        lastName: lastName.value
    };
    console.log(user);
  
    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    };
  
    fetch("http://book.alitechbot.uz/api/sign-up", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.success) {
            Swal.fire({
                title: 'Logged in',
                text: 'Your are logged in successfully',
                icon: 'success',
                showCancelButton: true,
                showCloseButton: true,
                timer: 3000
            });
    
            localStorage.setItem('token', result.token);
            window.location.pathname = '/index.html'
    
            } else {
            Swal.fire({
                title: 'Hatolik',
                text: JSON.stringify(result.msg),
                icon: 'error',
                showCancelButton: true,
                showCloseButton: true,
                timer: 5000
            })
            }
        })
        .catch(error => console.log('error', error));
}


// ------------------- Signed In -------------------


function login(event) {
    event.preventDefault();
  
    const bookForm = document.getElementById('login');
    const { email, password } = bookForm;
    const user = {
        email: email.value,
        password: password.value,
    };
    console.log(user);
  
    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    };
  
    fetch("http://book.alitechbot.uz/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                Swal.fire({
                    title: 'Logged in',
                    text: 'Your are logged in successfully',
                    icon: 'success',
                    showCancelButton: true,
                    showCloseButton: true,
                    timer: 3000
                });
    
                localStorage.setItem('token', result.token);
    
            } else {
    
            }
            })
        .catch(error => {
            Swal.fire({
            title: 'Hatolik',
            text: error.message,
            icon: 'error',
            showCancelButton: true,
            showCloseButton: true,
            timer: 5000
            })
        });
}