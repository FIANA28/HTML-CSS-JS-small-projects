/*check off Specific Todos By Clicking
$("li").click(function(){
    //if li is gray then
    if($(this).css("color") === "rgb(128, 128, 128)"){
        //turn it black
        $(this).css ({
            color: "black",
            textDecoration: "none"
           });
    }
    //else
     else {
      //turn it gray  
      $(this).css ({
       color: "gray",
       textDecoration: "line-through"
      });
    }
/* or in two line not in Object: $(this).css("color", "gray");
   $(this).css("text-decoration", "line-through");
});*/

// or with class in css

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
// click on X to delete Todo
// add event to prevent bubble
$("ul").on("click", "span", function(event) {
 $(this).parent().fadeOut(function(){
     $(this).remove();
  });
 event.stopPropagation();
});

// functionality: creating new Todos//
$("input[type='text']").keypress(function(){
  if(event.which === 13){
      //grubbing ne todo text from input to console//
      var todoText = ($(this).val());
      //clear up the input//
      $(this).val("");
      //create a new li and add to ul//
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

//because on new added element click() dosnt work, we need to change for on(), but with some other changes in code too// look line 25
/* $("li").click(function(){
    $(this).toggleClass("completed");
});
  $("span").click(function(event) {
    $(this).parent().fadeOut(function(){
        $(this).remove();
     });
    event.stopPropagation();
   });*/

   $("#toggle-form").click(function(){
     $("input[type='text']").fadeToggle();
   });