$(function() {

  $('.inp1').hover(
    function() {
      $('.info1').addClass('inform');
    },
    function() {
      $('.info1').removeClass('inform');
    }
  );

  $('.inp2').hover(
    function() {
      $('.info2').addClass('inform');
    },
    function() {
      $('.info2').removeClass('inform');
    }
  );

  $('.inp3').hover(
    function() {
      $('.info3').addClass('inform');
    },
    function() {
      $('.info3').removeClass('inform');
    }
  );

  $('.btn').on('click', function() {
    $('.info').toggleClass('inform');
  })

});
