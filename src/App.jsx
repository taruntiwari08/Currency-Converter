import { useState } from 'react'
import useCurrencyInfo from './Customhooks/useCurrencyinfo'
import InputBox from './components/Inputbox'
import { Searchbar } from './components/Searchbar'
import CountryInfo from './Customhooks/UseCountryInfo'
import { bgImage } from './components/Index'

function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom]=useState("usd")
  const [To,setTo]=useState("inr")
  const[convertedAmount,setConvertedAmount]=useState(0)
  const [Search, setSearch] = useState("")
  const countryNames = CountryInfo()
  const updateCountryNames = Object.values(countryNames)

  const currencyInfo=useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(To)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert=()=>{
    setConvertedAmount(amount * currencyInfo[To])
  }
  return (
    <div
        className="w-full h-screen flex  justify-center items-center bg-cover bg-no-repeat object-cover  "
        style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            
        }}
    >
       
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-black border-solid rounded-xl p-5 backdrop-blur-sm bg-white/30">
                <h1 className='text-4xl font-bold text-center py-2 pb-4'>Currency Converter</h1>
                <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()

                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            selectCurrency={from}
                            onAmountchange={(amount)=>setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-700 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            Swap
                        </button>
                    </div>

                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOption={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={To}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-700 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
        <div className='w-4/12 backdrop-blur-sm shadow-2xl border rounded-lg border-black h-full max-md:w-full overflow-y-scroll'>
            <div  className='m-10'><h2 className=' text-center font-bold text-xl text-orange-900 mb-2'>List of Countries <br/>with their currency name</h2>
            <Searchbar setSearch={setSearch} />
                <ul>
                { updateCountryNames?.filter((data)=> (
                    Search.toLowerCase() === '' ? data : data.country_name.toLowerCase().includes(Search)
                )).map((data, index)=> (
                    <li key={index} className='w=full mb-2 border-gray-60 border rounded-lg p-5 backdrop-blur-sm bg-white/50 capitalize'>{data.country_name} <span className=' float-right lowercase'> {data.currency_code}</span></li>
                )) }
                </ul>
               
            </div>
        </div>
        </div>
       
   
)
                  }

export default App

