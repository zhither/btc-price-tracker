import axios from 'axios';
const currentData = async(currencyPair:string) => {
    try {
      const response = await axios.get(`https://www.bitstamp.net/api/v2/ticker_hour/${currencyPair}/`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

export default currentData;