//wait until page is ready
$(document).ready(function () {
    /*
1. Create a click event handler that triggers when a <p> element is clicked.
    */
    $("p").click(function () {
        /*
2. Within the click event handler, using the keyword this, 
target the specific <p> element that was clicked

3. And using the children method target all the <a> elements within this paragraph

4. And using chaining, use the css method to change there background-color to yellow
        */
        //sets <a> element within paragraph  to yellow  

        /* returns all the <a> child elements that are within this paragraph*/
        $(this).children("a").css("background-color", "yellow");
    }); // end click event function

    // Our own extra example:
    $('article').on("click", function () {
        $(this).children("h2").addClass("head-highlight");
    });
}); // end document.ready

/*
5. Within the html click on any paragraph and see the background color of its <a> elements change colour to yellow.
*/