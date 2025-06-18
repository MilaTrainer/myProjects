/**
 * Задание 4 (дополнительно, по желанию)

Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик.

Образец - devby.io, или можно посмотреть здесь: https://ucarecdn.com/aeb69a87-...

Внутри открывающегося по клику на бургер блока сначала идет строка поиска, при клике в нее (фокусное состояние) фон всей строки, включая кнопку, меняется на белый.

Все нужные иконки скачать с сайта dev.by, из кода в инспекторе.

ПОДСКАЗКИ. Вы можете изначально сверстать открытое меню, при этом кнопка "крестик" будет расположена в точности на месте кнопки "бургер". Скрыть выпадающий блок с помощью CSS. При открытии меню кнопка "бургер" будет исчезать, при закрытии - появляться.
 */

'use strict';

const burgerButton = document.querySelector('.burger');
console.log(burgerButton);
burgerButton.addEventListener('click', () => {
    const modalWindow = document.querySelector('.modal_window');
    // console.log('modal window');
    modalWindow.classList.toggle('open');
    burgerButton.classList.toggle('active');
})