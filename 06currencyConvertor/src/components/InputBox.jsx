import React from "react"
import {useId} from "react"

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false
}) {

  const id = useId()

  return (
    <div className="bg-white p-3 rounded-lg flex">

      {/* Left Side */}
      <div className="w-1/2">
        <label htmlFor={id} className="text-gray-500 mb-2 inline-block">
          {label}
        </label>

        <input
          type="number"
          id={id}
          value={amount}
          placeholder="Amount"
          className="w-full outline-none bg-transparent py-1.5"
          disabled={amountDisable}
          onChange={(e) => onAmountChange &&
            onAmountChange(Number(e.target.value)) 
          }
          

           
        />
        
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex flex-col items-end">

        <p className="text-gray-500 mb-2">
          Currency Type
        </p>

        <select 
        value={selectCurrency}
        className="bg-gray-100 rounded-lg px-2 py-1 outline-none cursor-pointer"
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange &&
            onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}

        </select>

      </div>

    </div>
  );
}

export default InputBox;