$(document).ready(function() {
    $(window).scroll(function(event) {
        var s = $(this).scrollTop(); // пиксели, которые прокручены в окне браузера
        var w = $(this).outerWidth(); // ширина окна
        var h = $('.content').outerHeight(); // высота контентной части
        var h_b = $('.parallax').outerHeight(); // высота верхнего блока
        var p = s / h * 100; // процент прокрутки всей контентной части
        var p_b = s / h_b * 100; // процент прокрутки только верхней части

        var z_1 = 1 + (w / 100000 * p_b);
        $('.parallax__2').css('transform', 'scale(' + z_1 + ')');

        var z_2 = 1 + (w / 35000 * p);
        var z_3 = 50 - (w / 900 * p); // при увеличении увеличивается
        $('.parallax__3').css('transform', 'scale(' + z_2 + ') translate(-' + z_3 + '%, -' + z_3 + '%)');
    });
});