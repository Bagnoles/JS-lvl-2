"use strict";

let nameInput = document.getElementById('name');
let phoneInput = document.getElementById('phone');
let mailInput = document.getElementById('mail');
let commentInput = document.getElementById('comment');
let button = document.getElementById('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (!/^[a-zа-яё]+$/iu.test(nameInput.value)) {
        nameInput.classList.add('warning');
        document.querySelector('.name-error').innerHTML = "Имя должно содержать только буквы."
    }
    if (!/^\+7\(\d{3}\)\d{3}\-\d{4}$/.test(phoneInput.value)) {
        phoneInput.classList.add('warning');
        document.querySelector('.phone-error').innerHTML = "Телефон должен быть в формате +7(000)000-0000."
    }
    if (!/^[a-zа-я0-9._-]+@[a-z0-9-_]+\.[a-z0-9-_]{2,4}/iu.test(mailInput.value)) {
        mailInput.classList.add('warning');
        document.querySelector('.mail-error').innerHTML = "Некорректный e-mail."
    }
    if (commentInput.value == "") {
        commentInput.classList.add('warning');
        document.querySelector('.text-error').innerHTML = "Нужно написать комментарий."
    }
});