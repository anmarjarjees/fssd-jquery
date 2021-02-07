/*
1. Create an on click (not a click) event handler,
that triggers when elements with the class of module-nav are clicked.
*/
$(".module-nav").click(function () {
    /*
    2. Within the on click event handler, 
    use: let, to declare a variable with the name: allModulesCardsSelector 
    then assign it the value ".card"
    */
    let allModulesCardsSelector = $('.card');

    /*
    3. Within the on click event handler, 
    use let, to declare a variable with the name: thisModuleCardsSelector 
    then assign it the expression "." + this.id + "-card"
    */
    let thisModuleCardsSelector = "." + this.id + "-card";
    console.log(thisModuleCardsSelector); // for testing

    /*
    4. Target the elements using the variable allModulesCardsSelector value as a class name, 
    and use the removeClass method passing in the class name card-highlight
    */
    $(allModulesCardsSelector).removeClass("card-highlight");

    /*
    5. Target the elements using the variable thisModuleCardsSelector value as a class name, and use the addClass method passing in the class name card-highlight
    */
    $(thisModuleCardsSelector).addClass("card-highlight");
});

/*
6. Now click on the <li> elements Module1, Module 2 or Module 3
and the background of the cards associated with them will change
to having a red background.
*/