const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("resetBtn");
const strategy = document.getElementById("strategy");
const msg = document.getElementById("msg");
const AQuiLeTour = document.getElementById("AQuiLeTour");
const modalBody = document.getElementsByClassName("modal-body");

// let jeuActif = true
let turn = "X";

const chiffre = ["", "", "", '', "", "", "", "", ""];
let spaces =[]

//switch le x en o
function switchTurn(currentTurn) {
  if (currentTurn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
  AQuiLeTour.innerHTML = `Tour du joueur : ${turn}`
}

const startGame = () => {
  boxes.forEach((box,index) => {
    box.addEventListener("click", function(event){
     coupDAttaque(index);
    });
  });
};


const coupDAttaque = (index) => {
  // Veux voir où on a cliqué en console
  if (chiffre[index] !== "") {
    return;
  }

  chiffre[index] = turn;
  boxes[index].textContent = turn;
  switchTurn(turn);
  checkWinner();
};



const resetTryAgain = () => {
  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    });
    boxes.forEach((box) => {
      box.textContent = "";
    });
    strategy.textContent = "Play";
    boxes[possible[0]].style.backgroundColor = ""
  });
};

// function checkWhenWin() {
//   if (spaces[0].textContent==="X" && spaces[1].textContent==="X" && spaces[2].textContent==="X"){
//     console.log("hello");
//   }
  
//}

const message ={
  1: "horrizontallement en haut",
  2: "horrizontallement au milieu",
  3: "horrizontallement en bas",
  4: "veticalement au début",
  5: "veticalement au milieu",
  6: "veticalement en fin",
  7: "en diagonal à 30°",
  8: "en diagonal à 120°",
}
// const siPartieTerminee = false
let spacesatPossible =[
	//row
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	//column
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	//diagonal
	[0, 4, 8],
	[2, 4, 6]
]
/* const matrice0 = spacesatPossible[0]
const matrice1 = spacesatPossible[1]
const matrice2 = spacesatPossible[2] */

function checkWinner() {
  for (let i = 0; i < spacesatPossible.length; i++) {

    const possible = spacesatPossible[i];

    const matrice0 = chiffre[possible[0]];
    const matrice1 = chiffre[possible[1]];
    const matrice2 = chiffre[possible[2]];

    if (matrice0 === "" || matrice1 === "" || matrice2 === "") {
      continue;
    }

    if (matrice0 === matrice1 && matrice1 === matrice2) {
      boxes[possible[0]].style.backgroundColor = "green";
      boxes[possible[1]].style.backgroundColor = "green";
      boxes[possible[2]].style.backgroundColor = "green";
      // msg.textContent = `Tu as gagné en ${lol}`
      // resetTryAgain();
    }
  }
}


// if (siPartieTerminee) {
//   if (spaces[id]=null) {
//     if (spaces[0]==spaces[1] && spaces[1]==spaces[2]) {
//       console.log("resussi");
//     }
//   }
  
// }

resetBtn.addEventListener("click", resetTryAgain);
startGame();

 // On vérifie si le joueur a gagné
//  verifGagne()

// =========================================

