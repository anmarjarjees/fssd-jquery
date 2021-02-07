/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors: Challenge
 * 
 * Hints:
$( '#header' ); // select the element with an ID of 'header'
$( 'li' );      // select all list items on the page
$( 'ul li' );   // select list items that are in unordered lists
$( '.person' ); // select all elements with a class of 'person'
 */

// Challenge: Let’s use the selector technique to select the following:

// All images, based on the element type
// Get all img elements on the page
$("img");


// The card_image class
// Get all elements with a class of `card_image`
$(".card_image");


// The footer, using its id
// Get the footer by its ID
$('#my_footer');


// All paragraph tags within the footer
// All paragraph elements in the `footer`
$("footer p");


// All header elements (<h1> through <h6>)
// Get all header elements (h1-h6)
$(":header");


// The first element on the page
// Get first element on the page
$(":first");


// The last div on the page
// Get the last `div` on the page
$("div:last")


// The last image on the page
// Get the last `img` on the page
$("img:last");


// All elements with an href attribute
// Get all elements that have an attribute of `href`
$("[href]")