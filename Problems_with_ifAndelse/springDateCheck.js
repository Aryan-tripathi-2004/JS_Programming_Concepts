const day = parseInt(process.argv[2]);
const month = parseInt(process.argv[3]);

const isValid =
  (month === 3 && day >= 20) ||
  (month > 3 && month < 6) ||
  (month === 6 && day <= 20);

console.log(isValid);
