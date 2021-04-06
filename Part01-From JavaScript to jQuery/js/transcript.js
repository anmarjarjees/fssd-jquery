console.log('Hello World');

/*********************************************************
 This is the set of JavaScript statements that we executed
 inside of the console window against the 'index.html' file.

 Please be advised that these are pure JavaScript code (no jQuery)
 *******************************************************/

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

// just type: article then enter key (inside the console window)
// console.log(article); // inside script or js file

article.children;
article.parentElement;

// This will return "null" ==> There is no any tree element beside my article (there isn't one)
article.nextElementSibling
article.firstElementChild;
article.lastElementChild;

let section = article.firstElementChild;
section // Jumbotron

section = article.nextElementSibling;
section // content

// Returns a list of elements. This is because we can have a number
// of <section> elements on one page 
// return all the section elements in the page as a list
// Can get all matched results. This returns a list
// Task: Select all section element(s):
// Remember that we have two section elements in our page:
// getElementsByTagName(): Retrieves a collection of objects based on the specified element name.
var sections = document.getElementsByTagName('section');
sections

// Task: retrieve all the elements with class value of "lead"
// Also returns a list of elements that match the class name. This is because
// unlike the ids, we can have numerous instances of elements with the same
// class names. Note that we don't include a '.' for the class

// the solution using pure JS:
let leads = document.getElementsByClassName('lead');
leads

// the solution using jQuery Selector: $ or using the keyword jQuery
/*
let otherLeads = $('.lead');
otherLeads
*/

// Let's look at the text content of the .lead element
// We are getting the first p element inside "leads" list
var lead1 = leads[0];
lead1

// return the actual text content of the variable lead1
lead1.textContent;

// Or using
// We can also use our 2 previous methods to return the actual text content:
// lead1.innerText = "just changing and testing";
lead1.innerText;
// "Manipulating the DOM with Javascript."

var lead2 = leads[1];
lead2.innerHTML;

// Very flexible way of finding elements in the DOM. Returns first element found
// Task: to select the fist element found: querySelector("?")
// We used: var article = document.getElementById('home-page');
var anotherArticle = document.querySelector('#home-page');
// then type anotherArticle and ENTER first then type anotherArticle.children and ENTER
anotherArticle
anotherArticle.children
anotherArticle.parentElement

/*
We have two p elements with class="lead"
querySelector() => Returns first element found
Yes, we do have more than one element with class value of "lead"
*/
let firstP = document.querySelector(".lead"); // we can use " or '
let allP = document.querySelectorAll('.lead');

// remember we used this one:
// var sections = document.getElementsByTagName('section');
let otherSections = document.querySelectorAll('section');
// just type in the console log:
otherSections
/*
all of these DOM methods:

- document.getElementsByTagName('section');
- document.querySelectorAll('section');

- document.getElementsByClassName('.lead');
- document.querySelectorAll('.lead');

will return an array
*/

/*
 * Creating new elements and add/attach it to the html code on the fly (run)
*/

// step1: create li element
var li = document.createElement('li'); // <li></li>
// using the console and just type:
li

// step2: attach a class="last"
/*
Be aware that we haven't added this list element (li) to the real HTML page, 
just inside the browser memory
*/
// Give it a class name
li.classList.add('last'); // output: <li class="last"></li>

// step3: change its background color to pink by adding inline styles:
// Change its CSS
li.style.backgroundColor = 'pink';
// type it directly using the console window
li // output: <li class="last" style="background-color: pink;"></li>

// step3: create a element (to be a child for the li element later)
// Create an anchor link to go in the new li
var a = document.createElement('a');

//step4: adding text content to a element to the a element
// we can use: innerText, innerHTML, or textContent
a.textContent = "Four";
a // output: <a>Four</a>

// step5: make the text of a element to be in white color 
a.style.color = 'white';

// step6 (our own step): attach an attribute named "href" with the value of "#"
// href="#"
// a.setAttribute("myAttribute", "I don't know!"); for fun :-)
a.setAttribute("href", "#");
a // output: <a href="#" style="color: white;">Four</a>

// step7: append/attach this a element to li
// we have this element li =>  <li class="last" style="background-color: pink;"></li>
// and we have this element a => <a href="#" style="color: white;">Four</a>
// we need append/insert the a element inside li element:
// Insert the anchor link into the li
// append it to the list item:
li.appendChild(a);

// type:
li
// output:
/*
<li class="last" style="background-color: pink;">
    <a href="#" style="color: white;">Four</a>
</li>
*/

let firstUL = document.querySelector('.nav');
// this will select only the first ul with class "nav"
firstUL.appendChild(li);


// Different more complex way just for learning:
// inside that list element li.last there is "Four" text with link and inline style...
/*
 * Modifying the DOM
 */

// Find the ul element
// getting elements by tag name
let uls = document.getElementsByTagName('ul');  // which is the navigation bar at the top
// uls will be an array of two elements (we have two ul elements)

// we only need the first ul (the main nav for our page) to attach: Li\a\"Four"
let ul = uls[0];
ul
// output: first ul block
// Insert the new li element into our ul
// we will add the list item with pink link to the end of nav:
ul.appendChild(li); // will become live in the browser!
// the nav will be: One Two Three Four
// so it was in the memory but then we placed it in the browser

// Let's try move it up to the top of the list
// Dear my students, below is the code that I run in our class using the browser window:
// First we will need to get the first li child element of the ul element
// using DOM property "firstElementChild"
var firstLi = ul.firstElementChild;
// then using DOM method: insertBefore()
ul.insertBefore(li, firstLi);
// the nav will be: Four One Two Three

// we need to remove a class "active" from the first li element
firstLi
firstLi.classList.remove('active');
// Starting to get messy


/*
 * Updating a list of elements
 * - this is where it gets painful :-(
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







