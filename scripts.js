$(document).ready(function() {
    // Fshij preloader-in kur ngarkohet faqja
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    // Kontrollo slidimin e carousel-it dhe ndryshimin e caption-it
    $('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {
        var index = $(e.relatedTarget).index();
        $('.carousel-caption-text').removeClass('active');
        $('.carousel-caption-text').eq(index).addClass('active');
    });

    // Inicializo Slider-in me Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
