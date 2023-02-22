$('#hero-banner').click(function() {
    $('#attributionFooter').addClass('d-none');
    $('#hero-banner').slideUp("slow", function() {

        $('#mainContainer').removeClass('d-none');
        $('#mainFooter').removeClass('d-none');
        $('#hero-banner').removeClass('d-flex');

    });
});

$('#nav-contact-tab').click(function() {
    $('#mainFooter').addClass('d-none');
    $('#hero-banner').slideDown("slow", function() {

        $('#mainContainer').addClass('d-none');
        
        
        $('#hero-banner').addClass('d-flex');
        $('#attributionFooter').removeClass('d-none');

    });
});

$('.work').hover(function() {
    $(this).children('.cover').addClass('d-none');
    $(this).children('.info').removeClass('d-none');
}, function() {
    $(this).children('.cover').removeClass('d-none');
    $(this).children('.info').addClass('d-none');
});