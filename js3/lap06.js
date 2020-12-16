var food = prompt("what is you favorite food?");
alert(food + " YummY! Delesious");
alert("Check My Delesious  " + food);

var numOne= prompt("Enter Your weight:  ");
var numTow = prompt("Enter Your height");
alert("You Are Perfect! Give Love to Your-Self ");

function know() {
    var answer = prompt("Are you satisfide with your-self? ");
    if(answer === "yes") {
      alert("You are Awesome:D Keep it up!");
    } else {
      alert("You should be =) You are amazing!");
    }
  }
know(); 

let cooking = function() {
  let cooking = prompt("Enter the type of food that you want: Italian ? Arabian ? Indian ?");
  let dish ="";

  while(cooking !== "Italian" && cooking !== "Arabian" && cooking !== "Indian") {
    cooking = prompt("nter the type of food that you want: Italian ? Arabian ? Indian ?");
  }

  if(cooking === "Italian") {
    dish = '<'
  } else if (cooking === "aArabian") {
    dish = 'MANSAF'
  } else if (cooking === "Indian") {
    dish = 'chappati with kabab'
  }

  return dish;
}

let howMany = function () {
  let count = prompt("How many cat do you want?");

  while(count === "" || isNaN(count)) {
    count = prompt("Please enter the number of cats you want!!");
  }

  return count;
}

let showCat = function() {
  let cat = getCat();
  let total = howMany();
  let result = "";

  for(let i = 0; i < total; i++) {
    result = result + '<p>cat number #' + i + " " + cat + '</p>'
  }

  alert("Please scroll down to see your cat/s");
  return result;
}





