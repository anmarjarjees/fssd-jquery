//wait until page is ready
$(document).ready(function () {
    // **************************************************************
    // The following code is for "Traversing Sideways - Challenge 2" 
    // **************************************************************
    /*
 1. Within the button click event handler, 
 using the this keyword and the relationship between the button and the <p> element, 
 display the p element by clicking on the button, and using .slideDown() 
 */
    $('button').click(function () {
        /*
            To review: remember that 'this' is JS keyword so we DO NOT write it inside a quote or double quotes:
            $(this) => Correct
            $('this') => Wrong! :-(
        */

        // $(this) ==> if someone clicks only this current <button> element:
        $(this).prev().slideDown('slow');
    });

    /*
     2.Within the h2 click event handler, using the this keyword and the relationship between the h2 element and the <p> element, 
     hide the p element only (without the button element) by clicking on the h2 element, and using .slideUp():
     
     <h2></h2>
     <div>
        <p></p>
        <button></button>
     </div>
     */
    $('h2').click(function () {
        // this => the current one that we are clicking:
        // $(this).next().slideUp(); ==> this code will hide the entire div that contains p nad button elements
        // next() ==> will give us the div element
        // children() ==> to specify which child element inside the div that we want to hide
        $(this).next().children('p').slideUp();
    });
}); // end (document).ready()

