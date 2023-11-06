$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src = "images/left-arrow-icon_gray.svg" width="20px" height="20px" alt = "" ></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src = "images/right-arrow-icon_gray.svg" width="20px" height="20px" alt = "" ></button>',
        // Допишем, что при ширине экрана 969px стрелки на слайдере пропадут
        responsive:[
            {
                breakpoint: 969,
                settings:{
                    arrows: false
                }
            }
        ]
    });

    $('.tab').on('click', function (event) {
        event.preventDefault();
// Модернизируем 11 строку, делаем деактивацию табов независимой в разных секциях-блоках
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });
// Делаем изменение иконки Избранное (будет менять цвет).
// При клике на иконку Избранное функция добавит иконке класс product-item__favorite--active,
// а при повторном клике на иконку этот класс уберется. Так работает toggleClass.
    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active');
    });
// Пишем слайдер для Сопутствующих товаров
    $('.product-slider').slick({
        // количество слайдов в окне слайдера
        slidesToShow: 4,
        // прокручивать по 1 слайду
        slidesToScroll: 1,
        // Добавляем стрелки к слайдеру, только вместо серых ставим черные
        prevArrow: '<button class="products__slider-btn products__slider-btnprev"><img src = "images/left-arrow-icon.svg" width="20px" height="20px" alt = "" ></button>',
        nextArrow: '<button class="products__slider-btn products__slider-btnnext"><img src = "images/right-arrow-icon.svg" width="20px" height="20px" alt = "" ></button>',
    });
    // Подключаем стайлер для боковой панели aside с классом .filter-style.
    $('.filter-style').styler();

// Для выпадающего дроп-даун меню в aside разворачивание за 200 ms
    $('.filter__item-drop, .filter__extend').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(200);
    });
// Для range-slider копируем из документации на сайте слайдера
    $('.js-range-slider').ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });
    // Актируем и деактивируем кнопки при клике
    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        // При клике на иконку grid товары из списка выстроятся в таблицу
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        // При клике на иконку line товары из таблицы выстроятся в список
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $('.rate-yo').rateYo({
        ratedFill: "#1C62CD",
        spacing: "7px",
        normalFill: "#C4C4C4"
    });

    $('.menu__btn').on('click', function () {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
    });

});