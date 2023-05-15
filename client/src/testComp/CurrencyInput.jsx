import PropTypes from "prop-types";
import React from 'react';
import currenciesSet from "../data/currencyFlag";

const CurrencyInput = (props) => {

    return (
        <div className="flex flex-col mx-[30px] mt-[20px]">
            <select className="border-[1px] border-[#9ccddc] 
            lg:w-[300px] lg:h-[50px] 
            md:w-[250px] md:h-[55px] 
            h-[40px] w-[150px] select-currency
            lg:text-xl md:text-lg text-[20px]
            rounded-sm bg-[#02121c] text-[white]  p-1 mb-3 "
            value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value) }>
                {props.currencies.map((currency => (
                        <option key={currency} value={`${currency}`}>
                            {currency}
                        </option>
                )))}
          </select>
          <input className="
          lg:h-[50px] lg:w-[300px] 
          md:h-[50px] md:w-[250px] 
          h-[40px] w-[150px] 
          text-[20px] 
          bg-gray-900 text-glow text-[white] p-2"
          placeholder="Enter Value"
          type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
          
        </div>
    );
}

CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
};

export default CurrencyInput