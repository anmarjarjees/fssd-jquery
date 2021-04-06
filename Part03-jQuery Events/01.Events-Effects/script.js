$(document).ready(function () {
	// for testing that:
	// 1. script.js is linked to my html file
	// 2. jQuery library is fully loaded 
	console.log("the console output");
	/*
	CI-LMS HTML code:
	three classes for different div elements with these topics:
	.stream1 => HTML, jQuery, CSS
	.stream2 => Python 
	.stream3 => MySql, Django
	*/

	/* 1. JQuery Events (Event Handler) ****************************************/
	// we can see an .on("click") event:
	// on click event will run that jQuery code:
	// as soon as someone clicks on the ID "stream1_btn".
	$("#stream1_btn").on("click", function () {
		// alert("test1");
		// removing these classes (if they're already applied)
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');

		// The line below will affect the 3 divs with class = "stream1"
		// HTML, CSS, and jQuery topics each one inside a div with a class="stream1"
		$(".stream1").addClass('highlight_stream');

		// Or using the following 
		// we should avoid using this way, it will add inline styles
		// $(".stream1").css("background-color","red");
	});

	// another way is to use on click function: 
	// Another way of doing this would just be to use the ".click" function, 
	// and that works in the same way.
	// So the code inside the function will run when the "stream1_btn" ID is clicked.
	// Note The code bellow will run also:
	$("#stream1_btn").click(function () {
		// alert("click function");
		// write our code here the same as above
	});

	// or you can use this way also (similar to .hover() method):
	$('.stream3').on("mouseover", function () {
		// alert('you hovered over div.stream3');
	});

	// We can also use hover function
	// this event works on mouse hover
	// in jQuery Events Challenge1, you will use this method "hover()"
	$('.stream3').hover(function () {
		// alert('you hovered over div.stream3');
	});

	// Just for trying the same as above but using on() method:
	$("#stream1_btn").on("mouseenter", function () {
		$(".stream1").addClass('highlight_stream');
	});

	// We can also trigger events when the mouse is hovered over the element 
	// when using the "mouseenter" and when using the "mouseleave".
	$("#stream1_btn").mouseenter(function () {
		// alert("Mouse Enter Event!");
		// write our code here the same as above
		// below is just an example:
		// remember that the command below will affect 3 divs
		// $(".stream1").addClass('highlight_stream');
	});

	$("#stream1_btn").mouseleave(function () {
		// alert("Mouse Leave Event!");
		// write our code here the same as above
		// below is just an example:
		$(".stream1").removeClass('highlight_stream');
	});

	/* 2. JQuery Effects ****************************************/
	// as soon as someone clicks on the ID "stream1_btn" => hide/show
	// Note: in order to see the effect we need to run it line by line:
	$("#stream2_btn-hide").on("click", function () {
		// hide() function:
		// An element can be hidden using the hide() method, 
		// or with CSS, using display:none.
		// The hide() method makes an element vanish.
		// It's the opposite of show().
		$(".stream1").hide();
		// It tells jQuery how fast to hide the element.
		// $(".stream1").hide('slow');
		// $(".stream1").hide('medium');
		// $(".stream1").hide('fast');
		// number of milliseconds, in this case 1000 msc
		// $(".stream1").hide(1000);
	}); // end #stream1_btn click


	$("#stream2_btn-show").on("click", function () {
		// show() function:
		$(".stream1").show();
		// Here, we're passing a speed to the show() method.
		// It tells jQuery how fast to show the element.
		// $(".stream1").show('slow');
		// $(".stream1").show('medium');
		// $(".stream1").show('fast');
		// number of milliseconds, in this case 1000 msc
		// $(".stream1").show(1000);
	});

	/* below is the code that we don't need to change: */
	$("#stream3_btn-tog").on("click", function () {
		// toggle() function:
		// It toggles the visibility of an element.
		// if the element is hidden, it will be shown, and, vice-versa, if it is shown, it will be hidden.
		// It works just like an on/off button.
		// If you think about using the toggle() function, 
		// it does not make much sense to use the function on an element itself.
		// When the toggled element becomes hidden, you cannot click on it again to make it visible.
		// So what we usually do is click on an element, such as a button, which toggles a different element.
		$(".stream1").toggle(); // show/hide
		// Here, we're passing a speed to the show() method.
		// It tells jQuery how fast to show the element.
		// $(".stream1").toggle('slow');
		//$(".stream1").toggle('medium');
		//$(".stream1").toggle('fast');
		// number of milliseconds, in this case 1000 msc
		//$(".stream1").toggle(1000);
	});

	$("#stream3_btn-slideUp").on("click", function () {
		/*
		The slideDown() function slides down a hidden HTML element, so it becomes visible.
		As with the show() and hide() functions, you can also set the speed as a parameter to the function.

		The opposite to the previous function is the slideUp() 
		function, which hides a visible element by sliding it up.
		*/
		$(".stream1").slideUp();
		// $(".stream1").slideUp(1000);
		// $(".stream1").slideDown();

		/*
		The slideToggle() function shows an element if it's hidden,
		or hides it if it's visible.
		*/
		// $(".stream3").slideToggle();
		// $(".stream3").slideToggle(1000);
	});


	$("#stream3_btn-slideDown").on("click", function () {
		$(".stream1").slideDown();
	});



	$("#stream3_btn-fade").on("click", function () {
		/*
- The fadeIn() function fades in the hidden element.
Like with the show and hide functions, you can also set the speed as a parameter to the function.
- The fadeOut() function fades out a visible element.
- The fadeToggle() function shows an element if it's hidden, or hides it if it's visible.
		*/
		// $(".stream1").fadeOut();
		// $(".stream1").fadeIn();
		$(".stream1").fadeToggle();

		/*
The fadeTo() function enables you to fade an HTML element partially in or out,
thus making it transparent. 
You pass two parameters: the speed, which is in milliseconds; 
and the opacity, which is between zero and one, 
which tells you how much you wish to fade the element. 0 is fully transparent (hidden) and 1 is fully opaque (shown).
		*/
		// $(".stream1").fadeTo(1000, 0.5);
	});
}); // end document ready function
