import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [from, setFrom] = useState("pkr");
  const [to, setTo] = useState("usd");
  const currency = useCurrencyInfo(from);

  const options = Object.keys(currency);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currency[to]);
  };
  return (
    <div
      className="flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/20843728/pexels-photo-20843728/free-photo-of-fan-of-spread-out-euro-banknotes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30">
          <h1 class="text-4xl font-bold text-center text-white mt-8 mb-4">
            Currency Converter
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className="w-full h-2 mt-6 ">
              <button
                type="button"
                className="absolute w-auto px-4 py-2 text-white transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 border-2 border-white rounded-md left-1/2"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
              />
            </div>
            <div className="grid justify-items-center ">
              <button
                type="submit"
                className="w-64 px-4 py-3 text-white bg-blue-600 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>

              <button
                type="reset"
                className="w-64 px-4 py-3 mt-3 text-white bg-blue-600 rounded-lg"
                onClick={(e) => {
                  e.preventDefault();
                  setAmount("");
                  setConvertedAmount("");
                  setFrom("pkr");
                  setTo("usd");
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
