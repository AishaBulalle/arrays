"use strict";

const bogstaver = ["a", "b", "c", "d", "e", "f", "g", "h"];

const etBogstav = bogstaver[4];
const etAndetBogstav = bogstaver[7];
console.log(bogstaver);
bogstaver[4] = "*";
console.log(bogstaver);

const newArr = bogstaver;
bogstaver[6] = "*";
console.log(bogstaver);
