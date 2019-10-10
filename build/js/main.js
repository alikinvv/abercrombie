$('body').on('click', '.header__controls form svg', (e) => {
    console.log('object')
    $(e.currentTarget).parent().addClass('active');
    $('.header__controls input').focus();
});

$('body').on('blur', '.header__controls input', (e) => {
    $(e.currentTarget).parent().removeClass('active');
});

$('.products__list.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: false
});

$('.sliders .sliders__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.sliders .sliders__nav',
    swipe: false
});
$('.sliders .sliders__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.sliders .sliders__main',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    swipe: false
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

$('body').on('click', 'a[data-modal], div[data-modal]:not(.modal)', (e) => {
    $('.modal').removeClass('active');
    $('.modals').addClass('active');
    $('.modal[data-modal="' + $(e.currentTarget).attr('data-modal') + '"]').addClass('active');
});

$('body').on('click', '.modal__close', () => {
    $('.modals').removeClass('active');
    $('.modal').removeClass('active');
});

$('body').on('click', '.modal[data-modal="success"] .btn', () => {
    $('.modals').removeClass('active');
    $('.modal').removeClass('active');
});

$('body').on('click', '.modals', (e) => {
    if ($(e.target).is('.modals')) {
        $('.modals').removeClass('active');
        $('.modal').removeClass('active');
    }
});

$('body').on('click', '.view__images div', (e) => {
    $('.view__images div').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '.view__sizes-list div', (e) => {
    $(e.currentTarget).toggleClass('active');
});
