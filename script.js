$('button').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.me').offset().top
    }, 1000)
})