var main = function() {
    $('.nav li').click(function() {
        var category = $(this).attr('class');
        $('.nav li').removeClass('active');
        $(this).addClass('active');
        if (category === 'nav-manhattan') {
            $('.thumbnail').removeClass('selected');
            $('.manhattan').addClass('selected');
        } else if (category === 'nav-brooklyn') {
            $('.thumbnail').removeClass('selected');
            $('.brooklyn').addClass('selected');
          console.log("mobile");
        } else if (category === 'nav-queens') {
            $('.thumbnail').removeClass('selected');
            $('.queens').addClass('selected');
        } else if (category === 'nav-staten') {
            $('.thumbnail').removeClass('selected');
            $('.staten').addClass('selected');
        } else if (category === 'nav-all') {
            $('.thumbnail').removeClass('selected');
        }
    });
};
$(document).ready(main);// JavaScript File