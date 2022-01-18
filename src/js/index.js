import '@popperjs/core';
import 'bootstrap';
import 'slick-slider';
import './ssm';
import 'image-compare-viewer';
import ImageCompare from 'image-compare-viewer';

const body = document.getElementById('body');
if (body) {
    if (window.innerWidth > 1023) {
        // Код с fullpage
    }
    $('.slider-reviews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        autoplay: true,
        arrows: false,
        responsive: [{
            breakpoint: 1029,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    let $win = $(window);
    $(document).on('click', '.pre-toform', function(e) {
        if ($win.width() >= 768) {
            e.preventDefault();
            fullpage_api.moveTo('page9', 1);
        } else {
            $('html, body').animate({
                scrollTop: $('form').offset().top - 300
            }, 1000);
            return false;
        }
    });
    let items = document.querySelectorAll('[data-item]');
    let buttons = document.querySelectorAll('.switch');
    buttons.forEach(function(button) {
        button.addEventListener('click', () => {
            buttons.forEach(function(button) {
                button.querySelector('span').innerHTML = '+';
            });
            let number = button.getAttribute('data-button');
            items.forEach(function(item) {
                if (item.getAttribute('data-item') == number) {
                    item.style.display = 'block';
                    button.querySelector('span').innerHTML = '-';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    const viewers = document.querySelectorAll('.image-compare');
    viewers.forEach((element) => {
        let view = new ImageCompare(element).mount();
    });

    let links = document.querySelectorAll('.link-block');
    let box = document.querySelector('.order-block');
    links.forEach((link) => {
        link.addEventListener('click', () => {
            box.scrollIntoView({ behavior: 'smooth' });
        });
    });
}