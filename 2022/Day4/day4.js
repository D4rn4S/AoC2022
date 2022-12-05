const fs = require("fs");
const content = fs.readFileSync("./list.txt", { encoding: "utf8", flag: "r" });
let res = content.split(/\r?\n/);
let liste = []; //formatierte liste
for (let i = 0; i < res.length; i++) {
  liste.push(res[i].split(","));
}
let number1String = [];
let number2String = [];
let score = 0;
let score2 = 0;

for (let j = 0; j < liste.length; j++) {
  //console.log(liste[j][0]);
  number1String = liste[j][0].split("-");
  number2String = liste[j][1].split("-");
  if (
    (parseInt(number1String[0]) <= parseInt(number2String[0]) &&
      parseInt(number1String[1]) >= parseInt(number2String[1])) ||
    (parseInt(number1String[0]) >= parseInt(number2String[0]) &&
      parseInt(number1String[1]) <= parseInt(number2String[1]))
  ) {
    score++;
  }
  if (
    parseInt(number1String[0]) <= parseInt(number2String[0]) &&
    parseInt(number1String[1]) >= parseInt(number2String[0])
  ) {
    score2++;
  } else if (
    parseInt(number2String[0]) <= parseInt(number1String[0]) &&
    parseInt(number2String[1]) >= parseInt(number1String[0])
  ) {
    score2++;
  }
}

console.log(number1String);
console.log(number2String);
console.log("Aufgabe1: " + score);
console.log("Aufgabe2: " + score2);
