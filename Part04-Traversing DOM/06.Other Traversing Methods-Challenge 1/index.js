// Answer: Other Traversing Methods - Challenge 1  
$('#reset').click(function () {
    $(this).siblings().children().removeClass('red').removeClass('yellow').removeClass('green').removeClass('large-font');
});

$('#card-btn-1').click(function () {
    /*
    1. Within the #card-btn-1 event handler, and using the keyword this, 
    use the siblings method to target all span elements, 
    and use the addClass method to add the class name "yellow"
    */
    // console.log($(this).siblings('span')); // for testing
    $(this).siblings('span').addClass('yellow');

    // we can add other methods (jQuery functions):
    // $(this).siblings('span').slideToggle('slow');
});

$('#card-btn-2').click(function () {
    /*
    2. Within the #card-btn-2 event handler, and using the keyword this, 
    use the siblings method to target the element with the id of "card-par-1", 
    and use the addClass method to add the class name "red"
    */
    $(this).siblings('#card-par-1').addClass('red');
});

$('#card-btn-3').click(function () {
    /*
    3. Within the #card-btn-3 event handler, and using the keyword this,
    use the siblings method to target all siblings, 
    and use the addClass method to add the class name "large-font"
    */
    $(this).siblings().addClass('large-font');
});