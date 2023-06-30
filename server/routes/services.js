import express from "express"; // backend framework
<<<<<<< HEAD

const router = express.Router();

router.get('/')

export default router
=======
import axios from "axios";

const router = express.Router();

let fetchedCoinsAll = [];

const getAllCoins = async () => {
  try {
    const resPageOne = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en"
    );
    const resPageTwo = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=true&locale=en"
    );
    const resPageThree = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=3&sparkline=true&locale=en"
    );

    fetchedCoinsAll = [
      ...resPageOne?.data,
      ...resPageTwo?.data,
      ...resPageThree?.data,
    ];

    console.log("Data fetched and stored in fetchedCoinsAll:", fetchedCoinsAll);
  } catch (err) {
    console.log(err);
  }
};

let fetchedExchanges = [];

const getAllExchanges = async () => {
  try {
    const resPageOne = await axios.get(
      "https://api.coingecko.com/api/v3/exchanges?per_page=250&page=1"
    );
    const resPageTwo = await axios.get(
      "https://api.coingecko.com/api/v3/exchanges?per_page=250&page=2"
    );
    const resPageThree = await axios.get(
      "https://api.coingecko.com/api/v3/exchanges?per_page=250&page=3"
    );

    fetchedExchanges = [
      ...resPageOne?.data,
      ...resPageTwo?.data,
      ...resPageThree?.data,
    ];

    console.log("Data fetched and stored in fetchedCoinsAll:", fetchedCoinsAll);
  } catch (err) {
    console.log(err);
  }
};

let fetchedTrendingCoins = [];

const getTrendingCoins = async () => {
  try {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    fetchedTrendingCoins = [...res?.data?.coins];

    console.log(fetchedCoinsAll);
  } catch (error) {
    console.log(error);
  }
};

let btcPrice;

const getBtcPrice = async () => {
  try {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );

    btcPrice = res.data;
  } catch (error) {
    console.log(error);
  }
};

let fetchedNews = [];

const getAllNews = async () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  const formattedDateMinus = `${year}-${month}-${day - 7}`;
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=cryptocurrency&from=${formattedDateMinus}&to=${formattedDate}&sortBy=popularity&apiKey=b5daf3d3eadc418380996387610a8218`
    );

    fetchedNews = res.data.articles

    console.log(fetchedNews)

  } catch (error) {
    console.log(error);
  }
};

let globalData; 

const getGlobal =  async() => {
  try {
    const res = await axios.get(`https://api.coingecko.com/api/v3/global`)
    
    globalData = res.data
  } catch (error) {
    
  }
}

const startFetchingData = () => {
  // Call getAllCoins immediately on server startup
  getAllCoins();
  getAllExchanges();
  getTrendingCoins();
  getBtcPrice();
  getAllNews();
  getGlobal()
  

  // Schedule getAllCoins to be called every 2 minutes
  setInterval(getAllCoins, 3 * 60 * 1000); // 2 minutes in milliseconds
  setInterval(getAllExchanges, 3 * 60 * 1000); // 2 minutes in milliseconds
  setInterval(getTrendingCoins, 3 * 60 * 1000); // 2 minutes in milliseconds
  setInterval(getBtcPrice, 3 * 60 * 1000); // 2 minutes in milliseconds
  setInterval(getAllNews, 3 * 60 * 1000); // 2 minutes in milliseconds
  setInterval(getGlobal, 3 * 60 * 1000); // 2 minutes in milliseconds

  console.log("after two minutes");
};

startFetchingData();

router.get("/coins", async (req, res) => {
  try {
    res.status(200).json(fetchedCoinsAll);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/exchanges", async (req, res) => {
  try {
    res.status(200).json(fetchedExchanges);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/trending", async (req, res) => {
  try {
    res.status(200).json(fetchedTrendingCoins);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/btcPrice", async (req, res) => {
  try {
    res.status(200).json(btcPrice);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/news", async (req, res) => {
  try {
    res.status(200).json(fetchedNews);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/globaldata", async (req, res) => {
  try {
    res.status(200).json(globalData);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});


export default router;
>>>>>>> origin/master
