// wallet.js

const Web3 = require('web3');
const { Account } = require('@solana/web3.js');
const { readFileSync } = require('fs');

// Connect to the Solana network
const web3 = new Web3(new Web3.providers.HttpProvider('https://testnet.solana.com'));

// Read the private key from a file
const privateKey = readFileSync('path/to/private/key.txt', 'utf8').trim();

// Create a new account from the private key
const account = new Account(privateKey);

// Function for sending Sol to another address
const sendSol = async (to, amount) => {
  // Create a new transaction
  const transaction = await web3.transactionBuilder.transfer(to, amount, account);

  // Sign the transaction with the private key
  const signature = account.sign(transaction);

  // Send the signed transaction to the Solana network
  const receipt = await web3.sendTransaction(transaction, signature);

  // Return the transaction receipt
  return receipt;
};

// Function for connecting to Phantom wallet
const connectWallet = async () => {
  // Initialize the Phantom wallet
  const wallet = await Phantom.getWallet();
  
  // Connect to the Phantom wallet
  await wallet.connect();
  
  // Return the connected wallet instance
  return wallet;
};

module.exports = { sendSol, connectWallet };
