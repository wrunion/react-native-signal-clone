import axios from 'axios';

export const SIGNAL_LOGO_URI = 'https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png'
export const DEFAULT_USER_ICON_URI = 'https://raw.githubusercontent.com/wrunion/react-native-signal-clone/main/assets/user-icon-default.jpg'
export const PRIMARY_BLACK = '#2F3136'
export const PRIMARY_BLUE = '#3F6AE5'
export const BACKGROUND_GREY = '#ECECEC'

// API documentation: https://brainshop.ai/node/262042
export const sendMessage = async (message) => {
  try {
    const userId = 'testUser1'
    const uri = `http://api.brainshop.ai/get?bid=170772&key=e5ND9Yg3n0pKqf9i&uid=${userId}&msg=${message}`;
    const response = await axios.get(uri);
    return response.data.cnt;
  } catch (error) {
    // If something goes wrong with the API call, call the local chatbot function instead.
    const response = sendMessageDev();
    return response;
  }
}

const generateRandomNumber = () => Math.floor(Math.random() * 10);

// Smalltalk source: https://github.com/alyssaong1/botframework-smalltalk/blob/master/lib/smalltalk.js
const smalltalkPhrases = [
  "How is your day?",
  "Do you have any pets?",
  "I like chatting with you!",
  'I chat, therefore I am.',
  "Cool me too. How is your family doing?",
  "I feel you. How's the day treating you so far?",
  "Nice! How's the weather where you are?",
  "Read any good books latey?",
  "Do you like the songs on the radio?",
  "What's your favorite TV show?"
]

const greetings = [
  "Hi there, friend!",
  "Hey!",
  "Good day!",
  "Howdy."
]

const goodbyes = [
  "See you soon!",
  "Bye-bye!",
  "Till next time!",
  "Bye."
]

export const sendMessageDev = () => {
  const index = generateRandomNumber();
  return smalltalkPhrases[index];
}