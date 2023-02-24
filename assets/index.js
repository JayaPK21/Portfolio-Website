const headInfo = "Hi, I am Jayashree Karthikeyan";
const userInfoText = "Click to enter website...";

let letterIndex = 0;
let setInfoText = '';
let letterInterval = setInterval(() => {
    setInfoText = setInfoText.concat(headInfo[letterIndex]);
    $('.display-4').text(setInfoText);
    
    letterIndex ++;

    if(letterIndex === headInfo.length) {
        console.log("value of letterInterval: "+letterInterval.valueOf());
        clearInterval(letterInterval);
        console.log("value of letterInterval: "+letterInterval.valueOf());
        $('#contentHeroBanner').children('p').removeClass('d-none');

        letterIndex = 0;
        setInfoText = '';
        letterInterval = setInterval(() => {
            setInfoText = setInfoText.concat(userInfoText[letterIndex]);
            $('#userInfo').text(setInfoText);
            letterIndex ++;

            if(letterIndex === userInfoText.length) {
                clearInterval(letterInterval);
            }
            
        }, 100);
    }

}, 100);

$('#hero-banner').click(function() {
    $('#attributionFooter').addClass('d-none');
    $('#hero-banner').slideUp("slow", function() {

        $('#mainContainer').removeClass('d-none');
        $('#mainFooter').removeClass('d-none');
        $('#hero-banner').removeClass('d-flex');
        $('#mainNavBar').removeClass('d-none');

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
        $('#mainNavBar').addClass('d-none');

    });
});

$('.work').hover(function() {
    $(this).children('.cover').addClass('d-none');
    $(this).children('.info').removeClass('d-none');
}, function() {
    $(this).children('.cover').removeClass('d-none');
    $(this).children('.info').addClass('d-none');
});