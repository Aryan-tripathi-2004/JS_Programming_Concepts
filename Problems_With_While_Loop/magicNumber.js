const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let low = 1, high = 100;
  
  console.log("Think of a number between 1 and 100.");
  
  function guessNumber() {
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      console.log(`Is your number greater than ${mid}? (yes/no)`);
      
      readline.question("", (answer) => {
        if (answer.toLowerCase() === "yes") {
          low = mid + 1;
        } else {
          high = mid;
        }
        
        if (low === high) {
          console.log(`Your magic number is: ${low}`);
          readline.close();
        } else {
          guessNumber();
        }
      });
  
      return; // Exit the loop after the first question to wait for user input
    }
  }
  
  guessNumber();
  