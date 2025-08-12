const { useState, useMemo } = React;

export function CurrencyConverter() {
  const [amount, setAmount] = useState('')
  const [baseCurrency, setBaseCurrency] = useState("USD")
  const [targetCurrency, setTargetCurrency] = useState("EUR")
  const [converted, setConverted] = useState("")

    const rates = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.78,
    JPY: 140
  };


  return(

    <>

    <input type="number"
    value={amount}
    onChange = {(e) => setAmount(e.target.value)}
    
     />
    <select value ={baseCurrency} 
     onChange = {(e) => setBaseCurrency(e.target.value)}>

    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="GBP">GBP</option>
    <option value="JPY">JPY</option>
    </select>

    <select value={targetCurrency} 
     onChange = {(e) => setTargetCurrency(e.target.value)}>
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="GBP">GBP</option>
    <option value="JPY">JPY</option>
    </select>

    </>
  )
}
