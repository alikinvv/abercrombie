$('body').on('click', '.header__controls form svg', (e) => {
    console.log('object')
    $(e.currentTarget).parent().addClass('active');
    $('.header__controls input').focus();
});

$('body').on('blur', '.header__controls input', (e) => {
    $(e.currentTarget).parent().removeClass('active');
});

var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(window).on('scroll', () => {
    if ( $('.scrolltop').length > 0) {
        if ($(window).scrollTop() >= $(window).height() && $(window).width() >= 1280) {
            $('.scrolltop').addClass('show');
        } else {
            $('.scrolltop').removeClass('show');
        }
    }
});

$('body').on('click', '.scrolltop', () => {
    $('html, body').animate({scrollTop:0}, 'slow');
});

$('body').on('click', '.toggle', (e) => {
    if ($(e.currentTarget).hasClass('active')) {
        $(e.currentTarget).removeClass('active').next().slideUp(200);
    } else {
        $(e.currentTarget).addClass('active').next().slideDown(200);
    }
});