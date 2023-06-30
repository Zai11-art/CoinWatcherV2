import PropTypes from "prop-types";
import React from 'react';
<<<<<<< HEAD

const CurrencyInput = (props) => {

    return (
        <div className="flex flex-col mx-[30px] mt-[20px]">
            <select className="border-[1px] border-[#9ccddc] 
=======
import { useSelector } from "react-redux";

const CurrencyInput = (props) => {
    const mode = useSelector((state) => state.mode)

    return (
        <div className="flex flex-col mx-[30px] mt-[20px]">
            <select className={`border-[1px] border-[#9ccddc] 
>>>>>>> origin/master
            lg:w-[300px] lg:h-[50px] 
            md:w-[250px] md:h-[55px] 
            h-[40px] w-[150px] select-currency
            lg:text-xl md:text-lg text-[20px]
<<<<<<< HEAD
            rounded-sm bg-[#02121c] text-[white]  p-1 mb-3 "
=======
            rounded-sm  ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"}  p-1 mb-3 `}
>>>>>>> origin/master
            value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value) }>
                {props.currencies.map((currency => (
                        <option key={currency} value={`${currency}`}>
                            {currency}
                        </option>
                )))}
          </select>
<<<<<<< HEAD
          <input className="
=======
          <input className={`
>>>>>>> origin/master
          lg:h-[50px] lg:w-[300px] 
          md:h-[50px] md:w-[250px] 
          h-[40px] w-[150px] 
          text-[20px] 
<<<<<<< HEAD
          bg-gray-900 text-glow text-[white] p-2"
=======
          bg-gray-900 text-glow ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"} p-2`}
>>>>>>> origin/master
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