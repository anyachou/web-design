$(document).ready(() => {
  //Show all
  $('.post-info').css('display', 'block');

  //Click selector
  $('.board-grid-option').click(function () {
    const type = $(this).text();
    $('.post-type').each(function () {
      $(this).parent().css('display', 'block');
      if(type !== 'All' && $(this).val() !== type){
        $(this).parent().css('display', 'none');
      }
    });
  });
});