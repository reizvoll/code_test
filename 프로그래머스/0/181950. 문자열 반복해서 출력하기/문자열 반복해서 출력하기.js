const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").toString().trim().split(" ");
const str = input[0];
const n = Number(input[1]);

console.log(str.repeat(n));