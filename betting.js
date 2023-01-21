// betting.js

const { flipCoin } = require('./flip');
const { sendSol } = require('./wallet');

// Function for placing a bet
const placeBet = async (wallet, amount, guess) => {
  // Get the balance of the wallet
  const balance = await wallet.getBalance();

  // Check if the bet amount is less than the balance
  if (amount > balance) {
    throw new Error('Insufficient funds');
  }

  // Flip the coin
  const flip = flipCoin();

  // Check if the guess matches the flip
  if (guess === flip) {
    // Send the winnings to the wallet
    const winnings = amount * 2;
    await sendSol(wallet.address, winnings - amount);
    return { result: 'win', flip };
  } else {
    // Send the bet amount to the house wallet
    await sendSol(houseWalletAddress, amount);
    return { result: 'lose', flip };
  }
};

module.exports = { placeBet };
