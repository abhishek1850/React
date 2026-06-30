import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo' 
 
function App() {
  const [amount,setAmount]=useState()
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount]= useState()

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)


  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      }}
    >
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md border rounded-xl p-6 shadow-lg">
        <form className="space-y-4"
        onSubmit={(e)=>{
          e.preventDefault();
          convert();
        }}
        >

          {/* From Currency */}
          <div>
            <InputBox label="From"
            amount = {amount}
            currencyOptions={options}
            onCurrencyChange = {(currency)=>
                setAmount(amount)
            }
            onAmountChange={(amount)=>setAmount(amount)}
            selectCurrency={from}
            />

          </div>

          
          <div className="relative flex justify-center">
            <button
              type="button"
              className="absolute -top-2 bg-blue-600 text-white px-4 py-1 rounded-md border-2 border-white"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* To Currency */}
          <div className="pt-4">
            <InputBox label="To"
            amount = {convertedAmount}
            currencyOptions={options}
            onCurrencyChange = {(currency)=>setFrom(currency)}
           
            selectCurrency={to}
            amountDisable
            />
             
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Convert
          </button>

        </form>
      </div>
    </div>
  );

}
export default App;

 
