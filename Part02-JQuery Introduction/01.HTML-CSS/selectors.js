/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 *
*/

/*
All the code below is written in Console window (except the comment)
*/

// Select all of the anchor elements on the page using the "$" as shorthand
// for the "jQuery" function
$("a");
// output all a elements

/*
The dollar symbol is shorthand for the word jQuery.
So we could equally have written it like this: jQuery("a")
*/
// The long version of the function
jQuery("a");


// Get all elements that contain a class of "card_image"
// To use a class element, we would use dot notation, similar to CSS.
$(".card_image");
// output...

// Get all elements that contain an ID of "logoNav"
// To select an element using its ID, we use the #.
$("#logoNav");

/*
Query allows you to traverse the DOM tree and select elements based on their parent element.

There are two variations.
The first variation will only match elements which are direct child to parent elements.
*/
// Get all anchors that are direct children of paragraphs
// So here, we are returning all anchor link children that are direct children of a <p> element:
$("p>a");

/*
The second variation will match all descendants of the parent, i.e. children, and everything below.

For the selector to return all descendants of a parent, regardless of whether directly related or not, we use the following syntax: ("p a"):
*/
// Get all anchor elements that are descendants of paragraphs
$("p a"); //  there are no anchor children of paragraph parents


// Get all list item elements that are direct children of unordered lists
// we have "ul" as the parent and "li" as the child: ("ul>li"):
$("ul>li");


/*
If we want to give all <li> elements, regardless of whether directly related or not, 
we use this syntax: ("ul li"):
*/
// Get all list item elements that are descendants of unordered lists
$("ul li");


/*
Pseudo selectors can also be used, just as they were in CSS.
This will select the first anchor on the page: ("a:first"):
*/
// Get the first anchor element from the DOM
$("a:first");


// And this will get the last anchor on the page: ("a:last"):
// Get the last anchor element from the DOM
$("a:last");


// Select all of the <h> elements on the page, h1s, h2s, h3s, and so on: ("header"):
// Select all header elements (h1, h2, h3, h4, h5, h6)
$(":header");

