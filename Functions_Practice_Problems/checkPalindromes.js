function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split("").reverse().join("");
    return original === reversed;
  }
  
  function checkPalindromes(num1, num2) {
    switch (true) {
      case isPalindrome(num1) && isPalindrome(num2):
        console.log(`${num1} and ${num2} are both palindromes.`);
        break;
      case isPalindrome(num1):
        console.log(`${num1} is a palindrome, but ${num2} is not.`);
        break;
      case isPalindrome(num2):
        console.log(`${num2} is a palindrome, but ${num1} is not.`);
        break;
      default:
        console.log(`Neither ${num1} nor ${num2} is a palindrome.`);
    }
  }
  
  // Example usage:
  checkPalindromes(121, 343); // Both are palindromes
  checkPalindromes(123, 343); // Only 343 is a palindrome
  checkPalindromes(121, 456); // Only 121 is a palindrome
  checkPalindromes(123, 456); // Neither is a palindrome
  