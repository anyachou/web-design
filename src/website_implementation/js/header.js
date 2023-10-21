$(document).ready(() => {
    // Init Language
    const local_lang = localStorage.getItem('lang');
    if(local_lang === null || local_lang === 'EN'){
        $('#language-en').css('display', 'flex');
    }else if(local_lang === 'TW'){
        $('#language-tw').css('display', 'flex');
    }else if(local_lang === 'JP'){
        $('#language-jp').css('display', 'flex');
    }else if(local_lang === 'AR') {
        $('#language-ar').css('display', 'flex');
    }

    // Language Menu
    var lang_menu_display = 'none'
    $('.lang-menu').click(function(){
        console.log(lang_menu_display)
        if(lang_menu_display === 'none'){ //check if none then hide, if flex then show
            $('#language-en').css('display', 'none');
            $('#language-tw').css('display', 'none');
            $('#language-jp').css('display', 'none');
            $('#language-ar').css('display', 'none');
            $('.lang-menu').css('display', 'flex');
            lang_menu_display = 'flex'
        }else {
            $('.lang-menu').css('display', 'none');
            $(this).css('display', 'flex'); //click then show
            lang_menu_display = 'none'
            localStorage.setItem('lang', $(this).find('label').text()); //save in the local 
        }
    });

    // Redirect Find Friend
    $('#find-friend-label').click(() => window.parent.location.href = '../find_friends.html');
    // Redirect Community
    $('#community-label').click(() => window.parent.location.href = '../newcommunity.html');
    // Redirect Homepage
    $('#wwflogo').click(() => window.parent.location.href = '../homepage.html');
});