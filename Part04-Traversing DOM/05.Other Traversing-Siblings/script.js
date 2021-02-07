//will wait until page ready
/*
Note: The code here is the same for
"Other Traversing Methods - Challenge 3"
*/
$(document).ready(function () {
  /* 
  When table header (th element) is clicked (click event): 
  1- removes "selection" class from all other table rows (Second Step)

  2- adds the "selection" class to this table headers (th) row only, in other words only the <td> elements that are in the same row (First Step)
  */
  $("th").click(function () {
    // the answer of point 1:[Remove the class]
    // class "selection" is added to the td element which the child of tr element
    $("tr").children().removeClass("selection"); 
    
    // Other solution beyond the challenge:
    // $("tr td").removeClass("selection");

    // the answer of point 2: [Add the class]
    $(this).siblings().addClass("selection");
  })
});