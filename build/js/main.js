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
    swipe: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                swipe: true,
            }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            swipe: true,
          }
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              swipe: true,
            }
          }
    ]
});

$('.item .sliders .sliders__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.item .sliders .sliders__nav',
    swipe: false
});
$('.item .sliders .sliders__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.item .sliders .sliders__main',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    swipe: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 'auto',
                swipe: true,
                vertical: false,
                centerMode: true,
            }
        }
    ]
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

    if ($('.modal[data-modal="' + $(e.currentTarget).attr('data-modal') + '"]').hasClass('modal-view')) {
        $('.modal[data-modal="' + $(e.currentTarget).attr('data-modal') + '"] .sliders .sliders__main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.modal[data-modal="' + $(e.currentTarget).attr('data-modal') + '"] .sliders .sliders__nav',
            swipe: false
        });
        $('.modal[data-modal="' + $(e.currentTarget).attr('data-modal') + '"] .sliders .sliders__nav').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.modal[data-modal="' + $(e.currentTarget).attr('data-modal') + '"] .sliders .sliders__main',
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,
            vertical: true,
            swipe: false
        });
    }
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

$('body').on('click', '.modal__controls button', (e) => {
    e.preventDefault();
    $(e.currentTarget).addClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-shop"></use></svg><span>Товар в корзине</span>');
});

$('body').on('change', '.modal__controls select', (e) => {
    $('.modal__controls .count').text($(e.currentTarget).val());
});

$('body').on('click', '.view .modal__controls button', (e) => {
    $(e.currentTarget).addClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-shop"></use></svg><span>Товар в корзине</span>');
    $('.add-cart').addClass('active');

    setTimeout(() => {
        $('.add-cart').removeClass('active');
    }, 2500);
});

$('body').on('click', '.enter__nav a:not(.active)', (e) => {
    $('.enter__nav a').removeClass('active');
    $('.enter__tab').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('.enter__tab[data-tab="' + $(e.currentTarget).attr('data-tab') + '"]').addClass('active');
});

$('body').on('keyup', '.reset input', (e) => {
    if ($(e.currentTarget).val() !== '') {
        $('.reset button').addClass('active');
    }
});

$('body').on('click', '.filters-btn', (e) => {
    console.log('object')
    $('.sidebar').slideToggle(300);
});