import axios from "axios";

export const getAllCoinData = async (req, res) => {
  try {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en"
    );

    coinList = res.data;

    res.status(200).json(coinList);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
