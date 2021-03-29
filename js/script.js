'use strict'

//? Блок фильтров (кнопка фильтр)

const iconFilter = document.querySelector('.product__filter');
const bodyFilter = document.querySelector('.filter');
const maskFilter = document.querySelector('.filter__mask');

if (iconFilter) {
    iconFilter.addEventListener("click", function(e) {
        bodyFilter.classList.toggle('_active');
        maskFilter.classList.add('_active');
    });
}
maskFilter.addEventListener("click", function(e) {
    bodyFilter.classList.remove('_active');
    maskFilter.classList.remove('_active');
});

//? Меню бургер + спойлеры (выпадающие подменю в блоке фильтров)

let els = document.querySelectorAll('._spoiler');

[].forEach.call(els, function(el, i, els) {
    el.addEventListener('click', function() {
        [].forEach.call(els, function(el) {
            if (el !== this) {
                el.parentElement.classList.remove("_active");
            } else {
                el.parentElement.classList.toggle("_active");
            }
        }, this);
    });
});