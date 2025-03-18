const numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 900) + 100);

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);