// we can use document.ready() also to make sure that the full HTML elements are loaded:
$(document).ready(function () {
	/* 1. the "this" keyword ***************************************/

	/*
	Task: 
	And we're going to open the webpage. You'll see we have two paragraphs.
	And when we click on them, they both disappear.

	In other word, if we click only one paragraph, 
	the two paragraphs will disappear/appear together

	Now you can see our problem. 
	We can't make them reappear because both disappear at the same time. 
	based on the code below:
	*/

	$('p').click(function () {
		/*
		We learned that we can hide any element using:
		- hide()
		- fadeOut()
		- slideUp() => slideToggle() [hide/show]
		*/
		// $('p').slideToggle('slow');

		// this line will hide all the p element(s)
		// $('p').slideToggle();

		// The problem: we need to only hide the p that we click?
		// Solution: using "this" keyword to refer to this element:
		/*
		What we want to provide for our users is the ability 
		to hide the paragraph that they clicked on.
		So how do we just select the tag to be acted upon?
		We use the 'this' keyword.
		And you can see now that we can click on one and make it disappear.
		So this is how we work with the document object model, or DOM.
		based on the code below:
	*/
		$(this).slideToggle();
	});

	/* 2. mouseenter/mouseleave keyword
	***************************************/
	/*
	On mouseenter(), we are going to remove the red class and add a blue class.
	Apply it to button element
	*/
	$('button').mouseenter(function () {
		// remove the red class and add a blue class
		// using "this" keyword:
		$(this).removeClass('makeRed').addClass('makeBlue');

		// We should avoid using the following way:
		// - It will add an inline style
		// - Colors and themes should part of the CSS coding not HTML
		// $(this).css('background-color','blue');
	});

	/*
	From mouseleave(), we want to do the reverse.
	We want to remove the blue and add the red
	Apply it to button element
	*/
	$('button').mouseleave(function () {
		$(this).removeClass('makeBlue').addClass('makeRed');
		// $(this).css('background-color','red');
	});

	/* 3. Class event ***************************************/
	// using the "box" class and an on("click") function.
	// we used the class ".box1" as a trick to disable this entire click event code
	// as there is no class with the value of "box1"
	// in order to practice the other click event $(".box")
	/*
	   When we click on an element that has a 'box' class, 
	   this function will be fired (run):
	 */
	$(".box1").on("click", function () {
		// testing: display a general message!
		console.log("a div.box is clicked!");

		// we can be more specific:
		// getting the value of the attribute named "id":
		var currentBox = $(this).attr("id");
		console.log('the div with id value of "' + currentBox + '" is clicked!');

		// To retrieve any CSS property of the current click element:
		// Example: we want to know the background color of this clicked div
		var bgColor = $(this).css("background-color");
		console.log(bgColor); // output: rgb(0, 0, 0)


		/*
		Task: LMS
		We're going to use a variable called classNames.
		And we're saying that the space is what we're splitting them by here.
		And we are going to change the background color to red.

		But for learning let's try to get the values (names) of the class attribute
		of the current clicked element (div/box) first:
		*/

		// just return the value of class attribute
		let classNames = $(this).attr("class");

		/*
		All our black div elements have two class names. 
		This means our classNames variable is assigned to a string containing one of these values:
		- "box one"
		- "box two"
		- "box three"

		- var classNames = $(this).attr("class")
		*/
		console.log(classNames); // for testing ==> box one. box three, and so on
		// they are string data type: "box one"
		console.log(typeof (classNames)); // string => means it's a text

		/*
		The problem:
		we know that all of these 9 boxes have the class of box
		so we only need to know or retrieve the class value of: one, two, or three

		Because the class has two values: box and (one, two, or three)
		*/

		/*
		The solution:
		In order for this function to work, 
		we need to split the string 'box one' wherever we encounter a space:

		The logic:
		- string = "box one"
		- split() method => slice the string based on delimiter and returns an array
		- array of two elements ['box','one']

		- var classNames = $(this).attr("class").split(" ");
		
		So we achieve this using split():
		This method "split()" will return an array containing two strings:
		- classNames = ["box","one"]
		*/
		classNames = $(this).attr("class").split(" ");
		console.log(classNames); // classNames became an array after using split() method
		/*
		(2) ["box", "two"]
		0: "box" <= Always "box"
		1: "two" <= Might be one, two, or three
		*/
		console.log(typeof (classNames)); // object => array is an object

		console.log("The first element of 'classNames' array is (first class value): " + classNames[0]); // box
		console.log("The second element  of 'classNames' array is (second class value): " + classNames[1]); // one, two, or three

		/*
		we need to change the background - color from black to red for class .box
		- the quick/short answer:
		$('.box').css("background-color", "red");

		we know that .box class has a background color of black (style.css): 
		.box {
			background-color:#000;
		}		
		*/
		// Solution1: quick/easy/short
		// $('.box').css("background-color", "red");

		// Solution2: for more practice 
		// we have to do it by accessing the array "classNames"
		// we now that classNames[0] ==> always "box"
		$(classNames[0]).css("background-color", "red"); // we will leave it for learning
		console.log(classNames[0]); // => box
		// $('box').css("background-color", "red"); jQuery will be confused!!!!
		// box is not an element!, it's a class => $('.box')
		// Solution:
		// In the code below: ("." + classNames[1]) ==> $('.div')
		$("." + classNames[0]).css("background-color", "red");
		/*		
			The first string will be box and the second one will be 1:
			- $("." + classNames[0]) ==> $(".div")
		*/
	}); // ending of $(".box1") or $(".box")

	/*
	Problem (More Advanced): LMS
	What if we wanted only a certain class to be changed to red at any given time?
	Then we would have to put an if statement.

	In other word:
	- If we click on a div with class value of "one":
	- we want all the div elements with class value of "one" to have the red color
	- and the rest (the div elements with class value of "two" or "three") => black color

	- If we click on a div with class value of "two":
	- we want all the div elements with class value of "two" to have the red color
	- and the rest (the div elements with class value of "one" or "three") => black color

	- and the same for div with class value of "three"
	*/

	/*
	NOTE:
	using the box class and an on("click") function.
	if you want to activate the previous $(".box") click event
	and deactivate this one below:
	we can use the same trick by changing its class name $(".box1")
	*/
	// Step1: activate the click function when we click any div.box
	// Final NOTE: I changed the value to be ".box1" to deactivate this function
	$(".box1").on("click", function () {
		/*
		Doing two actions (methods) at the same time:
		- Getting the value of the this clicked element as a string
		- Splitting the string to array
		*/

		// Step2: we need to know whether this clicked div has class of one, two, or three
		let classNames = $(this).attr("class").split(" ");
		console.log(classNames);
		/*
		The index 0 => classNames[0] => will be always box
		the index 1 => classNames[1] => one, two, or three
		*/
		let classNumber = classNames[1];
		console.log(classNumber); // one, two, or three

		// We need to make all div elements to be black (reset them):
		$(".box").css("background-color", "black");

		/*
		Notice that the classNumber will be: one, two, or three
		but to use them with jQuery selector 
		they will be like this => $('one'), $('two'), or $('three') !!! wrong!
		is should be like this format => $('.one'), $('.two'), or $('.three')

		We will use the same logic for concatenating the . to the class name value
		*/
		$("." + classNumber).css("background-color", "red");
	}); // ending of $(".box1") or $(".box")


	// Below the solution from LMS:
	$(".box").on("click", function () {
		/*
		If the RGB value is equal to (255, 0, 0) which is "red color" 
		then we want to change it to black.

		We do this by setting the background color to 0, 0, 0.
		If the value is not red, then we'll set all the boxes to black.
		*/

		var classNames = $(this).attr("class").split(" "); // classNames = ["box","one"];
		var boxClass = classNames[0]; // boxClass = "box"
		var className = classNames[1]; // className = "one" or "two" or "three"
		// if the background-color of the current clicked div/box is red then ...
		if ($(this).css("background-color") == "rgb(255, 0, 0)") {
			// if this object is already red, turn it black:
			$("." + className).css("background-color", "#000");
		} else {
			// Else turn all elements with a box class black
			// and then change the color of all elements
			// with the same class name as the clicked element to red
			$("." + boxClass).css("background-color", "#000");
			$("." + className).css("background-color", "red");
		}
	}); // ending of $(".box") or $(".box")
}); // end document.ready()