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

//
// //Function to update ARIA attributes
// const updateAriaAttributes = () => {
//     const width = window.innerWidth;
//     const header_menu = document.getElementsByClassName("flex-header-menu")[0];
//     const footer_menu = document.getElementsByClassName("flex-footer-menu")[0];
//     const side_menu = document.getElementsByClassName("flex-side-menu")[0];
//
//     if (width <= 600) {
//         header_menu.setAttribute("aria-hidden", "true");
//         side_menu.setAttribute("aria-hidden", "true");
//         footer_menu.setAttribute("aria-hidden", "false");
//     } else if (width <= 1194) {
//         header_menu.setAttribute("aria-hidden", "true");
//         side_menu.setAttribute("aria-hidden", "false");
//         footer_menu.setAttribute("aria-hidden", "true");
//     } else {
//         header_menu.setAttribute("aria-hidden", "false");
//         side_menu.setAttribute("aria-hidden", "true");
//         footer_menu.setAttribute("aria-hidden", "false");
//     }
// }
//
// // run this code when the page first loads
// updateAriaAttributes();
// window.addEventListener("resize", updateAriaAttributes);
//
//
// document.addEventListener("DOMContentLoaded", function () {
//     // JavaScript code to show/hide the language dropdown
//     const selectedLanguage = document.querySelector(".selected-language");
//     const languageList = document.querySelector(".language-list");
//
//     selectedLanguage.addEventListener("click", function () {
//         languageList.style.display = (languageList.style.display === "block") ? "none" : "block";
//     });
//
//     // JavaScript code to select a language and update the displayed language
//     const languageItems = document.querySelectorAll(".language-list li");
//     languageItems.forEach(function (item) {
//         item.addEventListener("click", function () {
//             selectedLanguage.textContent = item.textContent;
//             languageList.style.display = "none";
//         });
//     });
// });




