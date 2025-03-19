let money = 100, goal = 200, bets = 0, wins = 0;

while (money > 0 && money < goal) {
  let betResult = Math.random() < 0.5 ? "Loss" : "Win";
  bets++;

  switch (betResult) {
    case "Win":
      money++;
      wins++;
      break;
    case "Loss":
      money--;
      break;
  }

  console.log(`Bet: ${bets} | Result: ${betResult} | Money: Rs ${money}`);
}

console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(money === 0 ? "Gambler went broke!" : "Gambler reached the goal!");
