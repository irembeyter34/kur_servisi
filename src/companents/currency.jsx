import React, { useState } from 'react'
import '../css/currency.css'
import { FiArrowRightCircle } from "react-icons/fi";
import axios from 'axios';

let base_url = "https://api.freecurrencyapi.com/v1/latest";
let api_key = "fca_live_NHNXKegRSRTkI3hU0VqTg065VxH2zSOuHRkhF2Q2";
// let exchange_api = `${base_url}`

function Currency() {
    const[amount,setAmonut] = useState();
    const[fromCurrency,setFromCurrency] = useState('USD');
    const[toCurrency,setToCurrency] = useState('TRY');
    const[result,setResult] = useState();

    const exchange = async () =>{
       const response = await axios.get(`${base_url}?apikey=${api_key}&base_currency=${fromCurrency}`);
       const result = (response.data.data[toCurrency] * amount).toFixed(3);
       setResult(result);
    }

  return (
    <div className='currency-div'>
        <div style={{fontFamily:'arial',backgroundColor:'black',color:'#fff', width:'100%',textAlign:'center'}}>
            <h3>DÖVİZ KURU UYGULAMASI</h3>
        </div>
        <div style={{marginTop:'25px'}}>
        <input type='number' className='amount' value={amount} onChange={(e) => setAmonut(e.target.value)}/>
        <select onChange={(e) =>setFromCurrency(e.target.value)} className='from currency-option'>
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
        </select>
        <FiArrowRightCircle style={{fontSize :'35px',marginRight :'10px',marginTop:'5px'}} />
        <select onChange={(e) =>setToCurrency(e.target.value)} className='from currency-option'>
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
        </select>
        <input type='number' className='result' value={result} onChange={(e) => setResult(e.target.value)}/>
        </div>  
        <div>
            <button onClick={exchange}  className='exchange-button'>Çevir</button>
        </div>    
    </div>
  )
}

export default Currency
