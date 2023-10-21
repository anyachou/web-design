$(document).ready(() => {
  // Init
  $('#friend-zone li').click(function () {
    localStorage.setItem('friend-zone', $(this).text());
    window.parent.location.href = '../find_friends.html';
  });

  $('#community li').click(function () {
    localStorage.setItem('community', $(this).text());
    window.parent.location.href = '../community.html';
  });

  $('#information-contact-us').click(function () {
      window.parent.location.href = '../contact_us.html';
  });

  $('li').hover(
      function () {
        $(this).css('color', 'yellow');
      },
      function () {
        $(this).css('color', '#f2f2f2');
      }
  );
});