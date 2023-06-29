import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getCoinData = async (id) => {
  return await axios
    .get(
      `${BASE_URL}/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
    )
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const getExchangeData =  (exchangeId) => {
  return  axios
    .get(
      `https://api.coingecko.com/api/v3/exchanges/${exchangeId}`
    )
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

// export const getCoinDataList = () => {
//   return axios
//     .get(
//       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en`
//     )
//     .then((response) => response.data)
//     .catch((error) => {
//       console.log(error);
//       throw error;
//     });
// };

// export const getServerStatus = () => {
//   return axios
//     .get(`https://api.coingecko.com/api/v3/ping`)
//     .then((response) => response.data)
//     .catch((error) => {
//       console.log(error);
//       throw error;
//     });
// };

// export const getTrending = () => {
//   return axios
//     .get(`https://api.coingecko.com/api/v3/search/trending`)
//     .then((response) => response.data)
//     .catch((error) => {
//       console.log(error);
//       throw error;
//     });
// };

// export const getBitcoinPrice = () => {
//   return axios
//     .get(
//       `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
//     )
//     .then((response) => response.data)
//     .catch((error) => {
//       console.log(error);
//       throw error;
//     });
// };

// export const getMeterData = () => {
//   return axios
//     .get(`https://api.alternative.me/fng/?limit=10&format=json`)
//     .then((response) => response.data)
//     .catch((error) => {
//       console.log(error);
//       throw error;
//     });
// };

// export const getCurrencyExchangeData = () => {
//   return axios
//     .get(
//       `https://v6.exchangerate-api.com/v6/b51a7bc71ceacdda84823787/latest/USD`
//     )
//     .then((response) => response.data)
//     .catch((error) => {
//       console.log(error);
//       throw error;
//     });
// };

// date functions
export const dateConverter = (receivedDate) => {
  const timeNow = new Date();
  const newDate = new Date(receivedDate);
  const timeElapsed = Math.abs(timeNow - newDate);

  const secs = Math.floor(timeElapsed / 1000);
  const mins = Math.floor(secs / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  return months > 0
    ? months === 1
      ? `${months} month ago`
      : `${months} months ago`
    : weeks > 0
    ? weeks === 1
      ? `${weeks} week ago`
      : `${weeks} weeks ago`
    : days > 0
    ? days === 1
      ? `${days} day ago`
      : `${days} days ago`
    : hours > 0
    ? hours === 1
      ? `${hours} hour ago`
      : `${hours} hours ago`
    : mins > 0
    ? mins === 1
      ? `${mins} min ago`
      : `${mins} mins ago`
    : secs === 1
    ? `${secs} sec ago`
    : `${secs} secs ago`;
};

export const dateReformat = (receivedDate) => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const reformattedDate = new Date(receivedDate).toLocaleDateString(
    undefined,
    options
  );
  return reformattedDate;
};
