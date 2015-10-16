jQuery(document).ready(function($) {
    
// var width = $('.e-section-content').width() / 5;
// $('.e-project-tile').css('height', width);

$('.js-trigger-menu').click(function() {
    var menu = $('#main-menu');
    var overlay = $('.b-overlay');

    if (menu.hasClass('m-active')) {
        menu.removeClass('m-active');
        overlay.removeClass('m-active');
    } else {
        menu.addClass('m-active');
        overlay.addClass('m-active');
    }
});

$('.b-overlay').click(function() {
    $('#main-menu').removeClass('m-active');
    $('.b-overlay').removeClass('m-active');
});















});