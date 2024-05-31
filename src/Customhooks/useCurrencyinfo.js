//This code defines a custom React Hook called useCurrencyInfo, which is designed to fetch information about a specific currency from an external API. It utilizes React's useState and useEffect hooks to manage state and perform side effects respectively.

import {useEffect, useState} from "react"

// The useCurrencyInfo function takes a currency parameter, representing the currency code (e.g., USD, EUR).
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    
// It initializes a state variable data using the useState hook to store the currency information fetched from the API.   

// The useEffect hook is utilized to perform side effects, specifically fetching currency data from the provided API endpoint when the currency value changes.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
// The fetch function is used to make a GET request to the API endpoint, which returns a Promise. Upon resolution, the response is converted to JSON using the json() method.
// The retrieved currency data is then stored in the data state variable using setData.

    return data
}

export default useCurrencyInfo;





