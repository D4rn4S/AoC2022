const fs = require("fs");
const content = fs.readFileSync("./list.txt", { encoding: "utf8", flag: "r" });

let sum = 0; 
const lol2 = content.split("\n").filter((word) => word != ""); 

lol2.forEach((element) => { 
const a = element.slice(0, element.length / 2);
const b = element.slice(element.length / 2, element.length);

for (let i = 0; i < b.length; i++) {
  if (b.includes(a[i])) {
    if (a[i] == a[i].toLowerCase()) {
      sum += a[i].charCodeAt(0) - 96;
    } else {
      sum += a[i].charCodeAt(0) - 38;
    }
    break;
  }
}
}); 
console.log(sum);  

let sum2 = 0;
for (let p = 0; p < lol2.length; p += 3) {
    const first = [...lol2[p]];
    const second = lol2[p + 1];
    const third = lol2[p + 2];
    let hit = false;

first.forEach((element) => {
    if (second.includes(element) && third.includes(element) && !hit) {
        hit = true;
        if (element == element.toLocaleLowerCase()) {
          sum2 += element.charCodeAt(0) - 96;
        } else {
          sum2 += element.charCodeAt(0) - 38;
        }
    }
});
}
console.log(sum2);

// let res = content.split(/\r?\n/);

// let temp = res[0];
// console.log(temp);
// console.log(temp.length / 2);
// console.log(temp.slice(0, temp.length / 2));
// console.log(temp.slice(temp.length / 2, temp.length));

// let bags = [];

// res.map((x) => {
//   let bag = [];
//   let firstHalf = x.slice(0, x.length / 2);
//   let secondHalf = x.slice(x.length / 2, x.length);
//   bag.push(firstHalf, secondHalf);
//   bags.push(bag);
// });

// console.log(bags);
// let score = 0;

// bags.map((bag) => {
//   console.log(bag);
//   for (let i = 0; i < bag[0].length; i++) {
//     console.log(bag[0][i]);
//     for (let j = 0; j < bag[1].length; j++) {
//       console.log(bag[1][j]);
//       if (bag[0][i] === bag[1][j]) {
//         console.log("TREFFER TREFFER TREFFER");
//         calcScore(bag[0][i], bag[1][j]);
//       }
//     }
//   }
// });

// function calcScore(char1, char2) {
//   console.log(char1, char2);
//   switch (char1) {
//     case "a":
//       score += 1;
//       break;
//     case "b":
//       score += 2;
//       break;
//     case "c":
//       score += 3;
//       break;
//     case "d":
//       score += 4;
//       break;
//     case "e":
//       score += 5;
//       break;
//     case "f":
//       score += 6;
//       break;
//     case "g":
//       score += 7;
//       break;
//     case "h":
//       score += 8;
//       break;
//     case "i":
//       score += 9;
//       break;
//     case "j":
//       score += 10;
//       break;
//     case "k":
//       score += 11;
//       break;
//     case "l":
//       score += 12;
//       break;
//     case "m":
//       score += 13;
//       break;
//     case "n":
//       score += 14;
//       break;
//     case "o":
//       score += 15;
//       break;
//     case "p":
//       score += 16;
//       break;
//     case "q":
//       score += 17;
//       break;
//     case "r":
//       score += 18;
//       break;
//     case "s":
//       score += 19;
//       break;
//     case "t":
//       score += 20;
//       break;
//     case "u":
//       score += 21;
//       break;
//     case "v":
//       score += 22;
//       break;
//     case "w":
//       score += 23;
//       break;
//     case "x":
//       score += 24;
//       break;
//     case "y":
//       score += 25;
//       break;
//     case "z":
//       score += 26;
//       break;
//     case "A":
//       score += 27;
//       break;
//     case "B":
//       score += 28;
//       break;
//     case "C":
//       score += 29;
//       break;
//     case "D":
//       score += 30;
//       break;
//     case "E":
//       score += 31;
//       break;
//     case "F":
//       score += 32;
//       break;
//     case "G":
//       score += 33;
//       break;
//     case "H":
//       score += 34;
//       break;
//     case "I":
//       score += 35;
//       break;
//     case "J":
//       score += 36;
//       break;
//     case "K":
//       score += 37;
//       break;
//     case "L":
//       score += 38;
//       break;
//     case "M":
//       score += 39;
//       break;
//     case "N":
//       score += 40;
//       break;
//     case "O":
//       score += 41;
//       break;
//     case "P":
//       score += 42;
//       break;
//     case "Q":
//       score += 43;
//       break;
//     case "R":
//       score += 44;
//       break;
//     case "S":
//       score += 45;
//       break;
//     case "T":
//       score += 46;
//       break;
//     case "U":
//       score += 47;
//       break;
//     case "V":
//       score += 48;
//       break;
//     case "W":
//       score += 49;
//       break;
//     case "X":
//       score += 50;
//       break;
//     case "Y":
//       score += 51;
//       break;
//     case "Z":
//       score += 52;
//       break;
//   }
// }
//  console.log(score)