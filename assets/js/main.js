$(document).ready(function(){
    $('.mainNavBar ul .nav-item').click(function(){
        $('.mainNavBar ul .nav-item').removeClass('active');
        $(this).addClass('active');
    });
});
