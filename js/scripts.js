//$(document).ready(function() {
  //$("form#insurance").submit(function(event) {
    //const age = parseInt($("input#age").val());
    //const gender = $("select#gender").val();

    //const quote = (100 - age) * 3;

    //$("#rate").text(quote);
    //$("#quote").show();

    //event.preventDefault();
  //});
//});

$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    let quote = (100 - age) * 3;
    if (gender === 'male' && age < 26) {
      quote += 50;
    }

    $("#rate").text(quote);
    $("#quote").show()
  } else {
    alert('Please enter your age.');
  }
    event.preventDefault();
  });
});