
  $(function(){
    $('#navTwo').hover(
    function(){
      $('#navTwo .submenu').stop(true, true);
      $('#navTwo .submenu').slideDown(500);
    },
    function(){
      $('#navTwo .submenu').slideUp('fast');
    });
    $('#sub_naw_Two').hover(
    function(){
      $('#sub_naw_Two .subsubmenu').stop(true, true);
      $('#sub_naw_Two .subsubmenu').slideDown(1000);
    },
    function(){
      $('.subsubmenu').slideUp('fast');
    });

    $('#navOne').hover(
    function(){
      $('#navOne .submenu').stop(true, true);
      $('#navOne .submenu').slideDown(500);
    },
    function(){
      $('#navOne .submenu').slideUp('fast');
    });
    $('#sub_naw_one').hover(
    function(){
      $('#sub_naw_one .subsubmenu').stop(true, true);
      $('#sub_naw_one .subsubmenu').slideDown(1000);
    },
    function(){
      $('.subsubmenu').slideUp('fast');
    });

    $('#navThree').hover(
    function(){
      $('#navThree .submenu').stop(true, true);
      $('#navThree .submenu').slideDown(500);
    },
    function(){
      $('#navThree .submenu').slideUp(500);
    });


    $('.submenu__li').hover(
    function(){
      $(this).css('background-color', '#000');
    },
    function(){
      $(this).css('background-color', '#400136');
    });
    $('.subsubmenu__li').hover(
    function(){
      $(this).css('background-color', '#fff');
    },
    function(){
      $(this).css('background-color', '#02fdfd');
    });
  })
