$('#hero-banner').click(function() {
    $('#attributionFooter').addClass('d-none');
    $('#hero-banner').slideUp("slow", function() {
        $('#mainContainer').removeClass('d-none');
        //$('#hero-banner').addClass('d-none');
        $('#hero-banner').removeClass('d-flex');
    });
});

$('#nav-contact-tab').click(function() {
    $('#hero-banner').slideDown("slow", function() {
        // $('#mainContainer').removeClass('d-none');
        // $('#hero-banner').removeClass('d-none');
        $('#hero-banner').addClass('d-flex');
        $('#attributionFooter').removeClass('d-none');
    });
})