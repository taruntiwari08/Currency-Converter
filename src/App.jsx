import { useState } from 'react'
import useCurrencyInfo from './Customhooks/useCurrencyinfo'
import InputBox from './components/Inputbox'
import { Searchbar } from './components/Searchbar'
import CountryInfo from './Customhooks/UseCountryInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom]=useState("usd")
  const [To,setTo]=useState("inr")
  const[convertedAmount,setConvertedAmount]=useState(0)
  const [Search, setSearch] = useState("")
  const countryNames = CountryInfo()
  const updateCountryNames = Object.values(countryNames)

  // USING/CALLING OUR CUSTOM HOOK TO FETCH CURRENCY INFO 
  const currencyInfo=useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)
// FUNCTION TO SWAP UPPER AND LOWER INPUT BOX THAT IS FROM TO VALUES
  const swap=()=>{
    setFrom(To)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
// FUNCTION TO CONVERT THE MONEY
  const convert=()=>{
    setConvertedAmount(amount * currencyInfo[To])
  }
  return (
    <div
        className="w-full h-screen flex  justify-center items-center bg-cover bg-no-repeat object-cover  "
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
                    {/* // FROM BOX PART VALUE ASSIGNING USING OUR PRE DEFINED COMPONENT INPUT BOX */}
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

                    {/* // TO BOX PART VALUE ASSIGNING USING OUR PRE DEFINED COMPONENT INPUT BOX */}
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
