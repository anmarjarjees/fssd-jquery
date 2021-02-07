/****************************************
 This is the set of JavaScript statements that we execute
 inside of the console against the 'index.html' file.
 ****************************************/

console.log('Hello World');

// Write all the following code inside "Console" window:
// and test the result by typing just the variable name
/*
example:
You will type: var article = document.getElementById('home-page');
Then you will type: article
*/
document
// 3 different ways to search the DOM and selecting elements:
/*
 * Selecting elements.
 */

// Returns a single element. This is because we can't every have more than
// one element with the same id. Note that we don't include a '#' for the id
// Let's look at an individual node and see it's children and it's parent
var article = document.getElementById('home-page');

article.children;
article.parentElement;

// This will return "null" ==> There is no any tree element beside my article (there isn't one)
article.nextElementSibling
article.firstElementChild;
article.lastElementChild;

let section = article.firstElementChild;
section // Jumbotron

section = article.nextElementSibling;
section; // content

// Returns a list of elements. This is because we can have a number
// of <section> elements on the page 
// return all the section elements in the page as a list
// Can get all matched results. This returns a list
var sections = article.getElementsByTagName('section');
sections

// Also returns a list of elements that match the class name. This is because
// unlike the ids, we can have numerous instances of elements with the same
// class names. Note that we don't include a '.' for the class
var leads = document.getElementsByClassName('lead');
lead

// Let's look at the text content of the .lead element
var lead = leads[0];
// return the actual text content
lead.textContent;
lead

// We can also use our 2 previous methods to return the actual text content:
lead1.innerText
"Manipulating the DOM with Javascript."

lead1.innerHTML
"Manipulating the DOM with Javascript."

// Very flexible way of finding elements in the DOM. Returns first element found
var article = document.querySelector('#home-page');
// then type article and ENTER first then type article.children and ENTER
article
article.children
article.parentElement

var sections = document.querySelectorAll('section');

/*
 * Creating new elements
 */

// Create a new li to go in the nav
var li = document.createElement('li');
li

/*
Be aware that we haven't added this list element (li) to the real HTML page, just inside the browser memory
*/
// Give it a class name
li.classList.add('last');
// output: <li class="last"></li>

// Change its CSS
li.style.backgroundColor = 'pink';

// Create an anchor link to go in the new li
var a = document.createElement('a');

// Give is some text
a.textContent = "Four";

a.style.color = 'white';
// (our own step): attach an attribute named "href" with the value of "#" to the a element
a.setAttribute("href", "#");


// Insert the anchor link into the li
// append it to the list item:
li.appendChild(a);
// this will output the element
li
// inside that list element li.last there is Four text with link and inline style...
/* 
 * Modifying the DOM
 */

// Find the ul element
// getting elements by tag name
var uls = document.getElementsByTagName('ul');  // which is the navigation bar at the top
uls
// output [ul.nav.navbar-nav]
var ul = uls[0];
ul
// output: first ul block

// Insert the new li element into our ul
// we will add the list item with pink link to the end of nav:
ul.appendChild(li); // will become live in the browser!
// so it was in the memory but then we placed it in the browser

// Let's try move it up to the top of the list
// Dear my students, below is the code that I run in our class using the browser window:

// First we will need to get the first li child element of the ul element
var firstLi = ul.firstElementChild;
ul.insertBefore(li, firstLi);

firstLi.classList.remove('active');
// Starting to get messy

/*
 * Updating a list of elements
 * - this is where it gets painful
// we will take the forth element (the pink element):
// and move it to the top of the menu:
// let's take the entire ul first:
*/
var lis = uls[0].getElementsByTagName('li');
lis

/*
Task: Change all of our list elements 1, 2, 3, 4 to a pink background.
We have to use a for loop because all of our list elements are in a loop.
So we'd have to go through 1, 2, 3, 4 and change the background on each one manually.
*/
for (var i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = 'pink';
}

// Then we're removing a class and adding a second class. And then finally changing the CSS.
ul.find('li').removeClass('active').addClass('inactive').css('background-color', 'pink');

// without having to write big for loops
// the process above is not easy

/*
It'd be much better in a different way of doing this. Some way of saying, find me all the lis within a ul, remove a class, and then add a class.
*/

/*
It'd be ideal if we had some sort of helper or library that could make these DOM manipulations a little bit more straightforward. And it turns out, of course, there is.
We've already mentioned it. It's called jQuery.
*/
