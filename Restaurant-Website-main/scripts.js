$(document).ready(function() {
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    }
);

});
$(document).ready(function () {
    $('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {
        var index = $(e.relatedTarget).index();
        $('.carousel-caption-text').removeClass('active');
        $('.carousel-caption-text').eq(index).addClass('active');
    });
});