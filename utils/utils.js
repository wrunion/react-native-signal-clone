import axios from 'axios';

export const SIGNAL_LOGO_URI = 'https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png'
export const DEFAULT_USER_ICON_URI = 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png'
export const PRIMARY_BLACK = '#2F3136'
export const PRIMARY_BLUE = '#3F6AE5'
export const BACKGROUND_GREY = '#ECECEC'

export const sendMessage = async (message) => {
  try {
    const userId = 'testUser1'
    const uri = `http://api.brainshop.ai/get?bid=170772&key=e5ND9Yg3n0pKqf9i&uid=${userId}&msg=${message}`;
    const response = await axios.get(uri);
    // TODO: store the response in session storage chat log
    // API documentation: https://brainshop.ai/node/262042
    return response.data.cnt;
  } catch (error) {
    alert('Something went wrong. Please try again.') 
  }
}

export const sendMessageDev = () => 'okay'