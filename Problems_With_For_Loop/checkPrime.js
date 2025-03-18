const num = parseInt(process.argv[2]);
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(num + (isPrime ? " is a Prime Number" : " is Not a Prime Number"));
