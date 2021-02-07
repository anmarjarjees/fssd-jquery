// we can document.ready() also to make sure that the full HTML elements are loaded:
$(document).ready(function () {
	/* 1. this keyword ***************************************/

	/*
	And we're going to open the webpage. You'll see we have two paragraphs.
	And when we click on them, they both disappear.

	In other word, if we click only one paragraph, the two paragraphs will disappear/appear together

	Now you can see our problem. We can't make them reappear because both disappear at the same time. based on the code below:
	*/

	/*
	$('p').click(function () {
		$('p').slideToggle('slow');
	});
	*/

	/*
	What we want to provide for our users is the ability to hide the paragraph that they clicked on.
	So how do we just select the tag to be acted upon?
	We use the 'this' keyword.
	And you can see now that we can click on one and make it disappear.
	So this is how we work with the document object model, or DOM.

	based on the code below:
	*/

	$('p').click(function () {
		$(this).slideToggle('slow');
	});


	/* 2. mouseenter/mouseleave keyword
	***************************************/
	/*
	On mouseenter(), we are going to remove the red class and add a blue class.
	Apply it to button element
	*/
	$('button').mouseenter(function () {
		// using "this" keyword:
		$(this).removeClass('makeRed').addClass('makeBlue');

		// We should avoid using the following way:
		// - It will add an inline style
		// - Colors and themes should part of the CSS coding not jQuery or JS
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
	// using the box class and an on("click") function.
	// we used the class ".box1" to disable this click event
	// as there is no class with the value of "box1"
	// in order to practice the other click event $(".box")
	/*
	 * When we click on an element that has a 'box' class, 
	   this function will be fired (run):
	 */
	$(".box1").on("click", function () {
		var bgColor = $(this).css("background-color"); // to review
		console.log(bgColor); // return the value 

		/*
We're going to use a variable called classNames.
And we're saying that the space is what we're splitting them by here.
And we are going to change the background color to red.

But for learning let's try to get the values (names) of the class attribute
of the current clicked element (div/box) first:
		*/

		var classNames = $(this).attr("class"); // just return the value of class attribute

		/*
All our black div elements have two class names. 
This means our classNames variable is assigned to a string containing one of these values:
- "box one"
- "box two"
- "box three"

- var classNames = $(this).attr("class")
*/
		console.log(classNames); // for testing ==> box one. box three, and so on
		console.log(typeof (classNames)); // string => means it's a text

		/*
		Because the class has two values: box and (one, two, or three);
		*/

		/*
		In order for this function to work, we need to split the string 'box 1' wherever we encounter a space:
		- var classNames = $(this).attr("class").split(" ");
		
		So we achieve this using split():
		This method "split()" will return an array containing two strings:
		- classNames = ["box","one"]
		*/
		classNames = $(this).attr("class").split(" ");
		console.log(classNames); // classNames became an array after using split() method
		console.log(typeof (classNames)); // object => array is an object

		console.log("The first element is (first class value): " + classNames[0]); // box
		console.log("The second element is (second class value): " + classNames[1]); // one, two, or three

		/*
		we know that .box class has a background color of black (style.css): 

		.box {
			background-color:#000;
		}

		we need to change the background-color from black to red for class .box 

		we now that classNames[0] ==> always "box"
		if we assume that classNames[1] ==> "one"
	
		In the code below:
		$("." + classNames[1]) ==> $('.one')

		*/
		$("." + classNames[1]).css("background-color", "red");
		/*		
				The first string will be box and the second one will be 1:
				- $("." + classNames[1]) ==> $(".one")
		*/
	}); // ending of $(".box1") or $(".box")

	// using the box class and an on("click") function.
	// if you want to activate the previous $(".box") click event
	// and deactivate this one below:
	// we can use the same trick by changing its class name $(".box1")
	$(".box").on("click", function () {
		// *************************************
		// more advanced example:
		// you need to comment all the code above and uncomment only the code below:
		/*
		What if we wanted only a certain class to change to red at any given time?
		Then we would have to put an if statement.
		*/

		/*
		If the RGB value is equal to (255, 0, 0) which is "red color" 
		then we want to change it to black.

		We do this by setting the background color to 0, 0, 0.
		If the value is not red, then we'll set all the boxes to black.
		*/

		var classNames = $(this).attr("class").split(" "); // classNames = ["box","one"];
		var boxClass = classNames[0]; // boxClass = "box"
		var className = classNames[1]; // className = "one"
		// if the background-color of the current clicked div/box is red then ...
		// for testing:
		//alert("The background color of this box is: "+ $(this).css("background-color"));
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
	}); // ending of $(".box1") or $(".box")
}); // end document.ready()