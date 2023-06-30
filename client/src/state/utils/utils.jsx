import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const getCoinData = id => {
  return axios.get(`${BASE_URL}/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const getCoinDataList = () => {
  return axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const getServerStatus = () => {
  return axios.get(`https://api.coingecko.com/api/v3/ping`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};


export const getTrending = () => {
  return axios.get(`https://api.coingecko.com/api/v3/search/trending`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const getBitcoinPrice = () => {
  return axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const getMeterData = () => {
  return axios.get(`https://api.alternative.me/fng/?limit=10&format=json`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const getCurrencyExchangeData = () => {
  return axios.get(`https://v6.exchangerate-api.com/v6/b51a7bc71ceacdda84823787/latest/USD`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};