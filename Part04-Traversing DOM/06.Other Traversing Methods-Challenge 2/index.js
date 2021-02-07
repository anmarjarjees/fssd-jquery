// Other Traversing Methods - Challenge 2 
$('#reset').click(function () {
    $(this).siblings().children().removeClass('red').removeClass('yellow').removeClass('green').removeClass('large-font');
});

$('#card-btn-1').click(function () {
    /*
    1. Within the #card-btn-1 event handler, and using the correct selectors, 
    use the first method to target the first <p> element "within the card with the id of card",

    so there is a condition: only p element withing #card
    and use the addClass method to add the class name "red"
    */
    $('#card p').first().addClass('red');
});

$('#card-btn-2').click(function () {
    /*
    2. Within the  #card-btn-2 event handler, and using the correct selectors , 
    use the last method to target the last <p> element within the card with the id of card, and use the addClass method to add the class name "yellow"

    The same logic as above only by changing first() to last()
    */
    $('#card p').last().addClass('yellow');
});

$('#filter').click(function () {
    /*
    3. Within the #filter event handler, and using the p selector , 
    use the filter method to target only the <p> elements with the class name special in the html, and use the addClass method to add the class name "green"

    Just to review: 
    below is an example of using filter() to select to any p element that hast class of "intro"
    $("p").filter(".intro").
    */
    $("p").filter(".special").addClass('green');
});
