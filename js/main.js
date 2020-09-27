
// Setting and running SVG draw on effect

var mySVG = $('#line-map').drawsvg();

mySVG.drawsvg('animate');

var mySVG2 = $('#train-head-on').drawsvg();

mySVG2.drawsvg('animate');

var mySVG3 = $('#omnibus').drawsvg();

mySVG3.drawsvg('animate');

var mySVG4 = $('#entrance').drawsvg();

mySVG4.drawsvg('animate');

var mySVG5 = $('#metrocard').drawsvg();

mySVG5.drawsvg('animate');

var mySVG6 = $('#buildings').drawsvg();

mySVG6.drawsvg('animate');

var mySVG7 = $('#plans').drawsvg();

mySVG7.drawsvg('animate');

var mySVG8 = $('#sign').drawsvg();

mySVG8.drawsvg('animate');

var mySVG9 = $('#empty-car').drawsvg();

mySVG9.drawsvg('animate');

var mySVG10 = $('#snow').drawsvg();

mySVG10.drawsvg('animate');

var mySVG11 = $('#quiz-lines').drawsvg();

mySVG11.drawsvg('animate');

var mySVG12 = $('#sources-lines').drawsvg();

mySVG12.drawsvg('animate');




// var mySVG = $('#tracks').drawsvg();

var mySVG13 = $("#tracks").drawsvg({
  duration: 800,
  stagger: 40,
});

mySVG13.drawsvg('animate');

var mySVG14 = $('#penn').drawsvg({
  duration: 3000,
  stagger: 80
});

mySVG14.drawsvg('animate');




// Tooltip for each dot on bottom section


$('.dot-title').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 70,
});

$('.dot-buildings').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 130,
});

$('.dot-omnibus').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 120,
});

$('.dot-tracks').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 120,
});

$('.dot-snow').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 115,
});

$('.dot-plans').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 145,
});

$('.dot-entrance').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 165,
});

$('.dot-penn').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 108,
});

$('.dot-empty-car').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 128,
});

$('.dot-metrocard').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 115,
});

$('.dot-train-head-on').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 155,
});

$('.dot-sign').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 135,
});

$('.dot-quiz').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 55,
});

$('.dot-sources').tipso({
  background  :'rgba(244,37,22, 1)',
  width: 80,
});


// Quiz setup

const myQuiz = [
  {
    'q': 'Before the subway, what was the primary form of public transit in New York? ',
    'options': [
      'Ferries',
      'Above-ground trains',
      'Rickshaws',
      'Stagecoaches'
    ],
    'correctIndex': 3,
    'correctResponse': 'Correct! Stagecoaches were hugely popular in New York during the nineteenth century.',
    'incorrectResponse': 'Incorrect. Stagecoaches were the most popular form of transit in New York during the nineteenth century.'
  },
  {
    'q': 'How much did it cost to ride the subway when it first opened?',
    'options': [
      'A penny',
      'A nickel',
      'A dime',
      'A quarter'
    ],
    'correctIndex': 1,
    'correctResponse': 'Correct! In 1904, riders could travel across New York for a nickel.',
    'incorrectResponse': 'Incorrect. Rides cost a nickel when the subway first opened.'
  },
  {
    'q': 'When did the subway experience its highest annual ridership?',
    'options': [
      '1910s',
      '1940s',
      '1970s',
      '2000s'
    ],
    'correctIndex': 1,
    'correctResponse': 'Correct! Subway ridership surpassed 2 billion passengers in 1946.',
    'incorrectResponse': 'Incorrect. Subway ridership hit its peak in the 1940s.'
  },
  {
    'q': 'Which system currently maintains the subway?',
    'options': [
      'The Port Authority of New York and New Jersey',
      'The Manhattan Railway Company',
      'The Metropolitan Transportation Authority',
      'The New York City Transit Authority'
    ],
    'correctIndex': 2,
    'correctResponse': 'Correct! The MTA has operated the subway since 1968.',
    'incorrectResponse': 'Incorrect. The MTA has operated the subway since 1968.'
  },
  {
    'q': 'Which  of the following challenges does the subway currently face?',
    'options': [
      'Inaccessible stations',
      'Declining infrastructure',
      'Regular delays',
      'All of the above'
    ],
    'correctIndex': 3,
    'correctResponse': 'Correct! Inaccessibility, infrastructure, and delays all remain issues for the subway.',
    'incorrectResponse': 'Incorrect. Inaccessibility, infrastructure, and delays all remain issues for the subway.'
  }
]

$('#quiz').quiz({
  questions: myQuiz
});

function myFunction() {
  console.log("Page is loaded");
}

// $(document).ready(function() {
//   $('.prev, .next').on('click', function() {
//     location.reload();
//   });
// });



// document.getElementById("forward").onload = function() {myFunction()};
//
// function myFunction() {
//   mySVG.drawsvg('animate');
// }

// document.getElementById("forward").onClick = function() {myFunction()};
//
// function myFunction() {
//   mySVG2.drawsvg('animate');
// }

// Slideshow setup--I ran into display issues with each JQuery plugin I tried, but creating my own worked better

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// I unsuccessfully tried a lot of ways to make each drawsvg play when its slide loaded...the confusion can be seen below.


// if (slide1.css('display') == 'block')
// {
//     mySVG.drawsvg('animate');
// }
//
//


// function checkDisplay('slide1'){
//   return $('slide1').css('display') == 'block';
// }
//
// if(checkDisplay("#slide1")){
//   console.log("Display is Block")
// }
// else {
//   console.log("Display is NOT Block")
// }



// if (slides.style.display = "block") {
//   mySVG.drawsvg('animate');
// }

// if (document.getElementsByClassName("slide1").style.display="block") {
//   mySVG.drawsvg('animate');
// }

// if (slide1.style.display="block") {
//   mySVG.drawsvg('animate');
// }

// if (currentSlide=1) {
//   mySVG.drawsvg('animate');
// }
//
// if (currentSlide=2) {
//   mySVG6.drawsvg('animate');
// }
//
// if (currentSlide=3) {
//   mySVG3.drawsvg('animate');
// }





// var currentSlide = slideIndex(n);
//
// while (currentSlide<=14) {
//   if (currentSlide=n) {
//     mySVG.drawsvg('animate');
//   }
//   i++;
// }

// var i = 1;
//
// while (i<=14) {
//   mySVG.drawsvg('animate');
//   i++;
// }

// if (slideIndex = 1) {
//   console.log(hello!)
// }


// function drawOn (n) {
//   mySVG.drawsvg('animate');
// }

// function drawOn(n) {
//   drawSlides(slideIndex = n)
// }
//
// function drawSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//       mySVG.drawsvg('animate');
//   }
// }



// var x = currentSlide(n);
//
// while (x<=14) {
//     mySVG.drawsvg('animate');
//     i++;
// }
//
// if (x=3) {
//   mySVG.drawsvg('animate');
//
// }
//
// for (i = 0; i < slides.length; i++) {
//   mySVG.drawsvg('animate');
//   i++;
// }
