const prompt = require('prompt-sync')();

function futureInvestmentValue(investmentAmount, monthlyInterestRate, years) {
	return investmentAmount * Math.pow(1 + monthlyInterestRate, 12 * years);
}

function displayInvestmentTable() {
	const investmentAmount = prompt("Enter the investment amount: ");
  	const annualInterestRate = prompt("Enter the annual interest rate (in percent): ");
  	const monthlyInterestRate = annualInterestRate / 100 / 12; 

	console.log("Years    FutureValue");

	for (let years = 1; years <= 30; years++) {
		const futureValue = futureInvestmentValue(investmentAmount, monthlyInterestRate, years);
		console.log(`${years.toString().padEnd(5)}  ${futureValue.toFixed(2)}`);
     }
  }
displayInvestmentTable();