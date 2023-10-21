function change_language(){
    const local_lang = localStorage.getItem('lang');
    let local_lang_img;
    let local_lang_label;

    if (local_lang === null || local_lang === 'EN') {
        local_lang_img = $('#language-list-item-image-en');
        local_lang_label = $('#language-list-item-label-en');
    } else if (local_lang === 'TW') {
        local_lang_img = $('#language-list-item-image-tw');
        local_lang_label = $('#language-list-item-label-tw');
    } else if (local_lang === 'JP') {
        local_lang_img = $('#language-list-item-image-jp');
        local_lang_label = $('#language-list-item-label-jp');
    } else if (local_lang === 'AR') {
        local_lang_img = $('#language-list-item-image-ar');
        local_lang_label = $('#language-list-item-label-ar');
    }


    $('#language-current-image').attr('src', local_lang_img.attr("src"));
    $('#language-current-label').text(local_lang_label.text());
}

$(document).ready(function () {

    $('#wwflogo').click(() => window.location.href = './homepage.html');

    const $language_list = $('#language-list');
    $('#language-current').click(() => {
        $language_list.show();
    });

    $('#language-list-item-en').click(() => {
        $language_list.hide();
        localStorage.setItem('lang', 'EN');
        change_language();
    });
    $('#language-list-item-jp').click(() => {
        $language_list.hide();
        localStorage.setItem('lang', 'JP');
        change_language();
    });
    $('#language-list-item-ar').click(() => {
        $language_list.hide();
        localStorage.setItem('lang', 'AR');
        change_language();
    });
    $('#language-list-item-tw').click(() => {
        $language_list.hide();
        localStorage.setItem('lang', 'TW');
        change_language();
    });


    const updateAriaAttribute = () => {
        const width = $(window).width();
        const header_menu = $('#flex-header-menu')
        const footer_menu = $('#flex-footer-menu')
        const side_menu = $('#flex-side-menu')

        if (width <= 600) {
            header_menu.attr("aria-hidden", "true");
            side_menu.attr("aria-hidden", "true");
            footer_menu.attr("aria-hidden", "false");
        } else if (width <= 1194) {
            header_menu.attr("aria-hidden", "true");
            side_menu.attr("aria-hidden", "false");
            footer_menu.attr("aria-hidden", "true");
        } else {
            header_menu.attr("aria-hidden", "false");
            side_menu.attr("aria-hidden", "true");
            footer_menu.attr("aria-hidden", "false");
        }
    };

    $(window).resize(updateAriaAttribute);
    change_language();

    updateAriaAttribute();

});

//redirect to different topics post
$(document).ready(function() {
    $(".community-enter-info-detail").click(function() {
        var topic = $(this).data("topics"); // get data-topics 
        window.location.href = "./newcommunity.html" + topic;
    });
});

