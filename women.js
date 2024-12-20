
//JavaScript

var p1 = document.createElement("p");
var text1= document.createTextNode("Yoga is a practice that connects the body, breath, and mind. "+
"It uses physical postures, breathing exercises, and meditation to improve overall health. "+
"Yoga was developed as a spiritual practice thousands of years ago. "+
"Today, most Westerners who do yoga do it for exercise or to reduce stress. "+
"There are six branches of yoga. Each branch represents a different focus and set of characteristics.");
p1.appendChild(text1);
var element1 = document.getElementById("div1");
element1.appendChild(p1);


var p2 = document.createElement("p");
var text2= document.createTextNode("Zumba is an interval-style dance fitness party that combines low-intensity "+
"and high-intensity moves. You'll burn lots of calories as you move to the rhythm with Latin-inspired dance moves. "+
"The best part of it all is that it doesn't even feel like exercise.");
p2.appendChild(text2);
var element2 = document.getElementById("div2");
element2.appendChild(p2);


var p3 = document.createElement("p");
var text3= document.createTextNode("Cardio is defined as any type of exercise that gets your heart rate up "+
"and keeps it up for a prolonged period of time. Your respiratory system will start working harder "+
"as you begin to breathe faster and more deeply.");
p3.appendChild(text3);
var element3 = document.getElementById("div3");
element3.appendChild(p3);


var p4 = document.createElement("p");
var text4= document.createTextNode("Weight Lifting is requires lifting of heavy weights in a progressive manner. "+
"It not only tests the physical prowess of an individual but also his/her rate of force generation, "+
"i.e., ballistic actions of lifting the weights in minimum amount of time.");
p4.appendChild(text4);
var element4 = document.getElementById("div4");
element4.appendChild(p4);

document.getElementById("Button1").onclick = function () {
    location.href = "#readmore"; 
};
document.getElementById("Button2").onclick = function () {
    location.href = "#readmore"; 
};
document.getElementById("Button3").onclick = function () {
    location.href = "#readmore"; 
};
document.getElementById("Button4").onclick = function () {
    location.href = "#readmore"; 
};

function f1(){
var nname = prompt("Please Enter Your Name: ","full name");
if (nname != null) {
    var age = prompt("Thanks for Writting your name Please Enter Your Age: ","age in years")
    if(age <= 30){
        alert("You will be in group A")
    }
    else if(age >= 30){
        alert("You will be in group B")
    }
    else{
        alert("Please Enter Your Age!!!!!")
    }
}
else{
    alert("Join Failed Please Enter Your Name!!!!!!")
}
}


//JQuery

$(document).ready(function(){
    $("#div1 #readmore").click(function(){
      $("#div1 p").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#div2 #readmore").click(function(){
      $("#div2 p").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#div3 #readmore").click(function(){
      $("#div3 p").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#div4 #readmore").click(function(){
      $("#div4 p").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("h6").click(function(){
      $(this).css("color", "yellow");
    });
  });
  $(document).ready(function(){
    $("#jjj").mouseenter(function(){
      alert("Regular physical activity is vital for good physical and mental health. "+
      "It helps improve your overall health and fitness, maintain a healthy weight, "+
      "reduce your risk for many chronic diseases and promote good mental health.");
      $(this).css("color", "blue");
    });
  });
  $(document).ready(function(){
    $("div nav-name").click(function(){
      $("#12345").fadeOut("slow");
    });
  });
  
