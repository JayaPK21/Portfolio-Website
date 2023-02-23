$('#hero-banner').click(function() {
    $('#attributionFooter').addClass('d-none');
    $('#hero-banner').slideUp("slow", function() {

        $('#mainContainer').removeClass('d-none');
        $('#mainFooter').removeClass('d-none');
        $('#hero-banner').removeClass('d-flex');

    });
});

$('#nav-home-tab').click(function() {
    $('#mainFooter').addClass('d-none');
    $('#hero-banner').slideDown("slow", function() {

        $('#mainContainer').addClass('d-none');
        
        
        $('#hero-banner').addClass('d-flex');
        $('#attributionFooter').removeClass('d-none');

        $('#nav-home-tab').attr('aria-selected', 'false');
        $('#nav-home-tab').removeClass('active');
        $('#nav-home').removeClass('show active');
        $('#nav-work-tab').attr('aria-selected', 'true');
        $('#nav-work-tab').addClass('active');
        $('#nav-work').addClass('show active');

    });
});

$('.work').hover(function() {
    $(this).children('.cover').addClass('d-none');
    $(this).children('.info').removeClass('d-none');
}, function() {
    $(this).children('.cover').removeClass('d-none');
    $(this).children('.info').addClass('d-none');
});