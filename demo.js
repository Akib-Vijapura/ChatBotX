const messages = [
  "Hello, world!",
  "Welcome to the program.",
  "Have a great day!",
  "This is a random message.",
  "Coding is fun!",
];

function printRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  console.log(randomMessage);
}

// Print a random message
printRandomMessage();
