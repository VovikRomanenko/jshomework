'use strict;'
$(function() {
  $('#request').keypress(function(e) {
    if (e.which == 13) {
      Search();
    }
  });
  $('.btn').on('click', function() {
    Search();
  });

  function Search() {
    $('.example').remove();
    var API_KEY = '9971566-af97d307079f8cc979032fe5b';
    var quest = $('#request').val();
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(quest);
    $.getJSON(URL, function(data) {
      if (parseInt(data.totalHits) > 0) {

        $.each(data.hits, function(i, hit) {
          var b = hit.previewURL;
          var a = document.createElement('img');
          document.body.appendChild(a);
          a.classList.add('example');
          a.style.marginLeft = '20px';
          a.style.marginTop = '20px';
          a.src = b;
        });


      } else {
        var a = document.createElement('h1');
        document.body.appendChild(a);
        a.classList.add('example');
        a.innerHTML = 'Картинок за данный запросом не найдено';
      }
    });
  };
});
