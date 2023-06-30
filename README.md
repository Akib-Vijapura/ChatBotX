# ChatBotX CLI App

Welcome to ChatBotX CLI App! This is a command-line interface application that utilizes the OpenAI API and Node.js to provide a chat-based conversational experience powered by the **GPT-3.5-turbo** language model.

## Prerequisites

Before running this application, please make sure you have the following prerequisites installed on your system:

- Node.js: [https://nodejs.org](https://nodejs.org)
- npm (Node Package Manager): This is typically installed along with Node.js.

## Installation

1. Clone the repository or download the source code:
 ```
 git clone https://github.com/Akib-Vijapura/ChatBotX.git
 ```

2. Navigate to the project directory:
```
cd ChatBotX
```


3. Install the required dependencies:
``` 
npm install
``` 


4. Set up the OpenAI API credentials:

- Obtain an API key from OpenAI by creating an account and subscribing to the appropriate plan. More information can be found at [https://openai.com](https://openai.com).
- Create a file named `.env` in the project root directory.
- Add your OpenAI API key to the `.env` file using the following format:

  ```
  OPENAI_API_KEY=YOUR_API_KEY
  ```

## Usage

To start using MyChatGPT CLI App, open a terminal and navigate to the project directory. Run the following command:
```
node index.js
```

Once the application is running, you can start a conversation by typing your messages in the terminal. The application will send your messages to the OpenAI API and display the model's responses. You can have a back-and-forth conversation with the chatbot by entering messages one after another. And this app also stores your previous history and gives answers based on your previous chats.

To exit the application, simply type `exit` or press `Ctrl + C`.

## Customization

You can customize various aspects of the application according to your needs:

- **Conversation Parameters**: The conversation parameters, such as the model to use, the temperature, and the maximum tokens, can be modified in the `index.js` file.

- **User Interface**: If you want to customize the CLI interface, you can modify the code in the `index.js` file.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Disclaimer

This application uses the OpenAI API to generate responses. Please review and comply with the OpenAI API usage policies and guidelines. The developer of this application is not responsible for any misuse or violations of the OpenAI terms and conditions.

---

That's it! Feel free to modify this README.md file according to your specific application's requirements. Good luck with your ChatBotx CLI App!


