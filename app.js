$(document).ready(function() {
  // Capture the value of the input form and the selected category.  Apply the value to the correct category on the list.
  $("#submit").click(function() {
    var value = $("input").val();
    var item = "<li class='added'>" + value + "<span class='x'>x</span></li>";
    function getCategory(){
      //alert($('.category option:selected').text());
      switch($('.category option:selected').text()){
        case "Bakery":
          $('.bakery').show();
          $('.bakery-list').append(item);
          break;

        case "Dairy":
          $('.dairy').show();
          $('.dairy-list').append(item);
          break;

        case "Household":
          $('.household').show();
          $('.household-list').append(item);
          break;

        case "Ingredients":
          $('.ingredients').show();
          $('.ingredients-list').append(item);
          break;

        case "Meats":
          $('.meats').show();
          $('.meats-list').append(item);
          break;

        case "Produce":
          $('.produce').show();
          $('.produce-list').append(item);
          break;

        case "Everything Else":
          $('.everything-else').show();
          $('.everything-else-list').append(item);
          break;
      }
    }
    getCategory();
    $('input').val('');
  });

  $('ul').on('click', '.added', function() {
    $(this).toggleClass('in-cart');
  });
  
  $('ul').on('click', '.x', function() {
    $(this).parent().remove();
  });

  $("#clear").click(function() {
    $('li').remove();
    $('.container').hide();
  });
});