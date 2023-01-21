// flip.js

// Function for generating a random coin flip
const flipCoin = () => {
  // Generate a random number between 0 and 1
  const flip = Math.random();

  // If the number is less than 0.5, return "heads", else return "tails"
  if (flip < 0.5) {
    return "heads";
  } else {
    return "tails";
  }
};

module.exports = { flipCoin };
