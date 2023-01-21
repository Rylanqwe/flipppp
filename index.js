// index.js
const { connectWallet } = require('./wallet');
const { placeBet } = require('./betting');

// Connect to the user's Phantom wallet
const wallet = await connectWallet();

// Get the user's bet amount and guess from the command line
const amount = readlineSync.questionFloat('Enter the amount to bet: ');
const guess = readlineSync.question('Enter your guess (heads or tails): ');

// Place the bet
const result = await placeBet(wallet, amount, guess);

console.log(`You ${result.result}! The flip was ${result.flip}.`);
