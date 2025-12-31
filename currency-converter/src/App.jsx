import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('PHP');
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  return(
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-violet-600 to-indigo-600">
      <h1 className="text-2xl text-white">Currency Converter</h1>
    </div>
  );
}

export default App;