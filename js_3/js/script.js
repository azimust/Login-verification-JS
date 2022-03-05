"use strict";

let admin = prompt('Кто там?', '');
if(admin === 'Admin'){
    let password = prompt('Пароль?', '')
    if(password === 'qwerty'){
        alert('Здравствуйте!');
    } else if(password === '' || password === null){
        alert('Отменено');
    } else{
        alert('Неверный пароль!');
    }
} else if (admin === '' || admin === null){
    alert ('Отменено');
} else {
    alert('Неверный пароль!');
}
