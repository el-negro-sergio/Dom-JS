// Fonctionnalité 1 et 1 bis:

var x = document.querySelector('footer');
var c = 0
x.addEventListener("click",myFunction);

function myFunction() {
  console.log("click");
  c += 1
  console.log(`click number ${c}`);
}

// Fonctionnalité 2 :
var y = document.querySelector('span');
y.addEventListener("click", myF);
function myF() {
   var element = document.getElementById("navbarHeader");
   element.classList.toggle("collapse");
}

//fonctionnalité 3
var b = document.querySelector('.col-md-4').querySelectorAll(".btn")[1];
b.addEventListener("click", myFunc);
function myFunc() {
  document.querySelector('.col-md-4').querySelector("p").style.color = "red";
}

//fonctionnalité 4

var d = document.querySelectorAll('.col-md-4')[1].querySelectorAll(".btn")[1];
d.addEventListener("click", myFunk);
var e = false;
function myFunk() {
  var f = document.querySelectorAll('.col-md-4')[1].querySelector("p");
  if (e) {
    e = false;
    f.style.color = '';
  } else {
    e = true;
    f.style.color = 'green';
  }
}

// // fontionnalité 5
var bootsLink = document.getElementsByTagName('link')[0];
var dbClick = document.querySelector('header');
var head = document.querySelector('head');
var s = false;

var nucleaire = function () {
  if (s == false) {
    bootsLink.parentNode.removeChild(bootsLink);
    s = true;
  } else if (s == true) {
    head.appendChild(bootsLink);
    s= false;
  }
};

dbClick.addEventListener('dblclick', nucleaire);

// fonctionnalité 6

document.querySelectorAll(".card")
.forEach(function (card) {
  card.querySelector("button")
  .addEventListener("mouseover", function () {
    card.querySelector("p")
    .classList.toggle("collapse");
    let img = card.querySelector("img");
    if (img.style.width === "20%") {
      img.style.width = "100%";
    } else {
      img.style.width = "20%";
    }
  });
});
