// Other Traversing Methods - Challenge 3 
/*
When a side heading on the tables is clicked, the corresponding row should highlight. When another table header (on the row) is clicked, 
the corresponding row should highlight, and all others should turn white 
*/
// I am using document.ready() ==> not required for this challenge 3
$(document).ready(function () {

    /*
    1. Create a click event handler, 
    that triggers when the table header with the class of side-heading is clicked.
    */

    // two ways to answer or to select th with class "slide-heading"

    // $('.slide-heading')
    // Or
    // $('th').filter('.slide-heading') 

    $('.side-heading').click(function () {
        /*
        2. Within the click event handler:
        - target all elements using the class side-heading, 
        and using the siblings method and the removeClass method, 
        remove the class highlight
        */
        $('.side-heading').siblings().removeClass('highlight');

        /*
        3. Then target the actual heading clicked (hint, how would you target this)  
        and using the siblings method and the addClass method, add the class highlight
        */
        $(this).siblings().addClass('highlight');
    });
});