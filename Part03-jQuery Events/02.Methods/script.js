$(document).ready(function () {
	// // 1. More examples: Create the slideToggle effects each of the paragraphs and buttons
	/*
	Our HTML file contains the following code for button element:
	<button id="button_effects1" class="bottom_button">Button</button>
    
	create a jQuery click event when you click the element with id="button_effects1"
	this event will trigger an anonymous function to apply .slideToggle() effect method on the element (paragraph) with id="#par1"
	*/

	// Create the slideToggle effects each of the paragraphs and buttons
	$("#button_effects1").click(function () {
		$('#par1').slideToggle('1000');
	});

	// the same idea (logic) as above:
	$("#button_effects2").click(function () {
		$('#par2').slideToggle('1000');
	});
	$("#button_effects3").click(function () {
		$('#par3').slideToggle('1000');
	});
	$("#button_effects4").click(function () {
		$('#par4').slideToggle('1000');
	});
	$("#button_effects5").click(function () {
		$('#par5').slideToggle('1000');
	});
	$("#button_effects6").click(function () {
		$('#par6').slideToggle('1000');
	});

	// Use the fadeTo effect when the mouse hovers over a specific button
	// and fadeTo again when the mouse is no longer hovering over the button
	$("#button_effects1").mouseenter(function () {
		$('#button_effects1').fadeTo(1000, 0.5);
	});
	$("#button_effects1").mouseleave(function () {
		$('#button_effects1').fadeTo(1000, 1);
	});

	$("#button_effects2").mouseenter(function () {
		$('#button_effects2').fadeTo(1000, 0.5);
	});
	$("#button_effects2").mouseleave(function () {
		$('#button_effects2').fadeTo(1000, 1);
	});

	$("#button_effects3").mouseenter(function () {
		$('#button_effects3').fadeTo(1000, 0.5);
	});
	$("#button_effects3").mouseleave(function () {
		$('#button_effects3').fadeTo(1000, 1);
	});

	$("#button_effects4").mouseenter(function () {
		$('#button_effects4').fadeTo(1000, 0.5);
	});
	$("#button_effects4").mouseleave(function () {
		$('#button_effects4').fadeTo(1000, 1);
	});

	$("#button_effects5").mouseenter(function () {
		$('#button_effects5').fadeTo(1000, 0.5);
	});
	$("#button_effects5").mouseleave(function () {
		$('#button_effects5').fadeTo(1000, 1);
	});

	$("#button_effects6").mouseenter(function () {
		$('#button_effects6').fadeTo(1000, 0.5);
	});
	$("#button_effects6").mouseleave(function () {
		$('#button_effects6').fadeTo(1000, 1);
	});

	// 2. Methods: **************************************
	/*
Most of the methods in jQuery return an object
that you can then use to call another method.
This allows you to do command chaining where you can perform multiple methods
on the same set of elements. This can be very useful and can save a lot of time.
	*/

	/*
	So instead of typing it in two lines:
	
	$("#myButton").removeClass("blueBox");
	$("#myButton").addClass("border");

	we can type it in one line as shown below:
	*/
	$("#myButton").removeClass("blueBox").addClass("border"); // Just an example

	// Chaining also works with events:
	// Here, we have the slideUp() followed by the slideDown() chained together:
	$("p").css("color", "blue").slideUp(2000).slideDown(2000);

	// we can put them in for loop:
	for (let i = 1; i <= 4; i++) {
		/*
		when i=1 => slideToggle will be slideUp
		when i=2 => slideToggle will be slideDown
		and so on till i=4
		*/
		$("p").css("color", "blue").slideToggle(2000);
	}

	/*
An element's attributes can contain useful information, 
so it's important to be able to access and manipulate them. 

The attr() function acts both as a getter and a setter:
- as a getter => attr("class") => return (get) the value of the class
- as a setter => attr("class","main") => change (set) the value of class att. to be "main"
As with the CSS function, we can query with one parameter, 
here we're looking for an href, and update the attribute for the second parameter,
in this case, to example.com
	*/
	$("a").attr("href", "https://codeinstitute.net/"); // att() will be a setter

	// more example: 
	$("#first_img").attr("src", "img/1.png"); // att() will be a setter

	// another example
	// $("#first_img").attr("class","box_image");

	// using attr with mouse event
	$("#first_img").mouseenter(function () {
		$(this).attr("src", "img/1.png");
	});

	$("#first_img").mouseleave(function () {
		$(this).attr("src", "img/3.png");
	})
}); 