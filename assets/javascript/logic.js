
var total = 0;

//  Event listener for self quiz selection
$(document).on("click", ".radio-inline", function () {
    var userSelection = parseInt($(this).attr('value'));
    console.log(userSelection);

    total = total + userSelection;
    console.log(total)
});


// create function to add total 

// if total is: 
// 10 - 15:
// Willing to put our business at risk and we are severely 
// at risk for any type of cyber attack causing a major outage to the business

// 16 - 27
// Willing to put our business at risk but have some protection against cyber attacks
// but we'll likely have an outage if it occurs

// 28 - 42 
// willing to put our business at risk but because of the investment we've made, the
// impact of an outage is reduced

// 43 - 50 Not willing to put our business at risk and have made significant investment
// in our people and technologies to make sure of it