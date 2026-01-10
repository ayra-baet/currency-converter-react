import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('PHP');
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useFetch(baseCurrency);
  const currencyCodes = currencyInfo ? Object.keys(currencyInfo) : [];

  const handleSwap = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
    setAmount("");
    setConvertedAmount("");
  }

  const handleConvert = () => {
    if (!currencyInfo || !currencyInfo[targetCurrency]) return
    setConvertedAmount((amount * currencyInfo[targetCurrency]).toFixed(2));
  }

  return(
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-violet-600 to-indigo-600">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConvert();
            }}  
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amt) => setAmount(amt)}
                currencyDropdown={currencyCodes}
                selectedCurrency={baseCurrency}
                onCurrencyChange={(currency) => setBaseCurrency(currency)}
              />

              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-indigo-600 text-white px-2 py-0.5"
                  onClick={handleSwap}
                >
                  Swap
                </button>
              </div>

              <div className="w-full mb-1">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  amountDisabled
                  currencyDropdown={currencyCodes}
                  selectedCurrency={targetCurrency}
                  onCurrencyChange={(currency) => setTargetCurrency(currency)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-3 rounded lg"
              >
                Convert {baseCurrency} to {targetCurrency}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;