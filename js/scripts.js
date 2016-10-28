var isNumber = function(questionalbeInput){
  return (/\d/.test(questionalbeInput));
}

var numberLooper = function(countTo){
  var loopArray =[];

  for (index = 1;index <= countTo ; index++){
    if (index % 15 === 0){
      looparray[index -1] = "ping-pong";
    }else if (index % 5 === 0){
      loopArray[index -1] = "pong";
    }else if (index % 3 ===0){
      loopArray[index-1] = "ping"
    }else {
      loopArray[index -1] = index ;
    }
  }

  return loopArray;
}

$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault()
    var userInput = parseInt($("#number-input").val());
    console.log ("at input the number is " + userInput );
    if (isNumber(userInput) === false){
      alert("Please enter a number.")
    } else{
     var finalList = numberLooper(userInput);
     console.log(finalList);
     for (index = 0; index < userInput; index ++){
       $("#output ul").append("<li>"+finalList[index]+"</li>");
     }
  }


  });
});
