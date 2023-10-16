$(document).ready(function () {

    $('#wwflogo').click(() => window.location.href = './homepage.html');

    let local_lang = localStorage.getItem('lang');
    if(local_lang === null) local_lang = 'EN';
    const current_lang = $('#language-current');
    let local_lang_img = $('#language-list-item-image-en');
    let local_lang_label = $('#language-list-item-label-en');

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

    current_lang.appendChild(local_lang_img);
    current_lang.appendChild(local_lang_label);


    const current_list = $('#language-list');
    current_lang.click(() => {
        current_list.css('display', 'block');
    });

    $('#language-list-item-en').click(() => {
        current_lang.removeChild(local_lang_img);
        current_lang.removeChild(local_lang_label);
        current_list.css('display', 'none');
        localStorage.setItem('lang', 'EN');
    });
    $('#language-list-item-jp').click(() => {
        current_lang.removeChild(local_lang_img);
        current_lang.removeChild(local_lang_label);
        current_list.css('display', 'none');
        localStorage.setItem('lang', 'JP');
    });
    $('#language-list-item-ar').click(() => {
        current_lang.removeChild(local_lang_img);
        current_lang.removeChild(local_lang_label);
        current_list.css('display', 'none');
        localStorage.setItem('lang', 'AR');
    });
    $('#language-list-item-tw').click(() => {
        current_lang.removeChild(local_lang_img);
        current_lang.removeChild(local_lang_label);
        current_list.css('display', 'none');
        localStorage.setItem('lang', 'TW');
    });


    const updateAriaAttribute = () => {
        const width = $(window).width();
        const header_menu = $('#flex-header-menu')
        const footer_menu = $('#flex-footer-menu')
        const side_menu = $('#flex-side-menu')

        if (width <= 600) {
            header_menu.setAttribute("aria-hidden", "true");
            side_menu.setAttribute("aria-hidden", "true");
            footer_menu.setAttribute("aria-hidden", "false");
        } else if (width <= 1194) {
            header_menu.setAttribute("aria-hidden", "true");
            side_menu.setAttribute("aria-hidden", "false");
            footer_menu.setAttribute("aria-hidden", "true");
        } else {
            header_menu.setAttribute("aria-hidden", "false");
            side_menu.setAttribute("aria-hidden", "true");
            footer_menu.setAttribute("aria-hidden", "false");
        }
    };

    $(window).resize(updateAriaAttribute);
    updateAriaAttribute();

    // $('#wwflogo').click(function(){
    //     window.location.href = '../homepage.html';
    // });

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




