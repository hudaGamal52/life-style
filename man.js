//calculate BmI
const calculatecm=document.getElementById("calculate-cm"),
calculatekg=document.getElementById("calculate-kg")



function calculatemessage() {
const cm=calculatecm.value/100,
kg=calculatekg.value,
bmi =Math.round(kg/(cm*cm))
if (bmi < 18.5)
{
    document.getElementById("calculate-message").innerHTML = `your BMI is ${bmi} and you are skinny😔 `
}
if (bmi < 25)

    document.getElementById("calculate-message").innerHTML = `your BMI is ${bmi} and you are healthy 🤗 `
else
{
    document.getElementById("calculate-message").innerHTML = `your BMI is ${bmi} and you are overweight 😪 `

}  

}
//trainer  [                   ]
function t1() {
    document.getElementById("courses1").innerHTML = "Legs Shoulders Legs Shoulders Hamstrings Shoulders Calves"
  }
  function t2() {
    document.getElementById("courses2").innerHTML = "A cardio, weights and abs workout perfect for those days when you need to do something fun at the gym. Simply grab a heavy and light set of dumbbells and go!"
   
  }
  function t3() {
    document.getElementById("courses3").innerHTML = "This fat burning workout from MusclePharm is such to leave you drenched in sweat and gasping for air."
  }
  function t4() {
    document.getElementById("courses4").innerHTML = "If you're looking for a way to make cardio a lot more fun and productive without it taking up too much time, then this Sledgehammer and Sandbag Tabata Workout is for you!"
  }

//login js

 



//JQUARY
//input
$(document).ready(function(){
  $(".calculate-input").focus(function(){
    $(".calculate-input").css("background-color", "red");
  });
  $(".calculate-input").blur(function(){
    $(".calculate-input").css("background-color", "gray");
  });
});
//buttom

$(document).ready(function(){
  $("#calculate-buttom").click(function(){
    $("#calculate-buttom").css("color", "red")
  });
});

//calculate
// show atert by mouseenter
$(document).ready(function(){
  $(".title").mouseenter(function(){
    alert("the bady mass index(BMI) calculater calculates bady mass index from your weight and height");
  });
});
