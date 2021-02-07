$(document).ready(function () {
	// 2. Methods: **************************************
	/*
Most of the methods in jQuery return an object that you can then use to call another method.
This allows you to do command chaining where you can perform multiple methods on the same set of elements. This can be very useful and can save a lot of time.
	*/

	/*
	So instead of typing it in two lines:
	
	$("#myButton").removeClass("blueBox");
	$("#myButton").addClass("border");

	we can type it in one line as shown below:
	*/


	// Chaining also works with events:
	// Here, we have the slideUp() followed by the slideDown() chained together:


	/*
An element's attributes can contain useful information, so it's important to be able to access and manipulate them. The attr() function acts both as a getter and a setter.
As with the CSS function, we can query with one parameter, here we're looking for an href, and update the attribute for the second parameter, in this case, to example.com
	*/

}); 