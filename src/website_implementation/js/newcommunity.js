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


// fetch api in Events 
$(document).ready(function() {
    // api setting
    const baseURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/";
    const my_website_code = 'Pete123';
    const queryParams = {
        website_code: my_website_code,
    };
    const queryString = new URLSearchParams(queryParams).toString();
    const urlWithParams = baseURL + "?" + queryString;
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    
    $('#board-activity-grid').click(function() {
        // reset post area
        $('#posts-info-grid').empty();

        // get info
        fetch(urlWithParams, requestOptions)
            .then(response => response.json())
            .then(data => {
                // create a new post
                $.each(data, function(index, event) {
                    const postElement = `
                        <div class="post-info">
                            <p class="post-info-text">[${event.event_type}] ${event.name}</p>
                            <img src="${event.photo}" alt="${event.name}" class="post-info-image"/>
                            <div class="post-info-functional">
                                <!-- button style -->
                                <div class="post-info-functional-option">
                                    <img src="images/icon/up.png" alt="like" class="post-info-functional-option-icon"/>
                                    <span>Like</span>
                                </div>
                                <div class="post-info-functional-option">
                                    <img src="images/icon/comment.png" alt="comment" class="post-info-functional-option-icon"/>
                                    <span>Comment</span>
                                </div>
                                <div class="post-info-functional-option">
                                    <img src="images/icon/send.png" alt="share" class="post-info-functional-option-icon"/>
                                    <span>Share</span>
                                </div>
                            </div>
                        </div>`;
                    $('#posts-info-grid').append(postElement);
                });
            });
    });
});

// fetch api in Search Bar
$(document).ready(function() {
    const baseURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/";
    const my_website_code = 'Pete123';
    const queryParams = {
        website_code: my_website_code,
    };
    const queryString = new URLSearchParams(queryParams).toString();
    const urlWithParams = baseURL + "?" + queryString;
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    function fetchAndDisplayEvents() {
        // reset post area
        $('#posts-info-grid').empty();

        // get info
        fetch(urlWithParams, requestOptions)
            .then(response => response.json())
            .then(data => {
                // create a new post
                $.each(data, function(index, event) {
                    const postElement = `
                        <div class="post-info">
                            <p class="post-info-text">[${event.event_type}] ${event.name}</p>
                            <img src="${event.photo}" alt="${event.name}" class="post-info-image"/>
                            <div class="post-info-functional">
                                <!-- 這裡你可以根據需要調整功能按鈕的內容 -->
                                <div class="post-info-functional-option">
                                    <img src="images/icon/up.png" alt="like" class="post-info-functional-option-icon"/>
                                    <span>Like</span>
                                </div>
                                <div class="post-info-functional-option">
                                    <img src="images/icon/comment.png" alt="comment" class="post-info-functional-option-icon"/>
                                    <span>Comment</span>
                                </div>
                                <div class="post-info-functional-option">
                                    <img src="images/icon/send.png" alt="share" class="post-info-functional-option-icon"/>
                                    <span>Share</span>
                                </div>
                            </div>
                        </div>`;
                    $('#posts-info-grid').append(postElement);
                });
            });
    }

    // when users click icon, fetch api
    $('.search-icon').click(fetchAndDisplayEvents);
});


// implement side bar buttons
$(document).ready(function(){
    const handleCommunityTopic = (topic) => {
     // Hide all posts
        $('.post-info').hide();

    // Show only the posts with the matching topic
        $('.post-info[data-topic="'+ topic +'"]').show();
    };

    // users click on homempage, then it shows the matching post of the topic
    const local_topic = localStorage.getItem('data-topic');
    if(local_topic !== null){
        //reset original page
        $('.board-grid-option').css('background-color', 'white');
        //show the color when users clicked
        $('.board-grid-option[data-topic="'+ local_topic +'"]').css('background-color', 'grey');
        handleCommunityTopic(local_topic);
        //ensure hompage can link to this page
        localStorage.removeItem('data-topic');
    }

    $('.board-grid-option').on('click', function(){
        // Get the topic of the clicked sidebar item
        const topic = $(this).data('topic');
        $('.board-grid-option').css('background-color', 'white');
        $(this).css('background-color', 'grey');
        handleCommunityTopic(topic);
    });
});


