const fs = require("fs");
const content = fs.readFileSync("./list.txt", { encoding: "utf8", flag: "r" });
let res = content.split(/\r?\n/);

// A = Rock | 1 Punkt
// B = Paper | 2 Punkte
// C = Scissors | 3 Punkte
// X = Rock | 1 Punkt
// Y = Paper | 2 Punkte
// Z = Scissiors | 3 Punkte
// Sieg = 6 Punkte
// Unentschieden = 3 Punkte
// Niederlage = 0

//const result = str.trim().split(/\s+/);
let spielzug = [];
let punktzahl = 0;

for (let i = 0; i < res.length; i++) {
  spielzug.push(res[i].split(/\s/));
}
//--------spielzug-spieler----------

for (let i = 0; i < spielzug.length; i++) {
  let p1 = spielzug[i][0];
  let p2 = spielzug[i][1];
  switch (p1) {
    case "A": //gegner macht stein
      switch (p2) {
        case "X": //stein
          punktzahl = punktzahl + 4; //+1 für stein +3 für draw
          break;
        case "Y": //papier
          punktzahl = punktzahl + 8; //+1 für papier +6 für win
          break;
        case "Z": //schere
          punktzahl = punktzahl + 3; //+1 für schere +0 für lose
          break;
      }
      break;
    case "B": //gegner macht papier
      switch (p2) {
        case "X": //stein
          punktzahl = punktzahl + 1; //+1 für stein +0 für loose
          break;
        case "Y": //papier
          punktzahl = punktzahl + 5; //+2 für papier +3 für draw
          break;
        case "Z": //schere
          punktzahl = punktzahl + 9; //+3 für schere +6 für win
          break;
      }
      break;
    case "C": //gegner mach Schere
      switch (p2) {
        case "X": //stein
          punktzahl = punktzahl + 7; //+1 für stein +6 für win
          break;
        case "Y": //papier
          punktzahl = punktzahl + 2; //+2 für schere +0 für lose
          break;
        case "Z": //schere
          punktzahl = punktzahl + 6; //+3 für schere +3 für draw
          break;
      }
      break;
  }
}
console.log("das Ergebnis ist: " + punktzahl);

// Aufgabe 2:
// X = lose
// Y = draw
// Z = win

let punktzahl2 = 0;

for (let i = 0; i < spielzug.length; i++) {
  let p1 = spielzug[i][0];
  let p2 = spielzug[i][1];
  switch (p1) {
    case "A": //gegner macht stein
      switch (p2) {
        case "X": //lose | schere
          punktzahl2 = punktzahl2 + 3; //+3 für schere +0 für lose
          break;
        case "Y": //draw
          punktzahl2 = punktzahl2 + 4; //+1 für stein +3 für draw
          break;
        case "Z": //win
          punktzahl2 = punktzahl2 + 8; //+2 für papier +6 für win
          break;
      }
      break;
    case "B": //gegner macht papier
      switch (p2) {
        case "X": //lose
          punktzahl2 = punktzahl2 + 1; //+1 für stein +0 für loose
          break;
        case "Y": //draw
          punktzahl2 = punktzahl2 + 5; //+2 für papier +3 für draw
          break;
        case "Z": //win
          punktzahl2 = punktzahl2 + 9; //+3 für schere +6 für win
          break;
      }
      break;
    case "C": //gegner mach Schere
      switch (p2) {
        case "X": //lose
          punktzahl2 = punktzahl2 + 2; //+2 für papier +0 für lose
          break;
        case "Y": //draw
          punktzahl2 = punktzahl2 + 6; //+3 für schere +3 für draw
          break;
        case "Z": //win
          punktzahl2 = punktzahl2 + 7; //+1 für stein +6 für win
          break;
      }
      break;
  }
}
console.log("das Ergebnis für Aufgabe 2 ist: " + punktzahl2);
