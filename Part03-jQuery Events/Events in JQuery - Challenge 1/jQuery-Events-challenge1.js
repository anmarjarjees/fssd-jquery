/*
1. Create a click event handler (not a: on("click" ... ) that is triggered when <p> elements are clicked.
*/
$('p').click(function () {
    /*
    2. Within this event handler target <p> elements and using the JQuery css method set the elements color value to red for all <p> elements
    */
    $('p').css('color', 'red');
});

/*
3. Create a hover event handler that is triggered when <h2> elements are hovered.
*/
$('h2').hover(function () {
    /*
    4. Within this event handler target <h2> elements and using the JQuery css method set the elements background value to lightblue for all <h2> elements
    */
    $('h2').css('background', 'lightblue');
});
/*
5. Create a mouseenter event handler that is triggered by moving over elements with the class card-panel.
*/
$('.card-panel').mouseenter(function () {
    /*
    6. Within this event handler target the <body> element and using the JQuery css method set the elements background-color value to black for the <body> element.
    */
    $('body').css('background-color', 'black');
});

/*
7. Create a mouseleave event handler that is triggered by moving off of elements with the class card-panel.
*/
$('.card-panel').mouseleave(function () {
    /*
    8. Within this event handler target the <body> element and using the jquery css method set the elements background-color value to #e1e2e2 for the <body> element.
    */
    $('body').css('background-color', '#e1e2e2');
});