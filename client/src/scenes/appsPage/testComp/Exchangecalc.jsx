import CurrencyInput from "./CurrencyInput";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import React from "react";

const Exchangecalc = () => {
  const mode = useSelector((state) => state.mode)
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [rates, setRates] = useState([]);

  const [changeCalc, setchangeCalc] = useState(false);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/b51a7bc71ceacdda84823787/latest/USD"
    )
      .then((response) => response.json())
      .then((data) => data.conversion_rates)
      .then((data) => {
        setRates(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div
      className={`flex ${
        changeCalc ? "flex-row" : "flex-row-reverse"
      } my-2 w-full flex-nowrap items-center justify-around lg:flex-nowrap `}
    >
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
      <div
        className={`flex cursor-pointer flex-col items-center justify-center
          text-5xl duration-200 hover:scale-[1.1] md:text-6xl
          lg:text-7xl ${
            changeCalc
              ? `${mode === "light" ? "text-[#d82e2e]" : "text-[#ff6666]"} `
              : `${mode === "light" ? "text-[#28a733]" : "text-[#2ae937]"} `
          }`}
      >
        <ion-icon
          name="swap-horizontal-outline"
          onClick={() => setchangeCalc(!changeCalc)}
        ></ion-icon>
      </div>
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
};

export default Exchangecalc;
