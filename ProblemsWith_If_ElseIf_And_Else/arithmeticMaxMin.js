const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const c = parseInt(process.argv[4]);

const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

let max = result1;
if (result2 > max) {
  max = result2;
} else if (result3 > max) {
  max = result3;
} else if (result4 > max) {
  max = result4;
}

let min = result1;
if (result2 < min) {
  min = result2;
} else if (result3 < min) {
  min = result3;
} else if (result4 < min) {
  min = result4;
}

console.log("Results:", result1, result2, result3, result4);
console.log("Maximum Value:", max);
console.log("Minimum Value:", min);
