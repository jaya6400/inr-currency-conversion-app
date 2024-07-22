import './App.css';
import CurrencyInput from "./currencyInput";
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState([]);

//to extract import export currency data from icegate portal used parsehub api
//(but was unable to receive a response due to network error)
//https://parsehub.com/api/v2/projects/{tnShPoS2TVXt}/last_ready_run/data
//so I used a third-party exchange rate(open-er)api to fetch current currency exchange data

  useEffect(() => {
    axios.get('https://open.er-api.com/v6/latest/USD')
      .then(response => {
        setRates(response.data.rates);
      })  
      .catch(err => {
        console.log(err);
      });
  }, []);
  
  useEffect(() => {
    if (!!rates) {
      function init(){
        handleAmount1Change(1); 
      }
      init();
    }  // eslint-disable-next-line 
  }, [rates]); 

  function format(number) {
    return number.toFixed(4);
  }  
 
  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }


  return (
    <div>
      <h2>Check the Current INR Currency Conversion</h2>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1} />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2} />
    </div>
  );
}

export default App;