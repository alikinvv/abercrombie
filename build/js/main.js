$('body').on('click', '.header__controls form svg', (e) => {
    console.log('object')
    $(e.currentTarget).parent().addClass('active');
    $('.header__controls input').focus();
});

$('body').on('blur', '.header__controls input', (e) => {
    $(e.currentTarget).parent().removeClass('active');
});