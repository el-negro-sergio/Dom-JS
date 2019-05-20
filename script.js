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


var b = document.getElementsByClassName('btn btn-sm btn-outline-secondary');
b.addEventListener("click", myFunc);
function myFunc() {
  var a = document.getElementsByClassName('col-md-4').style.color = "red";
}






// var editButton1 = document.querySelector(".col-md-4").querySelectorAll(".btn")[1];
// var cardText1 = document.querySelector(".col-md-4").querySelector("p");
//
// function changeColorRed() {
// 	cardText1.style.color = "red";
// };
//
// editButton1.addEventListener("click", changeColorRed);
//
// //fonctionnalité 4
//
// var editButton2 = document.querySelectorAll(".col-md-4")[1].querySelectorAll(".btn")[1];
// var cardText2 = document.querySelectorAll(".col-md-4")[1].querySelector("p");
//
// function changeColorGreen() {
// 	var result = cardText1.classList.toggle("c");
// 	if (result == true) {
// 		cardText2.style.color = "green";
// 	} else if (result == false) {
// 		cardText2.style.color = "black";
// 	}
// };
//
// editButton2.addEventListener("click", changeColorGreen);
//
// // fontionnalité 5
//
// var bootstrap = document.head.querySelector("link");
// var navbar = document.querySelector("header");
//
// navbar.addEventListener("dblclick", removeBootstrap)
//
// function removeBootstrap() {
// 	var result1 = navbar.classList.toggle("c");
// 	if (result1 === true) {
// 		bootstrap.remove()
// 	} else if (result1 === false) {
// 		var headID = document.getElementsByTagName("head")[0];
// 		var x = document.createElement("link");
// 		x.rel = "stylesheet"
// 		headID.appendChild(x)
// 		x.href ='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
// 		x.integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//
// 	}
// }
//
// // fonctionnalité 6
//
// let viewButton = document.querySelectorAll('.btn-group > .btn-success');
// var cardImage = document.querySelectorAll(".card")[0].querySelector("img");
// var allCard = document.querySelector(".album").querySelectorAll(".card");
//
// for (let i = 0; i < allCard.length; i++) {
// 	viewButton[i].addEventListener("mouseover", reduceCard)
// 	function reduceCard() {
// 		var result2 = viewButton[i].classList.toggle("c");
// 		if (result2 === true) {
// 			document.querySelectorAll(".col-md-4")[i].querySelector("p").style.display = "none";
// 			document.querySelectorAll(".card")[i].querySelector("img").style.width = "20%";
// 		} else if (result2 === false) {
// 			document.querySelectorAll(".col-md-4")[i].querySelector("p").style.display = "block";
// 			document.querySelectorAll(".card")[i].querySelector("img").style.width = "100%";
// 		}
// 	};
// };
//
// // fonctionnalité 7
//
