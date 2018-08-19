var cards = ["queen", 'queen', 'king', 'king'];
var cardsInPlay =[]

cards[0]= "cardOne";
cards;

cardsInPlay.push("cardOne");
cardsInPlay;

console.log("User flipped queen");

var cardTwo = "king";

cards[2]="cardTwo";

cardsInPlay.push("cardTwo");
cardsInPlay;

console.log("User flipped king");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay [1]) {
		alert("You've found a match!");
	} else {
		alert ("Sorry, try again");
	}
}

