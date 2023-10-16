//Function to update ARIA attributes
const updateAriaAttributes = () => {
    const width = window.innerWidth;
    const header_menu = document.getElementsByClassName("flex-header-menu")[0];
    const footer_menu = document.getElementsByClassName("flex-footer-menu")[0];
    const side_menu = document.getElementsByClassName("flex-side-menu")[0];

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
}

// run this code when the page first loads
updateAriaAttributes();
window.addEventListener("resize", updateAriaAttributes);


document.addEventListener("DOMContentLoaded", function() {
    // JavaScript code to show/hide the language dropdown
    const selectedLanguage = document.querySelector(".selected-language");
    const languageList = document.querySelector(".language-list");

    selectedLanguage.addEventListener("click", function() {
        languageList.style.display = (languageList.style.display === "block") ? "none" : "block";
    });

    // JavaScript code to select a language and update the displayed language
    const languageItems = document.querySelectorAll(".language-list li");
    languageItems.forEach(function(item) {
        item.addEventListener("click", function() {
            selectedLanguage.textContent = item.textContent;
            languageList.style.display = "none";
        });
    });
});

// Redirect Homepage
$('#wwflogo').click(() => window.parent.location.href = '../homepage.html');



