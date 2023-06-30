import openai from "./config/openai.js";
import readlineSync from "readline-sync";
import colors from "colors";

async function main() {
  console.log(colors.bold.green(`Welcome to the ChatBotX!`));
  const userName = readlineSync.question(
    "Could you please tell me your name? "
  );

  const messages = [
    "How can I assist you today?",
    "What can I help you with?",
    "I'm here to chat. What's on your mind?",
    "How may I be of service?",
    "How can I be of assistance to you?",
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  console.log(colors.bold.cyan(`Hello 👋 ${userName}!, ${randomMessage}`));
  console.log(colors.bold.italic.green(`(Note : Type "exit" to end chat.)`));

  const chatHistory = []; // Store conversation history
  while (true) {
    const userInput = readlineSync.question(colors.bold.yellow(`You: `));

    try {
      // Construct messages by iterating over the history
      const messages = chatHistory.map(([role, content]) => ({
        role,
        content,
      }));

      // Add latest conversation to the messages
      messages.push({ role: "user", content: userInput });

      //calling the API with user input
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
      });

      // get text/content from completion
      const completionText = completion.data.choices[0].message.content;

      if (userInput.toLocaleLowerCase() === "exit") {
        console.log(colors.bold.green("Bot: ") + completionText);
        return;
      }

      console.log(colors.bold.green("Bot: ") + completionText);

      //Update history with user input ans assistant responce
      chatHistory.push(["user", userInput]);
      chatHistory.push(["assistant", completionText]);
    } catch (error) {
      console.error(colors.red(error));
    }
  }
}

main();
