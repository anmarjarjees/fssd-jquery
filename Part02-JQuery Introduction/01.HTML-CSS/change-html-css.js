/*
All the code below is written in Console window (except long comments)
*/
/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */

/*
There are a number of ways to change the properties of an element.
One of these ways is to modify the CSS using a function.
The function we will look at is the ".CSS" function.

.CSS Function:
There are two ways to use this function:
Query a style property 
Set the style property.
*/

// Get the "background-color" of all paragraphs
// the background color of any p element - Query a style property
$("p").css("background-color");
// the color is white:
// "rgba(0,0,0,0)"


// Get the "font-family" of all paragraphs
// the font family - Query  a font-family
$("p").css("font-family");
// "Roboto, sams-serif"


/*
So this queries the CSS of any element.
However, if we want to change the CSS of any element, we add in a second parameter with a comma to separate the two.
So this will change the color of the font of any <li> element to red.
*/
// Change the color of the text of all list item elements
$("li").css("color", "red");



// Let's try this with another element, in this case an <h2>:
// Change the text-decoration to underline.
// Underline all h2 elements
$("h2").css("text-decoration", "underline");

/*
Very Important Note:

We can actually see this using the chrome developer tools {Element Tab}

You can see the inline style of color red has been added to each <li> element,
and each <h2> has "text-decoration:underline" added as an inline style.

Remember that we don't like using inline styles, as it mixes content and styling on the same section of a page.
Content and styling should be separated in their own sections wherever possible, and we will do this in future lessons.
*/

// Add a solid border of 1px and a color of "#ccc" to all unordered lists
// Add a border to the ul element
$("ul").css("border", "solid 1px #ccc"); // adds a 1px wide border to all lists


/*
HTML Function: So like the ".CSS" function, there is also an HTML function which can retrieve an element's HTML.
That is the ".HTML" function.
*/
// Get the HTML contained within an element with an ID of "my_footer"
$("#my_footer").html(); // retrieves all the HTML from "#my_footer". (form with id ="my_footer")

// Get the HTML contained within an element called "body"
$("body").html(); // retrieves the entire body from the HTML

/*
As we can place "CSS" we can also place "HTML". We can place tags inside HTML
below we are going to override the paragraph inside #my_footer with the following <h1>
*/
// Add a h1 to the "body" element
$("#my_footer").html("<h1>This is my fancy new content. Thanks jQuery, you're the best!</h1>");


/*
Replace an element with just a text content:
*/
// Add new text to the footer
$("#my_footer").text("This is my fancy new. Thanks again jQuery"); // h1 will be replaced by this text


/*
Inserting/Removing new element by adding it to the page (DOM) or remove it from the page (DOM)

Using .append() method ==> adding content onto the end of an existing selected HTML element:

if there is an element with the ID "myElement", this paragraph will be appended on the end.
*/
// Append a new element to the end of all of the elements contained in the
// element that has an ID of "myElement"
$("#myElement").append("<p>This is a new element</p>")

// try also with #my_footer
// Append a span containing the copyright to the footer 
// appending the copyright 2017 on to the end of the text that we've previously put
$("#my_footer").append("<span>&copy; 2020.</span>");



