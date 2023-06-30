import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

// Load the OpenAI API key from the .env file
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create an instance of the OpenAIApi using the configuration
const openai = new OpenAIApi(configuration);

export default openai; // Export the openai instance for use in other files
