var main = function() {
    
    $('#contact_comments').keyup(function() {
        var postLength = $(this).val().length;
        var charsLeft = 140 - postLength;
        $('.counter').text(charsLeft);
    });
       
  };

$(document).ready(main);