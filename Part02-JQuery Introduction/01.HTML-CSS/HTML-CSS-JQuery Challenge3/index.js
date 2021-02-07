/*
1. Create a variable named fontFamily and using the JQuery css method assign it the value of the font-family used for <p> elements
*/
var fontFamily = $("p").css("font-family");
// for  test:
// alert(fontFamily); // Roboto, sans-serif

/*
2. Using JQuery target the <h1> element: using the text method pass it the variable fontFamily, which will change the text displayed by this element
*/
$("h1").text(fontFamily);
/*
3. Using the css method again this time target all the elements with the class card-panel and set the property background-color to green
*/
$(".card-panel").css("background-color", "green")
