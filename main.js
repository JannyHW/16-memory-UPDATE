//popup 1st screen
window.onload = function () {
  document.getElementById("btnModal").onclick = function () {
    document.getElementById("modal").style.display = "none";
  };
};
// create 9 pairs of cards with 9 differnt data-id
document.getElementById(
  "container"
).innerHTML = `<div class="card" data-title="1"><i class="fa fa-android"></i></div>
         <div class="card" data-title="2"><i class="fa fa-twitter"></i></div>       
         <div class="card" data-title="3"><i class="fa fa-apple"></i></div>         
         <div class="card" data-title="4"><i class="fa fa-wechat"></i></div>         
         <div class="card" data-title="5"><i class="fa fa-firefox"></i></div>         
         <div class="card" data-title="6"><i class="fa fa-github"></i></div>         
         <div class="card" data-title="7"><i class="fa fa-snapchat"></i></div>        
         <div class="card" data-title="8"><i class="fa fa-reddit"></i></div>       
         <div class="card" data-title="9"><i class="fa fa-envira"></i></div>        
         <div class="card" data-title="1"><i class="fa fa-android"></i></div>
         <div class="card" data-title="2"><i class="fa fa-twitter"></i></div>
         <div class="card" data-title="3"><i class="fa fa-apple"></i></div>
         <div class="card" data-title="4"><i class="fa fa-wechat"></i></div>
         <div class="card" data-title="5"><i class="fa fa-firefox"></i></div>
         <div class="card" data-title="6"><i class="fa fa-github"></i></div>
         <div class="card" data-title="7"><i class="fa fa-snapchat"></i></div>
         <div class="card" data-title="8"><i class="fa fa-reddit"></i></div>
         <div class="card" data-title="9"><i class="fa fa-envira"></i></div>`;

//set state and global variables
let card1 = null;
let card2 = null;
let hasFlipped = false;
let stopClicks = false;
let matchedNum = [];
const cards = document.querySelectorAll(".card");

//shuffle all 18 cards
function shuffle() {
  cards.forEach((card) => {
    let randomNum = Math.floor(Math.random() * 18);
    card.style.order = randomNum;
    //each div of 18 cards has order property
  });
}

//create FN flip to show back card by adding class flip
function flipCard() {
  if (stopClicks) {
    return;
  }
  this.classList.add("flip");

  if (!hasFlipped) {
    hasFlipped = true;
    card1 = this;
    return;
  } else {
    card2 = this;
    hasFlipped = false;

    isMatch();
  }
}
// after fliping them, check matching
function isMatch() {
  // if matched and then remove EventListener n class flip out
  if (card1.dataset.title === card2.dataset.title) {
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
    matchedNum.push(card1, card2);
    result();
    return;
  }
  stopClicks = true;
  setTimeout(() => {
    card1.classList.remove("flip");
    card2.classList.remove("flip");
    stopClicks = false;
  }, 1000);
}

//Wining Alert
function result() {
  if (matchedNum.length > 17) {
    alert(" CONGRATS!!!🚀 You matched all of pairs!🥇");
  }
}

function startGame() {
  shuffle();
  cards.forEach((card) => card.addEventListener("click", flipCard));
}

startGame();
