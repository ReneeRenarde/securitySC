
//  Event listener for self quiz selection
 $(document).on("click", ".radio-inline", function () {
    var userSelection = $(this).attr('value');
    console.log(userSelection);
 });


