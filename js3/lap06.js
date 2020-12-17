var food = prompt("what is you favorite food?");
alert(food + " YummY! Delesious");
alert("Check My Delesious  " + food);

var numOne= prompt("Enter Your weight:  ");
var numTow = prompt("Enter Your height");
alert("You Are Perfect! Give Love to Your-Self ");

function know() {
    var answer = prompt("Do You enjoy cooking?");
    while(answer !== "yes") {
      alert("You should be!!");
      answer = prompt("does food make you happy?");
    }
    alert ("You arrived to you destenation =D")
  }
know();

function select() {
  let getdish = function(){
    let userInput= prompt("Select your dish: pasta / mansaf / msakhan / chicken");
    let dish= "";

    while(userInput !== "pasta" && userInput !== "mansaf" && userInput !== "chicken" && userInput !== "msakhan" ){
      userInput = prompt("Please select you dish: pasta / mansaf / msakhan / chicken");
    }

    if (userInput=== "chicken"){
      dish='<img src="chekparm.jpg">'
    } else if (userInput==="mansaf"){
      dish= '<img src="download.jpg">'
    } else if (userInput=== "msakhan"){
      dish= '<img src="ms5n.jpg"'
    } else if (userInput==="pasta"){
      dish= '<img src="feettch.jpg">'
    }
    return dish;
  }

  let howMany = function () {
    let count = prompt("How many dishes do you want to cook?");
  
    while(count === "" || isNaN(count)) {
      count = prompt("Please enter the number of dishes do you want to cook!");
    }
  
    return count;
  }

  let dishpic = function() {
    let dish = getdish();
    let total = howMany();
    let result = "";
  
    for(let i = 0; i < total; i++) {
      result = result + '<p>dish number #' + i + " " + dish + '</p>'
    }
  
    alert("scroll down to see your dish/es");
    return result;
  }
}
select();
 
