import { useState } from "react";
//import { useCurrencyInfo } from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('PHP');
  const [convertedAmount, setConvertedAmount] = useState(0);

  //const currencyInfo = useCurrencyInfo(baseCurrency);
  //const currencyCodes = currencyInfo ? Object.keys(currencyInfo) : [];
  
  return(
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-violet-600 to-indigo-600">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form action="">
            <div className="w-full mb-1">
              <InputBox />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;