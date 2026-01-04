import { useId } from "react";

function InputBox({
                    label,
                    amount,
                    onAmountChange,
                    amountDisabled = false,
                    selectedCurrency = "USD",
                    onCurrencyChange,
                    currencyDisabled = false,
                    currencyOptions = []
                 }) {

    const id = useId();

    return(
        <div className="bg-white p-3 rounded-lg text-sm flex">
            <div className="w-1/2">
                <label 
                    htmlFor={id}
                    className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>
                <input 
                    type="number" 
                    name="amount" 
                    id={id}
                    value={amount}
                    onChange={(e) => onAmountChange?.Number(e.target.value)}
                    disabled={amountDisabled}
                    className="outline-none w-full bg-transparent py-1.5" 
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    name="currency-type"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange?.(e.target.value)}
                    disabled={currencyDisabled}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                >
                    {currencyOptions.map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;