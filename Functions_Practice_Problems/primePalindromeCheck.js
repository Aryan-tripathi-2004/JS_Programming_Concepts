function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
  }
  
  function checkPrimeAndPalindrome(num) {
    let palindrome = getPalindrome(num);
    
    switch (true) {
      case isPrime(num) && isPrime(palindrome):
        console.log(`${num} is prime and its palindrome ${palindrome} is also prime.`);
        break;
      case isPrime(num):
        console.log(`${num} is prime but its palindrome ${palindrome} is not.`);
        break;
      case isPrime(palindrome):
        console.log(`${num} is not prime but its palindrome ${palindrome} is.`);
        break;
      default:
        console.log(`Neither ${num} nor its palindrome ${palindrome} is prime.`);
    }
  }
  
  // Example usage:
  checkPrimeAndPalindrome(13); // 13 is prime, palindrome 31 is also prime
  checkPrimeAndPalindrome(23); // 23 is prime, palindrome 32 is not
  checkPrimeAndPalindrome(17); // 17 is prime, palindrome 71 is also prime
  checkPrimeAndPalindrome(10); // Neither 10 nor 01 is prime
  