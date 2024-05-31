import React,{useState,useEffect } from "react";



export default function CountryInfo() {
  const [Countries, setCountries] = useState([]);
  useEffect(()=>{
    const fetchCountry = async()=>{
        try {
            const resp = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/country.json")
            const data = await resp.json();
            setCountries(data)
        } catch (error) {
            console.log("Error in fetching Countries Name")
        }
        
    };
    fetchCountry();

  },[])
  return Countries
}

