import axios from 'axios';

export const SIGNAL_LOGO_URI = 'https://raw.githubusercontent.com/wrunion/react-native-signal-clone/main/assets/signal-logo-2.png'
export const DEFAULT_USER_ICON_URI = 'https://raw.githubusercontent.com/wrunion/react-native-signal-clone/main/assets/user-icon-default.jpg'
export const PRIMARY_BLACK = '#2F3136'
export const PRIMARY_BLUE = '#3F6AE5'
export const BACKGROUND_GREY = '#ECECEC'

export const sendMessage = async (message) => {
  try {
    const uri = `http://api.brainshop.ai/get?bid=170772&key=e5ND9Yg3n0pKqf9i&uid=testuser1&msg=${message}`;
    const response = await axios.get(uri);
    return response.data.cnt;
  } catch (error) {
    const response = sendMessageDev();
    return response;
  }
}

const generateRandomNumber = () => Math.floor(Math.random() * 10);

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

export const sendMessageDev = () => {
  const index = generateRandomNumber();
  return smalltalkPhrases[index];
}

export const getTimestamp = () => {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  return `${hour <= 12 ? hour : hour - 12}:${minutes < 10 ? '0'+ minutes : minutes } ${hour <= 12 ? 'am' : 'pm'}`;
}

/*
Resources:
- Local chatbox text source: https://github.com/alyssaong1/botframework-smalltalk/blob/master/lib/smalltalk.js
- Remote chatbot API documentation: https://brainshop.ai/node/262042
*/