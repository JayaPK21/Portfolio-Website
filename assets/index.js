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

$('#work2').hover(function() {
    $('#coverWork2').addClass('d-none');
    $('#infoWork2').removeClass('d-none');
}, function() {
    $('#coverWork2').removeClass('d-none');
    $('#infoWork2').addClass('d-none');
});