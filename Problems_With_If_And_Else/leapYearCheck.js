const year = parseInt(process.argv[2]);

const isLeapYear = 
  year >= 1000 && year <= 9999 &&
  ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);

console.log(isLeapYear ? "Leap Year" : "Not a Leap Year");
