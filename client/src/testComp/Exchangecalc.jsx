import CurrencyInput from "./CurrencyInput";
import {useState, useEffect} from "react";
import currenciesSet from "../data/currencyFlag";

import React from 'react'

const Exchangecalc = () => {
    
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('EUR');
    const [rates, setRates] = useState([]);

    const [changeCalc, setchangeCalc] = useState(false)

    useEffect(() => {

    fetch('https://v6.exchangerate-api.com/v6/b51a7bc71ceacdda84823787/latest/USD')
        .then(response => response.json())
        .then(data => data.conversion_rates)
        .then(data =>  {setRates(data);})
        .catch(error => console.log(error));

    },[])

    function format(number) {
        return number.toFixed(4);
      }
    
      function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
      }
    
      function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
      }
    
      function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
      }
    
      function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setCurrency2(currency2);
      }

      return (
        <div className={`flex ${changeCalc ? "flex-row" : "flex-row-reverse" } justify-around items-center my-2 w-full lg:flex-nowrap flex-nowrap `}>
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1} />
          <div className={`lg:text-7xl md:text-6xl text-5xl cursor-pointer duration-200
          flex flex-col justify-center items-center
          hover:scale-[1.1] ${changeCalc ? "text-[#fc3a3a]" : "text-[#4dff58]"}`}> 
            <ion-icon name="swap-horizontal-outline" 
            onClick={()=>setchangeCalc(!changeCalc)}
            ></ion-icon>
          </div>
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates)}
            amount={amount2}
            currency={currency2} />
        </div>
      );
}

export default Exchangecalc