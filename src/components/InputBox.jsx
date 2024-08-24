import React, { useState } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
}) {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-full max-w-md p-4">
          <div className="flex flex-col w-1/2 mr-2">
            <label htmlFor="amount" className="mb-1 font-medium text-black">
              {label}
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
              value={amount}
              placeholder="0"
              onChange={(e) =>
                onAmountChange && onAmountChange(Number(e.target.value))
              }
            />
          </div>
          <div className="flex flex-col w-1/2 ml-2">
            <label htmlFor="currency" className="mb-1 font-medium text-black">
              Currency Type
            </label>
            <select
              id="currency"
              value={selectCurrency}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
              onChange={(e) =>
                onCurrencyChange && onCurrencyChange(e.target.value)
              }
            >
              {currencyOptions.map((currencyValue) => (
                <option key={currencyValue} value={currencyValue}>
                  {currencyValue}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputBox;
