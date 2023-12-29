const container = document.getElementById('conteiner');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const formEL = document.getElementById('registrationForm');
                formEL.addEventListener('submit', event => {
                    event.preventDefault();

                    const formData = new FormData(formEL);
                    const data = Object.fromEntries(formData);

                    fetch('http://localhost:8080/user/create', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }).then(res => res.json())
                      .then(data => console.log(data))
                      .catch(error => console.log(error));
                });

const formE = document.getElementById('loginform');
                formE.addEventListener('submit', event => {
                    event.preventDefault();

                    const formData = new FormData(formE);
                    const data = Object.fromEntries(formData);

                    fetch('http://localhost:8080/user/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }).then(res => res.json())
                      .then(data => console.log(data))
                      .catch(error => console.log(error));
                });
