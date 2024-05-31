//This code defines a React component called InputBox which represents an input box for entering an amount and selecting a currency type. It provides options for customizing the label, default amount, currency options, and other features.

import React from 'react'
import { useId } from 'react';


function InputBox({
    // DEFINING PROPS FOR INPUT BOX
    label,  //The label for the input field.
    amount, //The value of the amount input field.
    onAmountchange,  //A callback function triggered when the amount input changes.
    onCurrencyChange, //A callback function triggered when the currency selection changes.
    currencyOption=[], // An array containing options for currency selection.
    selectCurrency="usd", //T0 select currency.
    amountDisable=false, //A boolean indicating whether the amount input is disabled.
    currencyDisable=false, //A boolean indicating whether the currency selection is disabled.
    className = "" //Additional CSS classes for styling purposes.
}) {
   //The useId hook from React is used to generate a unique ID for the amount input field, ensuring accessibility.
    const amountInputId=useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2" >
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    //this line ensures that when the user types something into the amount input field, it checks if there's a function called onAmountChange provided as a prop. If it exists, it calls that function with the new numeric value entered by the user as its argument. This allows the parent component to handle the change in the amount input field.
                    onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    
                >
                    {/* //this code snippet dynamically generates option elements for each currency in the currencyOption array, ensuring that the dropdown menu displays all available currency options for the user to select from. */}
                    {currencyOption.map((currency)=>(
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
