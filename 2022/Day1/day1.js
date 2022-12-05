const fs = require("fs");
const content = fs.readFileSync("./list.txt", { encoding: "utf8", flag: "r" });

let res = content.split(/\r?\n/);
let res2 = [];
let temp = 0;

for (let i = 0; i <= res.length; i++) {
  if (res[i] != "") {
    //res2.push(res)
    temp = temp + parseInt(res[i]);
  } else {
    res2.push(temp);
    temp = 0;
    continue;
  }
}

console.log(res2);

var largest = res2[0];
var largest2 = res2[0];
var largest3 = res2[0];
var index = 0;
var index2 = 0;
var index3 = 0;

for (var i = 0; i < res2.length; i++) {
  if (largest < res2[i]) {
    largest = res2[i];
    index = i;
  }
}
for (var i = 0; i < res2.length; i++) {
  if (i == index) {
    continue;
  }
  if (largest2 < res2[i]) {
    largest2 = res2[i];
    index2 = i;
  }
}
for (var i = 0; i < res2.length; i++) {
  if (i == index) {
    continue;
  }
  if (i == index2) {
    continue;
  }
  if (largest3 < res2[i]) {
    largest3 = res2[i];
    index3 = i;
  }
}
console.log("Größte: " + largest);
console.log("Index1: " + index);
console.log("Zweitgrößte: " + largest2);
console.log("Index2: " + index2);
console.log("Drittgrößte: " + largest3);
console.log("Index3: " + index3);
console.log("Gesamt: " + (largest + largest2 + largest3));
