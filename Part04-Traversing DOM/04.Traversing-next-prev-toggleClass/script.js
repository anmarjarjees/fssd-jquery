//wait until page is ready
$(document).ready(function () {
    //set <a> element within the clicked paragraph to yellow background:
    $("p").click(function () {
        /* returns all the <a> child elements that are within this paragraph first then changing their bg color: */
        $(this).children("a").css("background-color", "yellow");
    });

    // Toggle the visibility with slide function of the paragraph when a button is clicked 
    $("button").click(function () {
        /*
        Don't forget that slideToggle is for slideUp/slideDown
        Here we just want to use it with prev() function
        */
        $(this).prev().slideToggle('slow');
    });

    // Open the paragraph once the image is clicked using slideDown()
    $("img").click(function () {
        /*
        <img>
        <div>
            <h2>..........
            <p>...........
        </div>
        img (next sibling) ==> div (children) ==> p
        */
        $(this).next().children("p").slideToggle('slow');

        // for more example of using a variable:
        // creating a variable for italic paragraphs
        var pElement = $(this).next().children("p");
        console.log(pElement);
        $(pElement).css("border", "2px solid red");
    });

    // toggle the class "highlight" (for adding a background color) when click to the element with class="card" itself
    $(".card").click(function () {
        $(this).toggleClass("highlight"); // add/remove the class "highlight" ==> show/hide the pink background color
    });
}); // end document.ready()