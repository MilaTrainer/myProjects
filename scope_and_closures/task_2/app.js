'use strict';
const sectionFirst = document.querySelector('.hero');

// const btnForPopup = sectionFirst.querySelector('.btn-for-popup');

const modalWindow = document.querySelector('.popup');
// const btnInModalWindow = modalWindow.querySelector('.btn-in-popup');

// window.addEventListener('DOMContentLoaded', ()=>{
    // пишем тут весь JS}
// - на весь дом вешаем событие

    window.addEventListener('click', (e) => {
        const clickElement = e.target;
        // console.log(`hi`);
        /* 1 ВАРИАНТ
      if (clickElement.matches('.btn-for-popup')) {
            modalWindow.style.opacity = '1';
            modalWindow.style.visibility = 'visible';
              }
          
              if (clickElement.matches('.btn-in-popup')) {
                  console.log(`hi`);
                  modalWindow.style.opacity = '0';
                  modalWindow.style.visibility = 'hidden';
              }**/


        // 2 ВАРИАНТ, добавление класса
        // если у родителя элемента есть этот клас?
        if (clickElement.closest('.btn-for-popup')) {
            modalWindow.classList.add('open')//добавить класс к DOM-элементу
        }

        if (clickElement.closest('.btn-in-popup') || clickElement.closest('.popup')) {
            modalWindow.classList.remove('open')// удалить класс из DOM-элемента
        }
    }
    )