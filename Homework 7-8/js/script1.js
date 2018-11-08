$(function() {
  var $tabOne = $('.tabOne');
  var $tabTwo = $('.tabTwo');
  var $tabThree = $('.tabThree');

  $tabOne.on('click', function() {
    $('.textOne').addClass('showBlock');
    $('.textOne').siblings("p").removeClass("showBlock");
    $(this).addClass('tabRed');
    $(this).siblings("li").removeClass("tabRed");
  });


  $tabTwo.on('click', function() {
    $('.textTwo').addClass('showBlock');
    $('.textTwo').siblings("p").removeClass("showBlock");
    $(this).addClass('tabRed');
    $(this).siblings("li").removeClass("tabRed");
  });

  $tabThree.on('click', function() {
    $('.textThree').addClass('showBlock');
    $('.textThree').siblings("p").removeClass("showBlock");
    $(this).addClass('tabRed');
    $(this).siblings("li").removeClass("tabRed");
  });

});
