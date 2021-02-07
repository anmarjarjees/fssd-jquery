/*
$(document).ready(function() {

});

The reason for this is that it's bad practice to run jQuery before the page is fully loaded, as you might be trying to manipulate something that has not yet been rendered on the webpage.

So what we do here is put this ready function, and then anything inside the curly brackets will only run once the DOM is fully loaded and once the HTML is fully rendered.
*/
$(document).ready(function () {
    /*
       Changing the text decoration of h2 

       Notice that code below are commented:
    */
    // $("h2").css("text-decoration", "underline"); // underlines all <h2> elements
    // $("ul").css("border", ""); // add a border to the list
    /*
   Notes: 
   As soon as the page is fully loaded, those CSS changes will be made.
   And these would be permanent changes, 
   as opposed to the temporary ones that we were able to do in chrome developer tools
   
   Using this ".CSS" function is not a good idea, as it changes the HTML using inline styles.
   */
    $("h2").addClass("underline")
    $("ul").addClass("border");

    /*
We can also use the "removeClass".
    */
    $("h2").removeClass("underline")
    $("ul").removeClass("border");

    // for more example you can add the following 2 lines also:
    /*
It is, of course, a table and pseudo classes, such as odd and even, are a very good way of adding style to every second row of a table.
    */
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
});
