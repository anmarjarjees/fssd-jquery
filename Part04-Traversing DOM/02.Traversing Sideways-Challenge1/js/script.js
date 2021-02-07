//wait until page is ready
$(document).ready(function () {
    // **************************************************************
    // The following code is for "Traversing Sideways - Challenge 1" 
    // **************************************************************
    // Toggle the visibility of the paragraph when a button is clicked 
    /* 
    Within the click handler, using the "this" keyword and the relationship between the button and the <p> element, 
    toggle the p element by clicking on the button, and using .slideToggle(‘slow’)
    */
    $("button").click(function () {
        // slideToggle ==> slide Up/Down
        $(this).next().slideToggle('slow');
    });
});

