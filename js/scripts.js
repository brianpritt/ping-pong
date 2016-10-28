//
//Business//
//

var isNumber = function(questionalbeInput){//checks to see if input is a number true = is false = not
  return (/\d/.test(questionalbeInput));
}//end isNumber

var isPositive =function(questionalbeInput){
  return (questionalbeInput > 0);
}//end isPositive

var numberLooper = function(countTo){//loops through range of 1 to userInput, makes an array and replaces some numbers with strings
  var loopArray =[];

  for (index = 1;index <= countTo ; index++){
    if (index % 15 === 0){
      loopArray[index -1] = "<li class='ping-pong'>ping-pong | </li>";
      console.log(index);
    }else if (index % 5 === 0){
      loopArray[index -1] = "<li class='pong'>pong | </li>";
    }else if (index % 3 === 0){
      loopArray[index-1] = "<li class='ping'>ping |  </li>"
    }else {
      loopArray[index -1] = "<li>" + index + " | </li>" ;
    }//end else
  }//end for loop
  return loopArray;
}//end numberLooper

//
//User Interface//
//

$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault()

    $("#output li").remove(); //clears output section so page doesn't need to be refreshed
    var userInput = parseInt($("#number-input").val());
    $("#number-input").val("");//clears input field
    $(".warning-label").text("")


    if (isNumber(userInput) === false){
      $(".warning-label").text("Please enter numbers only.")

    } else if(isPositive(userInput)=== false){
      $(".warning-label").text("Please enter numbers greater than 0.")
    } else{
     var finalList = numberLooper(userInput);
     $("#output h3").hide();
     for (index = 0; index < userInput; index ++){
       $("#output ul").append(finalList[index]);
     }//end for loop
  }//end else


});//end event listener for submit
});//end document
